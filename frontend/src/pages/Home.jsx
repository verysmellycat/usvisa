import React from "react";
import { useState } from "react";
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
  Link,
  Image,
} from "@nextui-org/react";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [requestType, setRequestType] = useState("create");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <div className="text-center space-y-3">
        <p>{t("text.text1")} 🚀</p>
        <p>{t("text.text6")}</p>
      </div>
      <Payment />
      <div className="flex flex-col gap-y-3 w-full">
        <Tabs className="self-center">
          <Tab key="regular" title="正常模式">
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
                  <p className="text-sm">{t("form.requestType3")}</p>
                </Radio>
              </RadioGroup>
              {requestType === "create" ? (
                <CreationForm />
              ) : requestType === "query" ? (
                <QueryButton />
              ) : (
                <CancellationForm />
              )}
            </div>
          </Tab>
          <Tab key="pro" title="专业模式">
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
                    如果不是近期<strong>必须面试</strong>,
                    请使用正常模式耐心等待
                  </p>
                  <p>
                    抢位成功与否取决于领事馆放号情况, 我们不会削弱正常模式,
                    并且会不断优化系统
                  </p>
                  <p>
                    专业模式提升抢位效率数倍, 但我们的运营成本也会大幅上涨,
                    因此无法免费开放使用
                  </p>
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                <p className="text-sm">
                  如有特别/紧急需求请邮件联系
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
