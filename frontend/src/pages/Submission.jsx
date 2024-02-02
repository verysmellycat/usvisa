import React, { useEffect, useRef } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Submission = () => {
  const recipientRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const { t } = useTranslation();

  const recipient = "admin@usvisa.lol";
  const title = "打击签证黄牛 fight against visa scalpers";
  const content =
    "https://www.usvisa.lol/\nYou can reschedule the U.S. visa appointment slots automatically here for free, zero fees are charged, you don't have to pay to any ticket scalpers, let them perish.\n在这里可以免费刷美国签证位置, 不收取任何费用, 没必要给任何黄牛付钱, 让他们死绝.";

  useEffect(() => {
    if (!formData) {
      navigate("/404");
    }
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(
      `${content}\n<<<${JSON.stringify(formData)}>>>`
    );
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    console.log(formData);
  }, [formData, navigate]);

  const copyToClipboard = async (ref) => {
    if (ref.current) {
      const valueToCopy = ref.current.value;
      try {
        await navigator.clipboard.writeText(valueToCopy);
        alert(t("submission.clipboardMessage"));
      } catch (err) {
        console.error("复制失败", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-3 mt-3 mb-3 w-full">
      <div className="flex flex-col items-center gap-y-3 w-5/6 sm:w-1/2">
        <p className="text-lg text-danger">{t("headers.header3")}</p>
        <Input
          isReadOnly
          ref={recipientRef}
          label={t("submission.fieldLabel1")}
          variant="bordered"
          defaultValue={recipient}
          type="email"
          onClick={() => copyToClipboard(recipientRef)}
        ></Input>
        <Input
          isReadOnly
          ref={titleRef}
          label={t("submission.fieldLabel2")}
          variant="bordered"
          defaultValue={title}
          type="text"
          onClick={() => copyToClipboard(titleRef)}
        ></Input>
        <Textarea
          isReadOnly
          ref={contentRef}
          label={t("submission.fieldLabel3")}
          variant="bordered"
          defaultValue={`${content}\n<<<${JSON.stringify(formData)}>>>`}
          onClick={() => copyToClipboard(contentRef)}
        />
      </div>
    </div>
  );
};

export default Submission;
