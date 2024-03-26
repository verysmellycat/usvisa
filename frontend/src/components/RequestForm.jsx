import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { format, addMonths } from "date-fns";
import DatePicker from "react-datepicker";
import { useCallback } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Select, SelectItem } from "@nextui-org/react";
import { countryMap, countries } from "../config";
import { Checkbox } from "@nextui-org/react";

export default function RequestForm({ variant, setters }) {
  const { t } = useTranslation();
  const params = useParams();
  const { country } = params;
  const { setFormData, setActiveTab } = setters;
  const [consulates, setConsulates] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [skipTomorrow, setSkipTomorrow] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [timeIntervals, setTimeIntervals] = useState([]);

  useEffect(() => {
    let consulates = countries[countryMap[country][0]][country];
    setConsulates(consulates);
  }, [country]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleTimeAdd = useCallback(
    debounce(() => {
      setTimeIntervals([
        ...timeIntervals,
        {
          from: new Date(),
          to: addMonths(new Date(), 8),
        },
      ]);
    }, 300),
    [timeIntervals],
  );

  const handleTimeDelete = useCallback(
    debounce((index) => {
      const newIntervals = timeIntervals.filter((_, i) => i !== index);
      setTimeIntervals(newIntervals);
    }, 300),
    [timeIntervals],
  );

  const handleTimeChange = (index, type, date) => {
    const newIntervals = [...timeIntervals];
    newIntervals[index][type] = date;
    setTimeIntervals(newIntervals);
  };

  const handleFormSubmit = (formData) => {
    const formattedTimeIntervals = timeIntervals.map((interval) => ({
      from: parseInt(format(interval.from, "yyyyMMdd")),
      to: parseInt(format(interval.to, "yyyyMMdd")),
    }));
    const data = {
      ...formData,
      conditions: formattedTimeIntervals,
      action: "create",
      country: country,
    };
    if (variant === "ais") {
      data.schedule_ids =
        formData.schedule_ids === "" ? [] : formData.schedule_ids.split(",");
      data.cities = formData.cities.split(",");
      data.skip_tomorrow = skipTomorrow;
    } else {
      data.applicants = parseInt(formData.applicants);
    }
    setFormData(data);
    setActiveTab((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-y-3 py-6">
      <p className="text-xl font-semibold">请提供以下必要信息</p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex w-full flex-col gap-y-3 lg:w-3/5"
        noValidate
      >
        <div className="relative flex items-center">
          <p className="grow text-center text-sm">
            期望预约时间范围<span className="text-red-500"> *</span>
          </p>
          <button
            className="absolute right-0 top-0 flex items-center gap-x-1 text-sm"
            onClick={(e) => {
              e.preventDefault();
              handleTimeAdd();
            }}
          >
            <IoIosAddCircle size={20} />
            {t("form.datepickerButtonText")}
          </button>
        </div>
        {timeIntervals.length === 0 && (
          <p className="text-center text-sm">尚未添加任何时间！</p>
        )}
        {timeIntervals.map((timeInterval, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="grid grid-flow-row-dense gap-x-3 gap-y-1 lg:grid-flow-col-dense">
              <div className="grid grid-flow-col-dense items-center">
                <label className="text-sm">{t("form.datepickerStart")}</label>
                <DatePicker
                  className="ml-2 max-w-32 rounded-lg border border-foreground text-center text-sm"
                  selected={timeInterval.from}
                  dateFormat="yyyy/MM/dd"
                  minDate={timeInterval.from}
                  popperPlacement="bottom"
                  onFocus={(e) => e.target.blur()}
                  onChange={(date) => handleTimeChange(index, "from", date)}
                />
              </div>
              <div className="grid grid-flow-col-dense items-center">
                <label className="text-sm">{t("form.datepickerEnd")}</label>
                <DatePicker
                  className="ml-2 max-w-32 rounded-lg border border-foreground text-center text-sm"
                  selected={timeInterval.to}
                  dateFormat="yyyy/MM/dd"
                  minDate={timeInterval.from}
                  popperPlacement="bottom"
                  onFocus={(e) => e.target.blur()}
                  onChange={(date) => handleTimeChange(index, "to", date)}
                />
              </div>
            </div>
            <Button
              isIconOnly
              onPress={() => handleTimeDelete(index)}
              className="bg-transparent"
            >
              <MdDelete size={20} />
            </Button>
          </div>
        ))}
        {timeIntervals.length !== 0 && (
          <Checkbox isSelected={skipTomorrow} onValueChange={setSkipTomorrow}>
            <p className="text-sm">
              我没法及时赶到第二天的面试，勾选跳过这些slot
            </p>
          </Checkbox>
        )}
        {errors?.timeIntervals && (
          <p className="ml-1 text-xs text-danger">
            {errors.timeIntervals.message}
          </p>
        )}
        {variant === "ais" && (
          <>
            <Controller
              control={control}
              name="schedule_ids"
              defaultValue=""
              rules={{
                pattern: {
                  value: /^\d{8}(,\d{8})*$/,
                  message: t("form.fieldErrorMessage2a"),
                },
                minLength: {
                  value: 8,
                  message: t("form.fieldErrorMessage2b"),
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  variant="underlined"
                  className="w-full"
                  label="Schedule ID"
                  type="text"
                  placeholder={t("form.fieldPlaceholder2")}
                  errorMessage={errors?.schedule_ids?.message}
                ></Input>
              )}
            />
            <Controller
              control={control}
              name="cities"
              rules={{ required: t("form.fieldErrorMessage3") }}
              render={({ field }) => (
                <Select
                  {...field}
                  variant="underlined"
                  className="w-full"
                  label={t("form.fieldLabel3")}
                  placeholder={t("form.fieldPlaceholder3")}
                  selectionMode="multiple"
                  errorMessage={errors?.cities?.message}
                  closeMenuOnSelect={false}
                  isRequired
                >
                  {consulates.map((consulate, index) => (
                    <SelectItem key={consulate} value={consulate}>
                      {consulate}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </>
        )}
        <Controller
          control={control}
          name="password"
          rules={{
            minLength: {
              value: 8,
              message: "密码至少需要8个字符",
            },
            required: "请输入预约网站登陆密码",
          }}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              variant="underlined"
              className="w-full"
              label={t("预约网站登陆密码")}
              type="password"
              errorMessage={errors?.password?.message}
              isRequired
            />
          )}
        />
        {variant === "cgi" && (
          <Controller
            control={control}
            name="applicants"
            rules={{
              pattern: {
                value: /^[1-9]$/,
                message: "请输入1到9之间的数字",
              },
              required: "请输入预约人数",
            }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                variant="underlined"
                className="w-full"
                label={t("预约人数")}
                type="text"
                errorMessage={errors?.applicants?.message}
                isRequired
              />
            )}
          />
        )}
        {variant === "cgi" && (
          <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
            <p className="text-sm">
              请确保你填写的人数与账户中一致，否则程序无法正常运行
            </p>
          </Checkbox>
        )}
        <Button
          className="bg-foreground text-background"
          type="submit"
          isDisabled={variant === "cgi" && !isSelected}
          onClick={() => {
            if (timeIntervals.length === 0) {
              setError("timeIntervals", {
                type: "manual",
                message:
                  "请至少提交一个期望时间范围并再三确认这是你想要的时间！",
              });
            } else if (errors?.timeIntervals) {
              clearErrors("timeIntervals");
            }
          }}
        >
          {t("提交")}
        </Button>
      </form>
    </div>
  );
}
