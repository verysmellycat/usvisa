import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const faqItems = [
  {
    question:
      '在 USVISA-INFO 填写信息时怎么回答 TCN 这个问题 "Are you traveling from another country to apply for a U.S. visa in Canada?"',
    answer:
      "在加拿大本国选 no, 否则选 yes. 在本国的情况包括当地居民 / 学生签 / 工作签和 PR. 不在本国指不居住在加拿大, 持旅游签来加拿大的情况.",
  },
  {
    question: "如果以上问题回答 Yes, 程序可以帮我自动预约美签吗?",
    answer: "可以, 本程序同时适用于 tcn = yes 和 no 的情况; 但是 tcn = yes 的成功率比较低, 请检查清楚.",
  },
  {
    question: "提交后我还需要做什么吗? 我还可以做什么吗?",
    answer:
      "不需要, 程序会自动抢 slot, 成功了会有邮件通知. 与此同时, 你可以做任何你想做的事, 对程序没有影响.",
  },
  {
    question: "我需要取消已有的预约才能用这个程序吗? 我已有的预约会被程序取消吗?",
    answer:
      "不需要. 程序也不会取消你的已有预约, 只会重新预约你期望的日期范围, 请确保你的密码安全.",
  },
  {
    question: "信息填错了或者想更改日期范围怎么办?",
    answer: "提交新的刷签请求, 新的请求会覆盖旧的.",
  },
  {
    question: "可以一次又一次地使用这个程序吗?",
    answer: "可以, 但每次刷签成功后再提交新的刷签请求, 需要再次支付费用.",
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
