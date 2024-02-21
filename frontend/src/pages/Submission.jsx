import { useEffect, useRef } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { abbr, countryMap } from "../config.js";
import { Button } from "@nextui-org/react";

const Submission = () => {
  const recipientRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const { t } = useTranslation();

  const to = !formData.countryFull
    ? "admin"
    : abbr[countryMap[formData.countryFull][0]];
  const recipient = `${to}@usvisa.lol`;
  const title = "打击签证黄牛 fight against visa scalpers";
  const content =
    "https://www.usvisa.lol/\nYou can reschedule the U.S. visa appointment slots automatically here for free, zero fees are charged, you don't have to pay to any ticket scalpers, let them perish.\n在这里可以免费刷美国签证位置, 不收取任何费用, 没必要给任何黄牛付钱, 让他们死绝.";
  const { countryFull, ...finalData } = formData;

  useEffect(() => {
    if (!formData) {
      navigate("/404");
    }
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

  const handleClick = () =>{
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(
      `${content}\n<<<${JSON.stringify(finalData)}>>>`
    );
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <div className="grid grid-cols-10 gap-x-3 w-full">
        <div className="justify-self-center flex flex-col items-center w-fit">
          <span className="border px-3 py-1 rounded-lg">1</span>
          <div className="grow border-l"></div>
        </div>
        <div className="col-span-9 flex flex-col gap-y-3">
          <h2 className="font-bold">{t("text.text8")}</h2>
          <p className="text-sm">{t("text.text9")}</p>
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
            defaultValue={`${content}\n<<<${JSON.stringify(finalData)}>>>`}
            onClick={() => copyToClipboard(contentRef)}
          />
          <Button onClick={handleClick} className="border-2 bg-sky-400 rounded-xl p-3 text-sm">{t("text.text19")}</Button>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-3 w-full min-h-[100px]">
        <div className="justify-self-center flex flex-col items-center w-fit">
          <span className="border px-3 py-1 rounded-lg">2</span>
          <div className="grow border-l"></div>
        </div>
        <div className="col-span-9 flex flex-col gap-y-3">
          <h2 className="font-bold">{t("text.text10")}</h2>
          <p className="text-sm">
            {t("text.text11")}
            <br />
            {t("text.text12")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-3 w-full min-h-[100px]">
        <div className="justify-self-center flex flex-col items-center w-fit">
          <span className="border px-3 py-1 rounded-lg">3</span>
          <div className="grow border-l"></div>
        </div>
        <div className="col-span-9 flex flex-col gap-y-3">
          <h2 className="font-bold">{t("text.text13")}</h2>
          <p className="text-sm">{t("text.text14")}</p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-3 w-full min-h-[100px]">
        <div className="justify-self-center flex flex-col items-center w-fit">
          <span className="border px-3 py-1 rounded-lg">4</span>
        </div>
        <div className="col-span-9 flex flex-col gap-y-3 md:max-w-xl">
          <h2 className="font-bold">{t("text.text15")}</h2>
          <p className="text-sm">
            {t("text.text16")}
            <br />
            {t("text.text17")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submission;
