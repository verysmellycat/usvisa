import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
  const items = [
    {
      question:
        '手动预约时怎么回答 "Are you traveling from another country to apply for a U.S. visa in Canada?"',
      answer:
        "在加拿大本国选no, 否则选yes. 在本国的情况包括当地居民、学生签工作签和PR. 不在本国指不居住在加拿大，持旅游签来加拿大的情况.",
    },
    {
      question: "如果以上问题回答Yes, 程序可以帮我自动预约美签吗？",
      answer: "不可以, 本程序只适用于tcn = no.",
    },
    {
      question: "提交后我还需要做什么吗？",
      answer:
        "提交信息如果没有错误, 很快会收到一封通知邮件, 如果写着程序已经开始刷, 表示信息正确, 你只需要等着. 如果有错误, 比方说密码错误等等, 系统不会给你发邮件, 你需要检查清楚并重新提交信息!",
    },
    {
      question: "我已有的预约会被取消吗？",
      answer:
        "程序不会取消你的已有预约, 只会重新预约你期望的日期范围, 请确保你的邮箱密码没有任何其他人知道!!!",
    },
    {
      question: "信息填错了或者想更改日期范围怎么办？",
      answer: "重新填写表格即可, 重复提交新的会覆盖旧的.",
    },
    {
      question: "预约成功后还可以再预约更近的日期吗？",
      answer:
        "可以, 公平起见, 成功预约之后再次提交信息, 一个星期内抢签优先级会比从未抢到位置的其他人低一点, 但也会抢.",
    },
  ];

  return (
    <div className="flex flex-col gap-y-3 w-3/4">
      <h2 className="font-semibold text-xl">FAQ/常见问题</h2>
      <Accordion className="p-0">
        {items.map((item, index) => (
          <AccordionItem
            className="text-sm"
            key={index}
            title={<span className="text-base">{item.question}</span>}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
