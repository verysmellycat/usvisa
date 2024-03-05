import { useState, useEffect } from "react";
import CreationForm from "../components/CreationForm";
import QueryForm from "../components/QueryForm";
import CancellationForm from "../components/CancellationForm";
import { IoIosInformationCircle } from "react-icons/io";
import Faq from "../components/Faq";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Tabs, Tab } from "@nextui-org/react";
import AnimateHeight from "react-animate-height";
import { Button } from "@nextui-org/react";

const Home = () => {
  const [requestType, setRequestType] = useState("create");
  const [formHeight, setFormHeight] = useState("auto");
  const [formRef, setFormRef] = useState(null);
  const { t } = useTranslation();
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    //formRef === ref.current
    if (formRef) {
      const observed = formRef;
      const resizeObserver = new ResizeObserver(() => {
        setFormHeight(observed.clientHeight);
      });
      resizeObserver.observe(observed);
      return () => resizeObserver.disconnect();
    }
  }, [formRef]);

  return (
    <div className="my-3 flex w-full flex-col items-center gap-y-3">
      <p className="text-sm">{t("donation")}</p>
      <Button
        disableAnimation
        onClick={() => setIsDisplayed(!isDisplayed)}
        className="rounded-lg border p-3"
      >
        {isDisplayed ? t("close") : t("open")}
        {t("donationButtonText")}
      </Button>
      {isDisplayed && (
        <div className="space-y-2">
          <p className="text-center text-sm">{t("donationText")}</p>
          <img src="/tipsQR.png" alt="tips image" width={250} />
        </div>
      )}
      <div className="flex w-full flex-col gap-y-3">
        <Tabs className="self-center" disableAnimation>
          <Tab key="regular" title={t("regularMode")}>
            <div className="flex flex-col gap-y-3">
              <p className="flex items-center justify-center text-sm text-danger">
                {t("text.text2")}
                <IoIosInformationCircle size={16} />
              </p>
              <p className="text-center text-sm">{t("text.text7")}</p>
              <RadioGroup defaultValue="create" onValueChange={setRequestType}>
                <Radio value="create">
                  <p className="text-sm">{t("form.requestType1")}</p>
                </Radio>
                <Radio value="query">
                  <p className="text-sm">{t("form.requestType2")}</p>
                </Radio>
                <Radio value="cancel">
                  <p className="text-sm">{t("form.requestType4")}</p>
                </Radio>
              </RadioGroup>
              <AnimateHeight
                duration={650}
                height={formHeight}
                contentClassName="auto-content"
              >
                <div ref={(node) => setFormRef(node)}>
                  {requestType === "create" ? (
                    <CreationForm />
                  ) : requestType === "query" ? (
                    <QueryForm />
                  ) : (
                    <CancellationForm />
                  )}
                </div>
              </AnimateHeight>
            </div>
          </Tab>
          <Tab key="pro" title={t("proMode")}>
            <div className="flex flex-col gap-y-3 text-center text-sm">
              <p>{t("proModeText1")}</p>
              <p>{t("proModeText2")}</p>
              <p>{t("proModeText3")}</p>
              <p>
                {t("proModeText4")}{" "}
                <span className="text-blue-600 underline underline-offset-2">
                  support@usvisa.lol
                </span>
              </p>
            </div>
          </Tab>
        </Tabs>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
