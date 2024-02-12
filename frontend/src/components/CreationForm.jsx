import React, { useState, useCallback, useEffect } from "react";
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
  SelectSection,
  Avatar,
} from "@nextui-org/react";
import { IoIosInformationCircle, IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import DatePicker from "react-datepicker";
import { format, addMonths } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { countries, countryMap } from "../config.js";

export const whyHelperText = [
  "这个实验项目只为看劣币驱逐良币是否总是成立, 黄牛真的必要存在于世?",

  "我自己要申请美签, 黄牛们狮子大开口, 一个人居然要 600 刀",

  "抢加拿大美签黄牛价大概在 $150~$800 之间, 可能还有更贵更离谱的, 这个项目免费, 没有强制任何人付费",

  "黄牛们持续威胁恐吓, 我不清楚他们具备什么能力, 究竟会不会影响到我的生命安全",

  "我已经设定好了所有服务器自动续费, 用的是右上角账户的余额进行支付",

  "这个系统会一直自动运行到账户余额不足以支付服务器费用, 不管我人还在不在",

  "如果从今天 2024.01.15 开始没有任何小费支持, 我账户的钱能支持它运行到 2024.02.29",

  "根据这几天的数据分析, 如果每个成功预约的朋友愿意给最低黄牛价三分之一的 tips, 这个项目能坚持到黄牛消失",

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
  const [consulates, setConsulates] = useState([]);
  const [tips, setTips] = useState(0);
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
    [timeIntervals]
  );

  const handleTimeDelete = useCallback(
    debounce((index) => {
      const newIntervals = timeIntervals.filter((_, i) => i !== index);
      setTimeIntervals(newIntervals);
    }, 300),
    [timeIntervals]
  );

  const onRead = () => {
    onOpenChange(false);
    navigate("/submit", { state: { formData: { ...formData, tips } } });
  };

  const handleTimeChange = (index, type, date) => {
    const newIntervals = [...timeIntervals];
    newIntervals[index][type] = date;
    setTimeIntervals(newIntervals);
  };

  useEffect(() => {
    let [countrySelection] = selectedCountry;
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
      className="flex flex-col gap-y-3 w-full"
      noValidate
    >
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="schedule_ids"
          defaultValue=""
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
              <IoIosInformationCircle size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <ul className="text-xs max-w-64 space-y-2 list-disc">
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
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="country"
          defaultValue="Canada"
          rules={{ required: "选择要预约面试的国家" }}
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label={t("form.fieldLabel1")}
              errorMessage={errors?.country?.message}
              validationState={errors.country ? "invalid" : "valid"}
              isDisabled={false}
              isRequired
              selectedKeys={selectedCountry}
              onSelectionChange={setSelectedCountry}
              startContent={
                selectedCountry.size === 0 ? null : (
                  <Avatar
                    alt="country icon"
                    className="w-6 h-6"
                    src={`https://flagcdn.com/${
                      countryMap[Array.from(selectedCountry)[0]][1]
                    }.svg`}
                  />
                )
              }
            >
              {Object.entries(countries).map((entry) => (
                <SelectSection key={entry[0]} title={entry[0]}>
                  {Object.keys(entry[1]).map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      startContent={
                        <Avatar
                          alt="country"
                          className="w-6 h-6"
                          src={`https://flagcdn.com/${countryMap[country][1]}.svg`}
                        />
                      }
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectSection>
              ))}
            </Select>
          )}
        />
      </div>
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
      <ul className="flex flex-col text-xs text-wrap list-disc ml-3 gap-y-2">
        <li> {t("text.text3")}</li>
        <li> {t("text.text4")}</li>
        <li> {t("text.text5")}</li>
      </ul>
      <p className="text-sm text-center">
        {t("form.datepickerHeader")}
        <span className="text-xs"> {t("form.datepickerSubHeader")}</span>
        <span className="text-danger">*</span>
      </p>
      <div className="flex items-center justify-end">
        <Button className="bg-transparent p-0 gap-x-1" onPress={handleTimeAdd}>
          <IoIosAddCircle size={24} />
          {t("form.datepickerButtonText")}
        </Button>
      </div>
      {timeIntervals.map((timeInterval, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-y-1 gap-x-2">
            <div className="flex items-center">
              <label className="text-sm flex-shrink-0">
                {t("form.datepickerStart")}
              </label>
              <DatePicker
                className="border-2 rounded-lg ml-2 text-center text-sm max-w-40 lg:max-w-60"
                selected={timeInterval.from}
                dateFormat="yyyy/MM/dd"
                minDate={timeInterval.from}
                popperPlacement="bottom"
                onFocus={(e) => e.target.blur()}
                onChange={(date) => handleTimeChange(index, "from", date)}
              />
            </div>
            <div className="flex items-center">
              <label className="text-sm flex-shrink-0">
                {t("form.datepickerEnd")}
              </label>
              <DatePicker
                className="border-2 rounded-lg ml-2 text-center text-sm max-w-40 lg:max-w-60"
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
        className="border-2 bg-sky-400 rounded-xl p-3 text-sm"
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
                <ul className="text-xs space-y-2 list-disc">
                  {whyHelperText.map((_, index) => (
                    <li key={index}>{t(`whyHelperText.text${index + 1}`)}</li>
                  ))}
                  <li className="list-none">
                    <Input
                      type="number"
                      label={`${t("form.gratuityFieldLabel")}?`}
                      placeholder="0.00"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                      onValueChange={setTips}
                    ></Input>
                  </li>
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
