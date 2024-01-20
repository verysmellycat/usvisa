import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { IoIosInformationCircle } from "react-icons/io";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const CancelForm = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setFormData({
        ...data,
        action: "cancel",
      });
      navigate("/submit", { state: { formData } });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col gap-y-3"
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
              placeholder="不填即为取消账户下所有请求"
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
                  如果需要<span className="text-danger">取消</span>
                  账户下某几个人的 slot, 可以用逗号区分开, 比如
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
      <Button
        className="border-2 bg-sky-400 rounded-xl p-3 text-sm"
        type="submit"
      >
        提交取消请求
      </Button>
    </form>
  );
};

export default CancelForm;
