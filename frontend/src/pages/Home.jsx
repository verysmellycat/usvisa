import React from "react";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { IoIosInformationCircle } from "react-icons/io";
import Faq from "../components/Faq";

const Home = () => {
  const [successCount, setSuccessCount] = useState(null);
  const [requestCount, setRequestCount] = useState(null);

  useEffect(() => {
    //请求数据
  }, []);
  return (
    <div className="flex flex-col items-center w-full gap-y-3 mt-3">
      <div className="flex flex-col items-center text-sm px-5 border-1 rounded-2xl bg-white">
        <span>总抢位请求:{requestCount || " _ "}</span>
        <span>已帮助{successCount || " _ "}位用户预约到美签位置🚀</span>
      </div>
      <h4 className="flex items-center text-sm text-danger">
        填写遇到问题点
        <IoIosInformationCircle size={16} />
      </h4>
      <UserForm></UserForm>
      <Faq></Faq>
    </div>
  );
};

export default Home;
