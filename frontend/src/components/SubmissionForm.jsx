import { Input, Textarea } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { abbr, countryMap } from "../config.js";
import { Button } from "@nextui-org/react";

export default function SubmissionForm({ formData }) {
  const recipient = `${abbr[countryMap[formData.country][0]]}.${countryMap[formData.country][1]}.${Math.floor(Math.random() * 10) + 1}@usvisa.lol`;
  const subject = "打击签证黄牛 fight against visa scalpers";
  const body = `<<<${JSON.stringify(formData)}>>>`;
  const { t } = useTranslation();

  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value);
    alert(t("submission.clipboardMessage"));
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-y-6 py-6 md:w-3/5">
      <p className="text-center text-xl font-semibold">
        请使用签证预约邮箱发送以下邮件 <br />
        <span className="text-base text-danger">
          如果没有收到自动回复请检查垃圾信箱或重新发送
        </span>
      </p>
      <Input
        isReadOnly
        label={t("submission.fieldLabel1")}
        variant="bordered"
        defaultValue={recipient}
        type="email"
        onClick={() => copyToClipboard(recipient)}
      ></Input>
      <Input
        isReadOnly
        label={t("submission.fieldLabel2")}
        variant="bordered"
        defaultValue={subject}
        type="text"
        onClick={() => copyToClipboard(subject)}
      ></Input>
      <Textarea
        isReadOnly
        label={t("submission.fieldLabel3")}
        variant="bordered"
        defaultValue={body}
        onClick={() => copyToClipboard(body)}
      />
      <Button className="bg-foreground text-background">
        {t("text.text19")}
      </Button>
    </div>
  );
}
