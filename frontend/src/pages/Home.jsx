import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SubmissionForm from "../components/SubmissionForm";
import RequestForm from "../components/requestForm";
import { aisFaq, cgiFaq } from "../constants";
import { MdArrowBackIosNew } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { countryMap } from "../config";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Tutorial from "../components/Tutorial";
import { CiCircleQuestion } from "react-icons/ci";

export default function Home() {
  const [formData, setFormData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [action, setAction] = useState(null);
  const params = useParams();
  const { country } = params;
  const { t } = useTranslation();
  const location = useLocation();
  const variant = location.pathname.split("/")[1];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef(null);

  const options = [
    {
      action: "create",
      label: "创建/更新刷签请求",
    },
    {
      action: "query",
      label: "查询刷签状态",
    },
    {
      action: "cancel",
      label: "取消刷签&退款",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-y-12 py-12">
      <div className="flex flex-col justify-center gap-y-6">
        <h1 className="text-center text-5xl font-extrabold md:text-6xl">
          <span
            className={`bg-gradient-to-br ${variant === "cgi" ? "from-sky-500 to-purple-600" : "from-blue-500 via-purple-500 to-gray-400"} bg-clip-text text-transparent`}
          >
            {variant}
          </span>
          系统预约{" "}
          <span className="text-2xl underline decoration-fuchsia-700 decoration-2 underline-offset-8 md:text-3xl">
            {countryMap[country][3]}
          </span>
        </h1>
        <div className="space-y-1.5 text-center">
          <p className="text-xl font-bold">自动抓取位置</p>
          <p className="font text-lg text-foreground-500">
            {variant === "cgi"
              ? "支持Chrome，Firefox等主流浏览器"
              : "预约成功实时邮件通知"}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col gap-y-8 py-12">
        <h2 className="text-center text-3xl font-bold">开始使用</h2>
        <Button
          className="absolute right-0 bg-background"
          disableAnimation
          isIconOnly
          onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
        >
          <CiCircleQuestion size={36} className="text-red-500" />
        </Button>
        <div className="space-y-12">
          <div className="grid grid-cols-3 gap-x-3 md:gap-x-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className={`h-[30px] border-b-4 ${activeTab === index ? "border-sky-400" : "border-gray-500"}`}
                  onClick={() => setActiveTab(index)}
                  disabled={activeTab !== index}
                />
              ))}
          </div>
          <Button
            isIconOnly
            disableAnimation
            variant="light"
            className="absolute"
            isDisabled={activeTab < 1}
            onClick={() => {
              setActiveTab((prev) => {
                if (action === "query") return prev - 2;
                return prev - 1;
              });
            }}
          >
            <MdArrowBackIosNew size={20} />
          </Button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 0 && (
              <div className="flex flex-col items-center gap-y-6 py-6">
                <p className="text-xl font-semibold">请从以下选项中选择</p>
                <div
                  className={`grid grid-cols-1 gap-x-3 gap-y-3 lg:${variant === "cgi" ? "grid-cols-2" : "grid-cols-3"}`}
                >
                  {options.map((option, index) => {
                    if (variant === "cgi" && index === 1) {
                      return null;
                    }
                    if (variant === "ais" && index === 1) {
                      return (
                        <Button
                          key={option.action}
                          variant="ghost"
                          className="border border-foreground text-base"
                          disableAnimation
                          onClick={() => {
                            setAction(option.action);
                            setFormData({
                              action: option.action,
                              country: country,
                            });
                            setActiveTab((prev) => prev + 2);
                          }}
                        >
                          {option.label}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        key={option.action}
                        variant="ghost"
                        className="border border-foreground text-base"
                        disableAnimation
                        onClick={() => {
                          setAction(option.action);
                          setActiveTab((prev) => prev + 1);
                        }}
                      >
                        {option.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === 1 &&
              (action === "create" ? (
                <RequestForm
                  variant={variant}
                  setters={{ setFormData, setActiveTab }}
                />
              ) : (
                <div className="flex flex-col items-center gap-y-6 py-6">
                  <p className="text-xl font-semibold">请确认以下内容</p>
                  <p>提交后系统将会在24小时内自动完成退款</p>
                  <p>
                    退款后{variant === "cgi" ? "浏览器插件" : "刷签请求"}
                    将即刻失效，如需再次使用请重新付款
                  </p>
                  <p>建议同步修改账户密码以保证信息安全</p>

                  <Button
                    className="bg-foreground text-background"
                    onClick={() => {
                      setFormData({ action: action, country: country });
                      setActiveTab((prev) => prev + 1);
                    }}
                  >
                    下一步
                  </Button>
                </div>
              ))}
            {activeTab === 2 && <SubmissionForm formData={formData} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-y-6 lg:gap-y-12" ref={ref}>
        <h2 className="text-center text-3xl font-bold">常见问题</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
          {(variant === "cgi" ? cgiFaq : aisFaq).map((item, index) => (
            <div
              key={index}
              className="space-y-3 text-wrap p-3 hover:bg-foreground-50"
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <p className="text-foreground-500">{item.answer}</p>
            </div>
          ))}
        </div>
        <Tutorial variant={variant} />
      </div>
      <div
        className="fixed bottom-20 left-0 flex h-[200px] w-[25px] cursor-pointer items-center justify-center rounded-md bg-foreground-100 text-lg"
        onClick={onOpen}
      >
        <p className="text-lg font-semibold">
          D<br />O<br />N<br />A<br />T<br />E
        </p>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>捐赠我们</ModalHeader>
              <ModalBody className="mx-auto">
                <img src="/tipsQR.png" alt="tips" width={240} />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="ghost"
                  className="border border-foreground"
                  disableAnimation
                  onClick={onClose}
                >
                  关闭
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
