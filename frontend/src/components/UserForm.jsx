import React, { useState } from "react";
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
  Checkbox,
} from "@nextui-org/react";
import { IoIosInformationCircle } from "react-icons/io";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formData, setFormData] = useState(null);
  const [isAppointed, setIsAppointed] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onsubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setFormData({
        ...data,
        from: format(startDate, "yyyyMMdd"),
        to: format(endDate, "yyyyMMdd"),
      });
      onOpen();
    }
  };

  const onRead = () => {
    onOpenChange(false);
    navigate("/submit", { state: { formData } });
  };

  const visaTypes = [{ value: "b1/b2", label: "B1/B2" }];
  const cities = [
    { value: "Vancouver", label: "Vancouver" },
    { value: "Toronto", label: "Toronto" },
    { value: "Calgary", label: "Calgary" },
    { value: "Halifax", label: "Halifax" },
    { value: "Ottawa", label: "Ottawa" },
    { value: "Montreal", label: "Montreal" },
    { value: "Quebec", label: "Quebec City" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col gap-y-3 w-1/2"
      noValidate
    >
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="country"
          //rules={{ required: "请选择预约面试的国家" }}
          defaultValue="Canada"
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label="预约国家"
              placeholder="加拿大"
              errorMessage={errors?.country?.message}
              validationState={errors.country ? "invalid" : "valid"}
              isDisabled
            ></Select>
          )}
        />
        <Popover placement="right">
          <PopoverTrigger>
            <Button size={"sm"} className="bg-transparent">
              <IoIosInformationCircle size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-tiny">
                暂时只支持加拿大, 未来也许会拓展至其他地区
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="type"
          //rules={{ required: "请选择签证类型" }}
          defaultValue="b1/b2"
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label="签证类型"
              placeholder="B1/B2"
              errorMessage={errors?.type?.message}
              validationState={errors.type ? "invalid" : "valid"}
              isDisabled
            >
              {visaTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Popover placement="right">
          <PopoverTrigger>
            <Button size={"sm"} className="bg-transparent">
              <IoIosInformationCircle size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-tiny">暂时只支持B1&2, 其它的陆续会上线</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Controller
        control={control}
        name="appointed"
        rules={{ required: "如果没有预约请先手动预约" }}
        render={({ field }) => (
          <Checkbox
            {...field}
            isSelected={isAppointed}
            onValueChange={setIsAppointed}
            required
          >
            <p className="text-sm">
              请确保你已经为需要抢签的每个人都随便预约了一个appointment
            </p>
          </Checkbox>
        )}
      />
      {errors.appointed && (
        <p className="text-xs text-danger">{errors.appointed.message}</p>
      )}
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="schedule_ids"
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label="Schedule ID"
              selectionMode="multiple"
              placeholder="大多数用户都不用填"
              errorMessage={errors?.schedule_ids?.message}
              validationState={errors.schedule_ids ? "invalid" : "valid"}
              closeMenuOnSelect={false}
              isDisabled={!isAppointed}
            >
              {<SelectItem value={""}>{"NONE"}</SelectItem>}
            </Select>
          )}
        />
        <Popover placement="right">
          <PopoverTrigger>
            <Button size={"sm"} className="bg-transparent">
              <IoIosInformationCircle size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <ul className="text-xs max-w-64 space-y-2 list-disc">
                <li>
                  如果账户下所有已预约了的人都想用程序抢签, 这里可以留空,
                  程序会自动判断出来, 非常方便
                </li>
                <li>
                  打开 usvisa-info 登陆之后点击右上角 Continue 进入下一个页面,
                  网址将会类似于
                  https://ais.usvisa-info.com/en-ca/niv/schedule/54306276/continue_actions,
                  中间那串数字 54306276 就是 schedule_id, 确保 url 中包含
                  /schedule/数字
                </li>
                <li>
                  如果网址类似于
                  https://ais.usvisa-info.com/en-ca/niv/groups/38929138,
                  里面包含 /groups/, 那是错误的, 不要填!!
                </li>
                <li> 这个数字不是 IVR Account Number!!</li>
                <li>
                  如果多人在一个 group 里面, 记得拆分开, 一人一个 schedule_id
                </li>
                <li>
                  拆开很简单, 点 Reschedule Appointment 按钮, 勾选一个人,
                  确认下一步即可分开
                </li>
                <li>
                  如果需要程序抢账户下某几个人的 slot, 可以用逗号区分开, 比如
                  54306276,54306278,54306280
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="cities"
          rules={{ required: "至少选择一个城市" }}
          render={({ field }) => (
            <Select
              {...field}
              className="w-full"
              label="预约城市"
              selectionMode="multiple"
              errorMessage={errors?.cities?.message}
              validationState={errors.cities ? "invalid" : "valid"}
              closeMenuOnSelect={false}
              isRequired
            >
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <Controller
          control={control}
          name="password"
          rules={{ required: "请输入USVISA-INFO登陆邮箱密码" }}
          render={({ field }) => (
            <Input
              {...field}
              className="w-full"
              label="USVISA-INFO登陆邮箱密码"
              type="password"
              errorMessage={errors?.password?.message}
              isRequired
            ></Input>
          )}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="items-center">
          <label className="text-sm">起始日期</label>
          <DatePicker
            className="border-2 rounded-lg ml-2 text-center"
            selected={startDate}
            minDate={new Date()}
            popperPlacement="bottom"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="items-center">
          <label className="text-sm">截止日期</label>
          <DatePicker
            className="border-2 rounded-lg ml-2 text-center"
            selected={endDate}
            minDate={new Date()}
            popperPlacement="bottom"
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <Button
        className="border-2 bg-sky-400 rounded-xl p-3 text-sm"
        type="submit"
      >
        阅读后提交
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                我为什么做这个系统？
              </ModalHeader>
              <ModalBody>
                <ul className="text-xs space-y-2 list-disc">
                  <li>
                    这个实验项目只为看劣币驱逐良币是否总是成立,
                    黄牛真的必要存在于世?
                  </li>
                  <li>
                    我自己要申请美签, 黄牛们狮子大开口, 一个人居然要 600 刀
                  </li>
                  <li>
                    抢加拿大美签黄牛价大概在 $150~$800 之间,
                    可能还有更贵更离谱的, 这个项目免费, 没有强制任何人付费
                  </li>
                  <li>
                    黄牛们持续威胁恐吓, 我不清楚他们具备什么能力,
                    究竟会不会影响到我的生命安全
                  </li>
                  <li>
                    我已经设定好了所有服务器自动续费,
                    用的是右上角账户的余额进行支付
                  </li>
                  <li>
                    这个系统会一直自动运行到账户余额不足以支付服务器费用,
                    不管我人还在不在
                  </li>
                  <li>
                    如果从今天 2024.01.15 开始没有任何小费支持,
                    我账户的钱能支持它运行到 2024.02.29
                  </li>
                  <li>
                    <strong>
                      根据这几天的数据分析,
                      如果每个成功预约的朋友愿意给最低黄牛价三分之一的 tips,
                      这个项目能坚持到黄牛消失
                    </strong>
                  </li>
                  <li>希望这个项目比黄牛晚一天消失!! 我是个乐观的悲观主义者</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  取消
                </Button>
                <Button color="primary" onPress={onRead}>
                  确认
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};

export default UserForm;
