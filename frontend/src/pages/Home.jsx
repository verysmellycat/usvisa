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

const Home = () => {
  const [requestType, setRequestType] = useState("create");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-y-3 my-3 w-full">
      <span className="text-center w-5/6">
        {t("如有特别/紧急需求请邮件联系support@usvisa.lol")}
      </span>
      <span className="text-center w-5/6">{t("text.text1")} 🚀</span>
      <Payment />
      <span className="flex items-center text-sm text-danger">
        {t("text.text2")}
        <IoIosInformationCircle size={16} />
      </span>
      <div className="flex flex-col items-center gap-y-3 w-5/6 sm:w-3/5">
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
        <Faq />
      </div>
    </div>
  );
};

export default Home;
