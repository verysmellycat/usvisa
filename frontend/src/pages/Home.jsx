import { useState, useRef, useEffect } from "react";
import CreationForm from "../components/CreationForm";
import QueryButton from "../components/QueryButton";
import CancellationForm from "../components/CancellationForm";
import { IoIosInformationCircle } from "react-icons/io";
import Faq from "../components/Faq";
import { Radio, RadioGroup } from "@nextui-org/react";
import Payment from "../components/Payment";
import { useTranslation } from "react-i18next";
import { Tabs, Tab } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { FaRobot } from "react-icons/fa";
import AnimateHeight from "react-animate-height";

const Home = () => {
  const [requestType, setRequestType] = useState("create");
  const [formHeight, setFormHeight] = useState("auto");
  const formRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (formRef && formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, [requestType]);

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <div className="text-center space-y-3">
        <p>{t("text.text1")} 🚀</p>
        <p>{t("text.text6")}</p>
      </div>
      <Payment />
      <div className="flex flex-col gap-y-3 w-full">
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
                <Radio value="update">
                  <p className="text-sm">{t("form.requestType3")}</p>
                </Radio>
                <Radio value="cancel">
                  <p className="text-sm">{t("form.requestType4")}</p>
                </Radio>
              </RadioGroup>
              <AnimateHeight duration={500} height={formHeight}>
                <div ref={formRef}>
                  {requestType === "create" || requestType === "update" ? (
                    <CreationForm action={requestType} />
                  ) : requestType === "query" ? (
                    <QueryButton />
                  ) : (
                    <CancellationForm />
                  )}
                </div>
              </AnimateHeight>
            </div>
          </Tab>
          <Tab key="pro" title={t("proMode")}>
            <Card className="max-w-xl mx-auto">
              <CardHeader className="flex gap-3">
                <FaRobot size={40} />
                <div className="flex flex-col">
                  <p className="text-sm">Admin</p>
                  <p className="text-sm text-default-500">usvisa.lol</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="text-sm space-y-2">
                  <p>
                    {t("proModeTextSegment1")}
                    <strong>{t("proModeTextSegment2")}</strong>
                    {", "}
                    {t("proModeTextSegment3")}
                  </p>
                  <p>{t("proModeText1")}</p>
                  <p>{t("proModeText2")}</p>
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                <p className="text-sm">
                  {t("specialRequest")}{" "}
                  <span className="text-blue-600 underline underline-offset-2">
                    support@usvisa.lol
                  </span>
                </p>
              </CardFooter>
            </Card>
          </Tab>
        </Tabs>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
