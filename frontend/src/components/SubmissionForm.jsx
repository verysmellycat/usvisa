import { Input, Link, Textarea } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { abbr, countryMap } from "../config.js";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import updateEmail_1 from "/updateEmail-1.png";
import updateEmail_2 from "/updateEmail-2.png";
import { useLocation } from "react-router-dom";

export default function SubmissionForm({ formData }) {
  const recipient = `${abbr[countryMap[formData.country][0]]}.${countryMap[formData.country][1]}.${Math.floor(Math.random() * 10) + 1}@usvisa.lol`;
  const subject = "打击签证黄牛 fight against visa scalpers";
  const body = `<<<${JSON.stringify(formData)}>>>`;
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const location = useLocation();
  const variant = location.pathname.split("/")[1];

  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value);
    alert(t("submission.clipboardMessage"));
  };

  const handleClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-y-6 py-6 md:w-3/5">
      <div className="flex flex-col items-center gap-y-3">
        <p className="text-center text-xl font-semibold">
          请使用签证预约邮箱发送以下邮件 <br />
          <span className="text-base font-normal text-danger">
            {variant === "cgi" ? (
              "收不到自动回复请检查垃圾信箱或再次发送"
            ) : (
              <>
                {"收不到自动回复？检查垃圾信箱或"}
                <Link
                  onClick={onOpen}
                  showAnchorIcon
                  className="cursor-pointer"
                >
                  更换签证账户邮箱
                </Link>
              </>
            )}
          </span>
        </p>
      </div>
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
      <Button
        className="bg-foreground text-background"
        onClick={() => handleClick()}
      >
        {t("text.text19")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="max-w-[550px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>更换签证账户邮箱</ModalHeader>
              <ModalBody>
                <div className="mx-auto flex w-full flex-col gap-y-2">
                  <p className="text-base">
                    {
                      "1. 登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击右上角Actions -> Account Settings -> Update Email"
                    }
                  </p>
                  <img
                    src={updateEmail_1}
                    alt="update email"
                    className="self-center border border-foreground-400"
                  />
                  <p className="text-base">
                    {
                      "2. 输入要更换的邮箱，点击Update。新邮箱最好是gmail，防止邮件被识别为广告或垃圾邮件。"
                    }
                  </p>
                  <img
                    src={updateEmail_2}
                    alt="update email"
                    className="self-center border border-foreground-400"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="ghost"
                  className="border border-foreground"
                  disableAnimation
                  onClick={onClose}
                >
                  关闭
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
