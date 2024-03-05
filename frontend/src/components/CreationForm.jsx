import { useState, useCallback, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectItem,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosInformationCircle, IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import DatePicker from "react-datepicker";
import { format, addMonths } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { countries, countryMap } from "../config.js";
import CountrySelector from "./CountrySelector.jsx";

export const whyHelperText = [
  "这个实验项目只为看劣币驱逐良币是否总是成立, 黄牛真的必要存在于世?",

  "我自己要申请美签, 黄牛们狮子大开口, 一个人居然要 600 刀",

  "抢加拿大美签黄牛价大概在 $150~$800 之间, 可能还有更贵更离谱的",

  "系统本是开放给大家免费使用, 如果每个成功预约的朋友愿意给黄牛最低价三分之一的tips, 这个项目就能坚持到黄牛消失",

  "但经过两个月的运行, 即使已经成功帮助了几百人, 真正会给tips的寥寥可数, 更有黄牛利用系统漏洞为自己牟利",

  "为了更多人能从中受益, 系统使用不再采取小费制, 需要收取一定费用",

  "这个费用只为补贴项目正常运行成本, 相比黄牛价来说我相信是非常合理的",

  "希望这个项目比黄牛晚一天消失!! 我是个乐观的悲观主义者",
];

export const scheduleIdHelperText = [
  "如果账户下所有已预约了的人都想用程序抢签, 这里可以留空, 程序会自动判断出来, 非常方便",

  "打开 usvisa-info 登陆之后点击右上角 Continue 进入下一个页面, 网址将会类似于 https://ais.usvisa-info.com/en-ca/niv/schedule/54306276/continue_actions, 中间那串数字 54306276 就是 schedule_id, 确保 url 中包含/schedule/数字",

  "如果网址类似于 https://ais.usvisa-info.com/en-ca/niv/groups/38929138, 里面包含 /groups/, 那是错误的, 不要填!!",

  "这个数字不是 IVR Account Number!!",

  "如果多人在一个 group 里面, 记得拆分开, 一人一个 schedule_id",

  "拆开很简单, 点 Reschedule Appointment 按钮, 勾选一个人, 确认下一步即可分开",

  "如果需要程序抢账户下某几个人的 slot, 可以用逗号区分开, 比如 54306276,54306278,54306280",
];

const CreationForm = () => {
  const [formData, setFormData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(new Set(["Canada"]));
  const [selectedCities, setSelectedCities] = useState([]);
  const [consulates, setConsulates] = useState([]);
  const [timeIntervals, setTimeIntervals] = useState([
    {
      from: new Date(),
      to: addMonths(new Date(), 8),
    },
  ]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onFormSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      const formattedTimeIntervals = timeIntervals.map((interval) => ({
        from: parseInt(format(interval.from, "yyyyMMdd")),
        to: parseInt(format(interval.to, "yyyyMMdd")),
      }));
      const [countrySelection] = selectedCountry;
      setFormData({
        ...data,
        schedule_ids:
          data.schedule_ids === "" ? [] : data.schedule_ids.split(","),
        cities: data.cities.split(","),
        date_ranges: formattedTimeIntervals,
        action: "create",
        countryFull: countrySelection,
        country: countryMap[countrySelection][1],
      });
      onOpen();
    }
  };

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

  const onRead = () => {
    onOpenChange(false);
    navigate("/submission", { state: { formData } });
  };

  const handleTimeChange = (index, type, date) => {
    const newIntervals = [...timeIntervals];
    newIntervals[index][type] = date;
    setTimeIntervals(newIntervals);
  };

  useEffect(() => {
    let [countrySelection] = selectedCountry;
    setSelectedCities([]);
    if (!countrySelection) {
      setConsulates([]);
      return;
    }
    let consulates =
      countries[countryMap[countrySelection][0]][countrySelection];
    setConsulates(consulates);
  }, [selectedCountry]);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-full flex-col gap-y-3"
      noValidate
    >
      <div className="flex items-center gap-x-2">
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
              className="w-full"
              label="Schedule ID"
              type="text"
              placeholder={t("form.fieldPlaceholder2")}
              errorMessage={errors?.schedule_ids?.message}
            ></Input>
          )}
        />
        <Popover placement="right">
          <PopoverTrigger>
            <Button isIconOnly size="sm" className="bg-transparent">
              <IoIosInformationCircle color="red" size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <ul className="max-w-64 list-disc space-y-2 text-xs">
                {scheduleIdHelperText.map((text, index) => (
                  <li key={index}>
                    {t(`scheduleIdHelperText.text${index + 1}`)}
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <CountrySelector
        countryState={{ selectedCountry, setSelectedCountry }}
        control={control}
        errors={errors}
      />
      <div>
        <Controller
          control={control}
          name="cities"
          rules={{ required: t("form.fieldErrorMessage3") }}
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label={t("form.fieldLabel3")}
              placeholder={t("form.fieldPlaceholder3")}
              selectionMode="multiple"
              errorMessage={errors?.cities?.message}
              validationState={errors.cities ? "invalid" : "valid"}
              closeMenuOnSelect={false}
              isRequired
              selectedKeys={selectedCities}
              onSelectionChange={setSelectedCities}
            >
              {consulates.map((consulate) => (
                <SelectItem key={consulate.value} value={consulate.value}>
                  {consulate.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="password"
          rules={{ required: t("form.fieldErrorMessage4") }}
          render={({ field }) => (
            <Input
              {...field}
              className="w-full"
              label={t("form.fieldLabel4")}
              type="password"
              errorMessage={errors?.password?.message}
              isRequired
            ></Input>
          )}
        />
      </div>
      <ul className="ml-3 flex list-disc flex-col gap-y-2 text-wrap text-xs">
        <li> {t("text.text3")}</li>
        <li> {t("text.text4")}</li>
        <li> {t("text.text5")}</li>
      </ul>
      <p className="text-center text-sm">
        {t("form.datepickerHeader")}
        <span className="text-xs"> {t("form.datepickerSubHeader")}</span>
        <span className="text-danger">*</span>
      </p>
      <div className="flex items-center justify-end">
        <Button className="gap-x-1 bg-transparent p-0" onPress={handleTimeAdd}>
          <IoIosAddCircle size={24} />
          {t("form.datepickerButtonText")}
        </Button>
      </div>
      {timeIntervals.map((timeInterval, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-x-2 gap-y-1 sm:flex-row">
            <div className="flex items-center">
              <label className="flex-shrink-0 text-sm">
                {t("form.datepickerStart")}
              </label>
              <DatePicker
                className="ml-2 max-w-40 rounded-lg border-2 text-center text-sm lg:max-w-60"
                selected={timeInterval.from}
                dateFormat="yyyy/MM/dd"
                minDate={timeInterval.from}
                popperPlacement="bottom"
                onFocus={(e) => e.target.blur()}
                onChange={(date) => handleTimeChange(index, "from", date)}
              />
            </div>
            <div className="flex items-center">
              <label className="flex-shrink-0 text-sm">
                {t("form.datepickerEnd")}
              </label>
              <DatePicker
                className="ml-2 max-w-40 rounded-lg border-2 text-center text-sm lg:max-w-60"
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
      <Button
        className="rounded-xl border-2 bg-sky-400 p-3 text-sm"
        type="submit"
      >
        {t("form.submitButtonText")}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("headers.header2")}
              </ModalHeader>
              <ModalBody>
                <ul className="list-disc space-y-2 text-xs">
                  {whyHelperText.map((_, index) => (
                    <li key={index}>{t(`whyHelperText.text${index + 1}`)}</li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("form.cancelButtonText")}
                </Button>
                <Button color="primary" onPress={onRead}>
                  {t("form.confirmButtonText")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};

export default CreationForm;
