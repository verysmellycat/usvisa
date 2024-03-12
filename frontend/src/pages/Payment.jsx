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
    <div className="flex w-full flex-col items-center gap-y-6 py-12">
      <p className="text-2xl font-bold lg:text-3xl">{t("payment.text1")}</p>
      <div className="w-5/6 lg:w-1/2">
        <div className="grid grid-cols-1 gap-y-6">
          {options.map((option, index) => (
            <Button
              key={option.type}
              isDisabled={option.url.length === 0}
              className={`flex items-center justify-between rounded-md border border-foreground bg-background py-6 hover:bg-foreground-100 ${isActive === option.type && "border-sky-400"}`}
              disableAnimation
              onClick={() => setIsActive(option.type)}
            >
              <p className="text-base">{t(`payment.option${index + 1}`)}</p>
              <img
                src={`/${option.type}.${option.type === "wechatpay" ? "svg" : "png"}`}
                alt={option.type}
                width={26}
                height={26}
              />
            </Button>
          ))}
        </div>
        <div className="bg-foreground-100 px-3 py-6">
          <p>
            点击前往支付后，你会自动跳转到AlphaPay支付界面。
            订单30分钟内有效，请及时完成支付并妥善保存订单号。
          </p>
        </div>
      </div>
      <div className="flex w-5/6 flex-col lg:w-1/2">
        <Button
          as={Link}
          disableAnimation
          href={queryParams.get(
            `${isActive === "wechatpay" ? "wechat" : isActive}_payment_url`,
          )}
          className="border border-foreground bg-foreground text-base text-background"
        >
          {t("payment.buttonText")}
        </Button>
      </div>
    </div>
  );
}
