import React from "react";
import { useEffect, useState } from "react";
import CreateForm from "../components/CreationForm";
import QueryButton from "../components/QueryButton";
import CancelForm from "../components/CancellationForm";
import { IoIosInformationCircle } from "react-icons/io";
import Faq from "../components/Faq";
import { Radio, RadioGroup } from "@nextui-org/react";
import Payment from "../components/Payment";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [requestType, setRequestType] = useState("create");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-y-3 mt-3 mb-3 w-full">
      <span className="text-center w-5/6 sm:w-3/5">{t("text.text1")} 🚀</span>
      <div className="w-1/3">
        <Payment />
      </div>
      <h4 className="flex items-center text-sm text-danger">
        {t("text.text2")}
        <IoIosInformationCircle size={16} />
      </h4>
      <div className="flex flex-col gap-y-3 w-5/6 sm:w-3/5">
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
          <CreateForm />
        ) : requestType === "query" ? (
          <QueryButton />
        ) : (
          <CancelForm />
        )}
      </div>
      <div className="w-5/6 sm:w-3/5">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
