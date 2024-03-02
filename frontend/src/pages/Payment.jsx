import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export default function Payment() {
  const queryParams = new URLSearchParams(useLocation().search);
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState("wechat_payment_url");

  return (
    <div className="my-3 flex w-full flex-col items-center gap-y-3">
      <div className="flex w-5/6 flex-col items-center gap-y-3 p-3">
        <p className="text-lg font-bold">{t("payment.text1")}</p>
        <div className="grid h-[60px] w-2/3 grid-cols-2 gap-x-4">
          <Button
            className={`flex h-full flex-col items-center justify-between gap-y-1 rounded-lg border bg-white px-6 py-2 ${isActive !== "wechat_payment_url" && "hover:border-sky-400"} ${isActive === "wechat_payment_url" && " underline decoration-sky-400 decoration-2 underline-offset-8"}`}
            disableAnimation
            onClick={() => setIsActive("wechat_payment_url")}
          >
            <img src="/wechatPay.svg" alt="wechatPay" width={20} height={20} />
            <p className="">{t("payment.option1")}</p>
          </Button>
          <Button
            className={`flex h-full flex-col items-center justify-between gap-y-1 rounded-lg border bg-white px-6 py-2 ${isActive !== "alipay_payment_url" && "hover:border-sky-400"} ${isActive === "alipay_payment_url" && " underline decoration-sky-400 decoration-2 underline-offset-8"}`}
            disableAnimation
            onClick={() => setIsActive("alipay_payment_url")}
          >
            <img src="/aliPay.png" alt="aliPay" width={20} height={20} />
            <p className="">{t("payment.option2")}</p>
          </Button>
          {/**           <Button
            className={`flex h-full flex-col items-center justify-between gap-y-1 rounded-lg border bg-white px-6 py-2 ${isActive !== "unionpay_payment_url" && "hover:border-sky-400"} ${isActive === "unionpay_payment_url" && " underline decoration-sky-400 decoration-2 underline-offset-8"}`}
            disableAnimation
            onClick={() => setIsActive("unionpay_payment_url")}
          >
            <img src="/unionPay.png" alt="wechatPay" width={30} height={30} />
            <p className="">{t("payment.option3")}</p>
          </Button>*/}
        </div>
        <div className="flex w-full flex-col gap-y-3">
          <p className="text-center text-sm">{t("text.text14")}</p>
          <img
            src="/orderId.jpg"
            alt="order id"
            className="mx-auto max-w-[250px] object-contain"
          />
          <p className="text-center text-sm">
            {t("payment.text2a")}
            <span className="font-medium text-danger">
              {t("payment.text2b")}
            </span>
          </p>
          <Button
            as={Link}
            href={`${queryParams.get(isActive)}`}
            className="rounded-xl border-2 bg-sky-400 p-3 text-sm"
          >
            {t("payment.buttonText")}
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
