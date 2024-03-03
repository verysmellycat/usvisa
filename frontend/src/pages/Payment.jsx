import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export default function Payment() {
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location],
  );
  const navigate = useNavigate();
  const { t } = useTranslation();
  const options = useMemo(
    () => [
      { type: "wechatpay", url: queryParams.get("wechat_payment_url") },
      { type: "alipay", url: queryParams.get("alipay_payment_url") },
      { type: "unionpay", url: queryParams.get("unionpay_payment_url") },
    ],
    [queryParams],
  );

  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const availableOptions = options.filter((option) => option.url.length > 0);
    if (availableOptions.length === 0) {
      navigate("/");
    }
    setIsActive(availableOptions[0].type);
  }, [navigate, options]);

  return (
    <div className="my-3 flex w-full flex-col items-center gap-y-3">
      <div className="flex w-5/6 flex-col items-center gap-y-3 p-3">
        <p className="text-lg font-bold">{t("payment.text1")}</p>
        <div className="grid h-[62px] w-full grid-cols-3 gap-x-4">
          {options.map((option, index) => (
            <Button
              key={option.type}
              isDisabled={option.url.length === 0}
              className={`flex h-full flex-col items-center justify-between gap-y-1 rounded-lg border bg-white px-6 py-2 ${isActive !== option.type && "hover:border-sky-400"} ${isActive === option.type && " underline decoration-sky-400 decoration-2 underline-offset-8"}`}
              disableAnimation
              onClick={() => setIsActive(option.type)}
            >
              <img
                src={`/${option.type}.${option.type === "wechatpay" ? "svg" : "png"}`}
                alt={option.type}
                width={20}
                height={20}
              />
              <p className="">{t(`payment.option${index + 1}`)}</p>
            </Button>
          ))}
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
            href={queryParams.get(
              `${isActive === "wechatpay" ? "wechat" : isActive}_payment_url`,
            )}
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
