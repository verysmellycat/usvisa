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

  const to = abbr[countryMap[formData.countryFull][0]];
  const recipient = `${to}@usvisa.lol`;
  const title = "打击签证黄牛 fight against visa scalpers";
  const { countryFull, ...finalData } = formData;

  useEffect(() => {
    if (!formData) {
      navigate("/404");
    }
  }, [formData, navigate]);

  const copyToClipboard = async (ref) => {
    if (ref.current) {
      const valueToCopy = ref.current.value;
      await navigator.clipboard.writeText(valueToCopy);
      alert(t("submission.clipboardMessage"));
    }
  };

  const handleClick = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`<<<${JSON.stringify(finalData)}>>>`);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="my-3 flex w-full flex-col items-center gap-y-3">
      <div className="grid w-full grid-cols-10 gap-x-3">
        <div className="flex w-fit flex-col items-center justify-self-center">
          <span className="rounded-lg border px-3 py-1">1</span>
          <div
            className={`grow ${formData.action === "create" && "border-l"}`}
          ></div>
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
            defaultValue={`<<<${JSON.stringify(finalData)}>>>`}
            onClick={() => copyToClipboard(contentRef)}
          />
          {formData.action === "cancel" && (
            <>
              <p className="text-sm">
                {t("refund.text1")} <br />
                {t("refund.text2")}
              </p>
            </>
          )}
          <Button
            onClick={handleClick}
            className="rounded-xl border-2 bg-sky-400 p-3 text-sm"
          >
            {t("text.text19")}
          </Button>
        </div>
      </div>
      {formData.action === "create" && (
        <>
          <div className="grid min-h-[100px] w-full grid-cols-10 gap-x-3">
            <div className="flex w-fit flex-col items-center justify-self-center">
              <span className="rounded-lg border px-3 py-1">2</span>
              <div className="grow border-l"></div>
            </div>
            <div className="col-span-9 flex flex-col gap-y-3">
              <h2 className="font-bold">{t("text.text10")}</h2>
              <p className="text-sm">{t("text.text11")}</p>
            </div>
          </div>
          <div className="grid min-h-[100px] w-full grid-cols-10 gap-x-3">
            <div className="flex w-fit flex-col items-center justify-self-center">
              <span className="rounded-lg border px-3 py-1">3</span>
              <div className="grow"></div>
            </div>
            <div className="col-span-9 flex flex-col gap-y-3">
              <h2 className="font-bold">{t("text.text12")}</h2>
              <p className="text-sm">{t("text.text13")}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Submission;
