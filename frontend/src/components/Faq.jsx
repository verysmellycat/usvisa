import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const faqItems = [
  {
    question:
      '在USVISA-INFO填写信息时怎么回答 "Are you traveling from another country to apply for a U.S. visa in Canada?"',
    answer:
      "在加拿大本国选no, 否则选yes. 在本国的情况包括当地居民、学生签工作签和PR. 不在本国指不居住在加拿大，持旅游签来加拿大的情况",
  },
  {
    question: "如果以上问题回答Yes, 程序可以帮我自动预约美签吗?",
    answer: "可以, 本程序同时适用于tcn = yes 和 no 的情况",
  },
  {
    question: "提交后我还需要做什么吗?",
    answer:
      "提交信息如果没有错误, 很快会收到一封通知邮件, 如果写着程序已经开始刷, 表示信息正确, 你只需要等着. 如果有错误, 比方说密码错误等等, 系统不会给你发邮件, 你需要检查清楚并重新提交信息!",
  },
  {
    question: "我已有的预约会被取消吗?",
    answer:
      "程序不会取消你的已有预约, 只会重新预约你期望的日期范围, 请确保你的邮箱密码没有任何其他人知道!!!",
  },
  {
    question: "信息填错了或者想更改日期范围怎么办?",
    answer: "提交新的刷签请求, 刷到位置前新的请求会覆盖旧的",
  },
  {
    question: "已经通过程序刷到位置了还可以再刷更靠前的日期吗?",
    answer: "可以, 提交新的刷签请求, 根据系统回复操作即可",
  },
];

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-xl font-semibold">{t("faq.header")}</h2>
      <Accordion className="p-0">
        {faqItems.map((item, index) => (
          <AccordionItem
            className="text-wrap text-sm"
            key={index}
            title={
              <span className="text-wrap text-base">
                {t(`faq.faq${index + 1}`)}
              </span>
            }
          >
            {t(`faq.answer${index + 1}`)}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
