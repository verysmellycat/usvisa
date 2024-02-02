import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { faqItems } from "./src/components/Faq";
import {
  whyHelperText,
  scheduleIdHelperText,
} from "./src/components/CreationForm";

const faqMapping = faqItems.reduce(
  (acc, item, index) => {
    acc[`faq${index + 1}`] = item.question;
    acc[`answer${index + 1}`] = item.answer;
    return acc;
  },
  { header: "FAQ/常见问题" }
);

const whyHelperMapping = whyHelperText.reduce((acc, item, index) => {
  acc[`text${index + 1}`] = item;
  return acc;
}, {});

const scheduleIdHelperMapping = scheduleIdHelperText.reduce(
  (acc, item, index) => {
    acc[`text${index + 1}`] = item;
    return acc;
  },
  {}
);

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
      ch: {
        translation: {
          headers: {
            header1: "加拿大美签自动预约",
            header2: "我为什么做这个系统",
            header3: "用你的 USVISA-INFO 登陆邮箱发送以下内容的邮件提交",
          },
          navbar: {
            link1: "使用教程",
            link2: "填写DS-160",
          },
          text: {
            text1: "已更新对B1/B2, H1B, F1等各种签证类型的支持",
            text2: "填写遇到问题点",
            text3: "和你自己预约一样, 系统预约也需要你USVISA-INFO的账号和密码",
            text4: "请确保你填写的密码可以成功登陆预约网站",
            text5: "下一步你需要用到与登陆预约网站时相同的邮箱来提交请求到系统",
            text6:
              "这个实验项目只为看劣币驱逐良币是否总是成立, 黄牛真的必要存在于世?",
            text7: "我自己要申请美签, 黄牛们狮子大开口, 一个人居然要 600 刀",
            text8:
              "抢加拿大美签黄牛价大概在 $150~$800 之间, 可能还有更贵更离谱的, 这个项目免费, 没有强制任何人付费",
            text9:
              "黄牛们持续威胁恐吓, 我不清楚他们具备什么能力, 究竟会不会影响到我的生命安全",
            text10:
              "我已经设定好了所有服务器自动续费, 用的是右上角账户的余额进行支付",
            text11:
              "这个系统会一直自动运行到账户余额不足以支付服务器费用, 不管我人还在不在",
            text12:
              "如果从今天 2024.01.15 开始没有任何小费支持, 我账户的钱能支持它运行到 2024.02.29",
            text13:
              "根据这几天的数据分析, 如果每个成功预约的朋友愿意给最低黄牛价三分之一的 tips, 这个项目能坚持到黄牛消失",
            text14: "希望这个项目比黄牛晚一天消失!! 我是个乐观的悲观主义者",
            text15:
              "如果账户下所有已预约了的人都想用程序抢签, 这里可以留空, 程序会自动判断出来, 非常方便",
            text16:
              "打开 usvisa-info 登陆之后点击右上角 Continue 进入下一个页面, 网址将会类似于 https://ais.usvisa-info.com/en-ca/niv/schedule/54306276/continue_actions, 中间那串数字 54306276 就是 schedule_id, 确保 url 中包含/schedule/数字",
            text17:
              "如果网址类似于 https://ais.usvisa-info.com/en-ca/niv/groups/38929138, 里面包含 /groups/, 那是错误的, 不要填!!",
            text18: "这个数字不是 IVR Account Number!!",
            text19:
              "如果多人在一个 group 里面, 记得拆分开, 一人一个 schedule_id",
            text20:
              "拆开很简单, 点 Reschedule Appointment 按钮, 勾选一个人, 确认下一步即可分开",
            text21:
              "如果需要程序抢账户下某几个人的 slot, 可以用逗号区分开, 比如 54306276,54306278,54306280",
          },
          scheduleIdHelperText: scheduleIdHelperMapping,
          whyHelperText: whyHelperMapping,
          form: {
            requestType1: "提交新的请求",
            requestType2: "查询请求状态",
            requestType3: "取消现有请求",
            fieldLabel1: "预约国家",
            fieldPlaceholder1: "加拿大",
            fieldPopover1: "暂时只支持加拿大, 未来也许会拓展至其他地区",
            fieldPlaceholder2: "大多数用户都不用填",
            fieldLabel3: "预约城市",
            fieldErrorMessage3: "至少选择一个城市",
            fieldLabel4: "USVISA-INFO登陆密码",
            fieldErrorMessage4: "请输入USVISA-INFO登陆密码",
            datepickerButtonText: "添加时间范围",
            datepickerStart: "起始日期",
            datepickerEnd: "截止日期",
            submitButtonText: "阅读后提交新请求",
            gratuityFieldLabel: "成功预约后你愿意支付多少小费以维持项目运行",
            cancelButtonText: "取消",
            confirmButtonText: "确认",
          },
          faq: faqMapping,
          submission: {
            fieldLabel1: "收件人",
            fieldLabel2: "标题",
            fieldLabel3: "内容",
            clipboardMessage: "已复制",
          },
        },
      },
      en: {
        translation: {
          headers: {
            header1: "Automatic U.S. Visa Scheduler",
            header2: "Why I Created the Program",
            header3:
              "Use the email for logging into USVISA-INFO to send the following email",
          },
          navbar: {
            link1: "User Tutorial",
            link2: "DS-160",
          },
          text: {
            text1: "Supports Visa types including B1/B2, H1B, F1 and more",
            text2: "For quick tips click",
            text3:
              "Like making an appointment on your own, the program needs your email and password for logging into USVISA-INFO",
            text4:
              "Make sure the password you provide here matches the one you use to log in",
            text5:
              "In the final step, you'll provide the corresponding email by sending us necessary information",
          },
          scheduleIdHelperText: {
            text1:
              "If everyone under the account wants to use the program to grab slot, you can leave this space blank. The program will conveniently figure it out automatically.",
            text2:
              "After logging into usvisa-info, click 'Continue' in the top right corner to enter the next page. The URL will look similar to https://ais.usvisa-info.com/en-ca/niv/schedule/54306276/continue_actions. The number in the middle, 54306276, is the schedule_id. Ensure the URL contains '/schedule/' followed by numbers.",
            text3:
              "If the URL looks like https://ais.usvisa-info.com/en-ca/niv/groups/38929138 and contains '/groups/', that's wrong. Do not fill it in!!",
            text4: "This number is not the IVR Account Number!!",
            text5:
              "If there are multiple people in one group, remember to split them up, one schedule_id per person.",
            text6:
              "It's simple to split them up. Click the 'Reschedule Appointment' button, select one person, and confirm the next step to separate them.",
            text7:
              "If you need the program to grab slot for certain individuals in an account, you can separate them with commas, like 54306276,54306278,54306280.",
          },
          whyHelperText: {
            text1:
              "This experiment is solely to see if the principle of 'bad money drives out good' always holds true. Do scalpers really need to exist in this world?",
            text2:
              "I'm applying for a U.S. visa myself, and the scalpers are asking for an outrageous amount of $600 per person.",
            text3:
              "The scalper price for U.S. visas ranges from $150 to $800, and there might be even more expensive and absurd cases. This project is free, and nobody is being forced to pay.",
            text4:
              "The scalpers continue to threaten and intimidate me. I'm not sure what capabilities they have, and whether they might pose a threat to my life.",
            text5:
              "I've already set up all servers for automatic renewal, using the balance in the tips account for payment.",
            text6:
              "This system will keep running automatically until the account balance is insufficient to cover the server costs, regardless of whether I'm still here or not.",
            text7:
              "If starting from today, January 15, 2024, there is no tip support, the money in my account can keep it running until February 29, 2024.",
            text8:
              "If each user is willing to give a tip of one-third of the lowest scalper price, which is 50 CAD, this project can last until the scalpers disappear.",
            text9:
              "I hope this project disappears a day later than the scalpers! I'm an optimistic pessimist.",
          },
          form: {
            requestType1: "Create new request",
            requestType2: "Query request status",
            requestType3: "Cancel existing request",
            fieldLabel1: "Country",
            fieldPlaceholder1: "Canada",
            fieldPopover1: "Only Canada is supported for now",
            fieldPlaceholder2: "Not necessary for most users",
            fieldLabel3: "Consulate",
            fieldErrorMessage3: "At lease one selection is required",
            fieldLabel4: "USVISA-INFO login password",
            fieldErrorMessage4: "Login password for USVISA-INFO is required",
            datepickerButtonText: "New time range",
            datepickerStart: "Start date",
            datepickerEnd: "End date",
            submitButtonText: "Submit Request",
            gratuityFieldLabel: "Gratuity to support the project",
            cancelButtonText: "Cancel",
            confirmButtonText: "Confirm",
          },
          faq: {
            header: "FAQ",
            faq1: 'How should I answer the question "Are you traveling from another country to apply for a U.S. visa in Canada?"',
            answer1:
              "No if you are a local resident, student, worker, or permanent resident. Yes if you are in Canada on a visitor's Visa.",
            faq2: "Am I eligible to use this program if I answered yes to the above question?",
            answer2:
              "Yes, the program is applicable to both yes and no scenarios.",
            faq3: "What else do I need to do after submitting the request?",
            answer3:
              "If there are no errors in your submission, you will receive a notification email shortly. If it says that the program has started, all you need is to wait. If there is an error, such as a wrong password, etc., no email will be sent and you will need to check and resubmit!",
            faq4: "Will my current appointment get cancelled?",
            answer4:
              "No, the program will only reschedule the appointment within your desirable time range. Make sure your USVISA-INFO credentials remain secured to yourself!!!",
            faq5: "What if I need to correct the information or time range?",
            answer5:
              "Before you are rescheduled successfully, you may submit new requests with updated information, and the previous request will be overwritten.",
          },
          submission: {
            fieldLabel1: "Recipient",
            fieldLabel2: "Subject",
            fieldLabel3: "Body",
            clipboardMessage: "Copied successfully!",
          },
          用户交流群: "Community",
          "如有特别/紧急需求请邮件联系support@usvisa.lol":
            "Please contact support@usvisa.lol for special/emergency request",
        },
      },
    },
  });

export default i18n;
