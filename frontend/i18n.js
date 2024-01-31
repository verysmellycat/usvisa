import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          加拿大美签自动预约: "Automatic U.S. Visa Scheduler",
          "已更新对B1/B2, H1B, F1等各种签证类型的支持":
            "Supports Visa types including B1/B2, H1B, F1 and more",
          填写遇到问题点: "For quick tips, click",
          提交新的请求: "Create new request",
          查询请求状态: "Query request status",
          取消现有请求: "Cancel existing request",
          预约国家: "Country",
          加拿大: "Canada",
          "暂时只支持加拿大, 未来也许会拓展至其他地区":
            "Only Canada is supported for now",
          大多数用户都不用填: "Not necessary for most users",
          预约城市: "Consulate",
          至少选择一个城市: "At lease one selection is required",
          登陆密码: "Login password",
          "请输入USVISA-INFO登陆密码":
            "Login password for USVISA-INFO is required",
          "USVISA-INFO登陆密码": "USVISA-INFO login password",
          "和你自己预约一样, 系统预约也需要你USVISA-INFO的账号和密码":
            "Like making an appointment on your own, the program needs your email and password for logging into USVISA-INFO",
          请确保你填写的密码可以成功登陆预约网站:
            "Make sure the password you provide here matches the one you use to log in",
          下一步你需要用到与登陆预约网站时相同的邮箱来提交请求到系统:
            "In the final step, you'll provide the corresponding email by sending us necessary information",
          添加时间范围: "New time range",
          起始日期: "Start date",
          截止日期: "End date",
          阅读后提交新请求: "Submit Request",
          成功预约后你愿意支付多少小费以维持项目运行:
            "Gratuity to support the project",
          取消: "Cancel",
          确认: "Confirm",
          "FAQ/常见问题": "FAQ",
          '在USVISA-INFO填写信息时怎么回答 "Are you traveling from another country to apply for a U.S. visa in Canada?"':
            'How should I answer the question "Are you traveling from another country to apply for a U.S. visa in Canada?"',
          "在加拿大本国选no, 否则选yes. 在本国的情况包括当地居民、学生签工作签和PR. 不在本国指不居住在加拿大，持旅游签来加拿大的情况":
            "No if you are a local resident, student, worker, or permanent resident. Yes if you are in Canada on a visitor's Visa.",
          "如果以上问题回答Yes, 程序可以帮我自动预约美签吗?":
            "Am I eligible to use this program if I answered yes to the above question?",
          "可以, 本程序同时适用于tcn = yes 和 no 的情况":
            "Yes, the program is applicable to both yes and no scenarios.",
          "提交后我还需要做什么吗?":
            "What else do I need to do after submitting the request?",
          "提交信息如果没有错误, 很快会收到一封通知邮件, 如果写着程序已经开始刷, 表示信息正确, 你只需要等着. 如果有错误, 比方说密码错误等等, 系统不会给你发邮件, 你需要检查清楚并重新提交信息!":
            "If there are no errors in your submission, you will receive a notification email shortly. If it says that the program has started, all you need is to wait. If there is an error, such as a wrong password, etc., no email will be sent and you will need to check and resubmit!",
          "我已有的预约会被取消吗?":
            "Will my current appointment get cancelled?",
          "程序不会取消你的已有预约, 只会重新预约你期望的日期范围, 请确保你的邮箱密码没有任何其他人知道!!!":
            "No, the program will only reschedule the appointment within your desirable time range. Make sure your USVISA-INFO credentials remain secured to yourself!!!",
          "信息填错了或者想更改日期范围怎么办?":
            "What if I need to correct the information or time range?",
          "抢到位置之前, 你可以提交任意次信息进行更新, 新提交的信息会覆盖旧的":
            "Before you are rescheduled successfully, you may submit new requests with updated information, and the previous request will be overwritten.",
          使用教程: "User Tutorial",
          "填写DS-160": "DS-160",
          "用你的 USVISA-INFO 登陆邮箱发送以下内容的邮件提交":
            "Send the following email using your login email for USVISA-INFO",
          收件人: "Recipient",
          标题: "Subject",
          内容: "Body",
          已复制: "Copied to clipboard!",
        },
      },
    },
  });

export default i18n;
