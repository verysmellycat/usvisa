import React from "react";
import { useEffect, useState } from "react";
import CreateForm from "../components/CreateForm";
import CancelForm from "../components/CancelForm";
import { IoIosInformationCircle } from "react-icons/io";
import Faq from "../components/Faq";
import { Radio, RadioGroup } from "@nextui-org/react";

const Home = () => {
  const [successCount, setSuccessCount] = useState(null);
  const [requestCount, setRequestCount] = useState(null);
  const [requestType, setRequestType] = useState("create");

  useEffect(() => {
    //请求数据
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-y-3 mt-3">
      <div className="flex flex-col items-center text-sm px-5 border-1 rounded-2xl bg-white">
        <span>总抢位请求:{requestCount || " _ "}</span>
        <span>已帮助{successCount || " _ "}位用户预约到美签位置🚀</span>
      </div>
      <h4 className="flex items-center text-sm">
        暂时只支持 B1&2, 有支持 H1B 的打算, 但是项目目前入不敷出
        <br />
        若有人捐款达到总共 $5000, 我一周内应该可以实现对 H1B 的支持
      </h4>
      <h4 className="flex items-center text-sm text-danger">
        填写遇到问题点
        <IoIosInformationCircle size={16} />
      </h4>
      <div className="w-1/2">
        <RadioGroup defaultValue="create" onValueChange={setRequestType}>
          <Radio value="create">
            <p className="text-sm">提交新的请求</p>
          </Radio>
          <Radio value="cancel">
            <p className="text-sm">取消现有请求</p>
          </Radio>
        </RadioGroup>
      </div>
      {requestType === "create" ? <CreateForm /> : <CancelForm />}
      <Faq></Faq>
    </div>
  );
};

export default Home;
