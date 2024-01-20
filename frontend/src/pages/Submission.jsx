import React, { useEffect, useRef } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const recipientRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  useEffect(() => {
    if (!formData) {
      navigate("/404");
    }
    console.log(formData);
  }, [formData, navigate]);

  const copyToClipboard = async (ref) => {
    if (ref.current) {
      const valueToCopy = ref.current.value;
      try {
        await navigator.clipboard.writeText(valueToCopy);
        alert("已复制");
      } catch (err) {
        console.error("复制失败", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-3 mt-3 w-full">
      <div className="flex flex-col items-center gap-y-3 w-5/6 sm:w-1/2">
        <p className="text-lg text-danger">
          用你的 USVISA-INFO 登陆邮箱发送以下内容的邮件提交
        </p>
        <Input
          isReadOnly
          ref={recipientRef}
          label="收件人"
          variant="bordered"
          defaultValue="admin@usvisa.lol"
          type="email"
          onClick={() => copyToClipboard(recipientRef)}
        ></Input>
        <Input
          isReadOnly
          ref={titleRef}
          label="标题"
          variant="bordered"
          defaultValue="打击签证黄牛 fight against visa scalpers"
          type="text"
          onClick={() => copyToClipboard(titleRef)}
        ></Input>
        <Textarea
          isReadOnly
          ref={contentRef}
          label="内容"
          variant="bordered"
          defaultValue={`https://www.usvisa.lol/
You can reschedule the U.S. visa appointment slots automatically here for free, zero fees are charged, you don't have to pay to any ticket scalpers, let them perish.
在这里可以免费刷美国签证位置, 不收取任何费用, 没必要给任何黄牛付钱, 让他们死绝.
<<<${JSON.stringify(formData)}>>>`}
          onClick={() => copyToClipboard(contentRef)}
        />
      </div>
    </div>
  );
};

export default Submission;
