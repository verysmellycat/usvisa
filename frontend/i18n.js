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
  { header: "FAQ/常见问题" },
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
  {},
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
            header1: "美签自动预约",
            header2: "我为什么做这个系统",
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
            text6: "这是一个免费项目, 如果对你有帮助的话请考虑支持项目运营",
            text7: "如果暂时没有预约, 在向系统提交请求前不用自己预约时间",
            text8: "用你的usvisa-info登陆邮箱发送邮件",
            text9: "系统会用你提供的信息进行身份验证。",
            text10: "收到系统回邮",
            text11:
              "如果没有问题你会收到一封包括支付选项的自动回复邮件，否则请仔细对照使用教程，检查内容并重新提交。",
            text12: "确认请求",
            text13: "完成支付后，你会收到一封确认邮件，代表已经开始刷签。",
            text14: "注：以下仅为订单支付后示意图",
            text15:
              "近期通过测试发现，usvisa-info在修改账户邮箱时不会向原有邮箱发送确认邮件，而是直接修改成功。这个发现直接导致我们通过发邮件来验证用户身份的机制失效，并且解释了为什么黄牛可以用这个系统牟利，也让我们不得已做出一些改变。",
            text16:
              "自3月1日起，我们不再采用小费模式运营系统，而是会收取一定费用。这项费用只为补贴系统日常运行成本，只有这样的举措才能让更多人从中受益，希望用户理解。",
            text18: "建议直接修改密码以保护账户安全",
            text19: "前往发送邮件",
            specialRequest: "如有特别/紧急需求请邮件联系support@usvisa.lol",
          },
          scheduleIdHelperText: scheduleIdHelperMapping,
          whyHelperText: whyHelperMapping,
          confirmation: {
            text1: "已收到你的刷签请求",
            text2:
              "一封确认邮件也会发送到你的邮箱，如果没有收到请联系support@usvisa.lol人工查询。",
          },
          payment: {
            option1: "微信支付",
            option2: "支付宝",
            option3: "银联支付",
            text1: "请从以下三种支付方式中选择：",
            text2a: "点击按钮后你会跳转到相应页面完成支付，",
            text2b: "完成支付后请保存好支付订单id。",
            buttonText: "前往支付页面",
          },
          refund: {
            text1: "系统收到邮件后将会自动退款。",
            text2: "3月1日前用户退款需人工处理，请回复审核邮件发起申请。",
          },
          form: {
            requestType1: "创建/更新刷签请求",
            requestType2: "查询刷签状态",
            requestType3: "修改刷签请求",
            requestType4: "取消刷签请求",
            fieldLabel1: "预约国家",
            fieldPlaceholder1: "加拿大",
            fieldPlaceholder2: "大多数用户都不用填",
            fieldErrorMessage2a: "无效schdule id",
            fieldErrorMessage2b: "单个schedule id是8位数字",
            fieldLabel3: "预约城市",
            fieldPlaceholder3: "可多选",
            fieldErrorMessage3: "至少选择一个城市",
            fieldLabel4: "USVISA-INFO登陆密码",
            fieldErrorMessage4: "请输入USVISA-INFO登陆密码",
            datepickerHeader: "期望预约时间段",
            datepickerSubHeader: "可多选",
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
          cancellationButtonText: "提交取消请求",
          cancellationFieldPlaceholder: "不填即为取消账户下所有请求",
          queryButtonText: "提交查询请求",
          discordButtonText1: "加入Discord",
          discordButtonText2: "请求新功能/国家支持, 参与讨论或提供反馈",
          githubButtonText1: "加入Github",
          githubButtonText2: "请求新功能/国家支持, 参与讨论或提供反馈",
          regularMode: "正常模式",
          proMode: "Pro模式",
          specialRequest: "如有特别/紧急需求请邮件联系",
          proModeTextSegment1: "如果不是近期",
          proModeTextSegment2: "必须面试",
          proModeTextSegment3: "请使用正常模式耐心等待",
          proModeText1:
            "抢位成功与否取决于领事馆放号情况, 我们不会削弱正常模式, 并且会不断优化系统",
          proModeText2:
            "Pro模式提升抢位效率数倍, 但我们的运营成本也会大幅上涨, 因此无法免费开放使用",
          communityButtonText: "用户交流",
        },
      },
      en: {
        translation: {
          headers: {
            header1: "Automatic U.S. Visa Rescheduling",
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
            text6:
              "This is a free program. We greatly appreciate any donations to help cover our operating costs!",
            text7:
              "It is advisable that no prior appointment is necessary if you don't already have one",
            text8:
              "Send the email of the following content using your usvisa-info login email",
            text9:
              "The system will use the information you sent to verify your identity.",
            text10: "Receive system reply",
            text11:
              "If there are no issues, you will receive an automatic reply email including payment options; otherwise, please carefully refer to the tutorial, check the content, and resubmit.",
            text12: "Request confirmed",
            text13:
              "After completing the payment, you will receive a confirmation email, indicating that the slot grabbing has started.",
            text14: "Note: what shown below is a demonstration only",
            text15:
              "It has been found that when modifying an account's email on usvisa-info, the system does not send a confirmation email to the original email address but directly completes the modification. This discovery has rendered our mechanism of verifying user identity through email ineffective, and it also explains why scalpers can profit from this system, forcing us to make some changes.",
            text16:
              "Starting from March 1st, we will no longer operate the system on a tipping model but will charge a certain fee. This fee is solely to cover the daily operational costs of the system, and only such measures will allow more people to benefit from it. We hope our users understand.",
            text18: "Please also change your password for account security",
            text19: "Send Email",
            specialRequest:
              "Please contact support@usvisa.lol for special/emergency request",
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
              "The program was free to use for anyone originally, with the hope that if everyone would tip a small portion of what scalpers asked for, the project would continue until the scalpers disapper.",
            text5:
              "However, after two months of operation, even though it has successfully helped hundreds of people, very few actually give tips. Moreover, scalpers have exploited system vulnerabilities for their own profit.",
            text6:
              "In order for more people to benefit, the system will no longer operate on a tip basis and will need to charge a certain fee.",
            text7:
              "This fee is only to subsidize the normal operating costs of the project, and I believe it is very reasonable compared to the scalper's price.",
            text8:
              "I hope this project disappears a day later than the scalpers! I'm an optimistic pessimist.",
          },
          confirmation: {
            text1: "Your request is confirmed!",
            text2:
              "A confirmation email will also be sent to your mailbox. If you do not receive the confirmation email, please contact support@usvisa.lol for manual inquiry.",
          },
          payment: {
            option1: "WechatPay",
            option2: "AliPay",
            option3: "UnionPay",
            text1: "Please select from the following options for payment: ",
            text2a:
              "You will be redirected to the corresponding page to complete the payment.",
            text2b: "Please save your payment order ID.",
            buttonText: "Go to payment page",
          },
          refund: {
            text1:
              "Refund will be automatically issued after receving the email. ",
            text2:
              "If you submitted the request before 3/1, please reply to the approval email for manual processing.",
          },
          form: {
            requestType1: "Create/Update request",
            requestType2: "Query request status",
            requestType3: "Modify existing request",
            requestType4: "Cancel existing request",
            fieldLabel1: "Country",
            fieldPlaceholder1: "Canada",
            fieldPlaceholder2: "Not necessary for most users",
            fieldErrorMessage2a: "Invalid schedule id",
            fieldErrorMessage2b: "A single schedule id should be 8 digits",
            fieldLabel3: "Consulate",
            fieldPlaceholder3: "Multiple selection",
            fieldErrorMessage3: "At lease one selection is required",
            fieldLabel4: "USVISA-INFO login password",
            fieldErrorMessage4: "Login password for USVISA-INFO is required",
            datepickerHeader: "Desirable Time Range",
            datepickerSubHeader: "multiple",
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
            faq6: "Can I use the program again to schedule for an earlier date, if I had already secured a spot using it?",
            answer6:
              "Yes, feel free to submit a new request and follow the instructions from the email reply.",
            faq7: "What if I need to correct the information or time range?",
            answer7:
              "Before you are rescheduled successfully, you may submit new requests with updated information, and the previous request will be overwritten.",
          },
          submission: {
            fieldLabel1: "Recipient",
            fieldLabel2: "Subject",
            fieldLabel3: "Body",
            clipboardMessage: "Copied successfully!",
          },
          cancellationButtonText: "Submit Cancellation Request",
          cancellationFieldPlaceholder: "Leave it blank to cancel all requests",
          queryButtonText: "Submit Query Request",
          githubButtonText1: "Join Github",
          githubButtonText2:
            "Request new feature / country support, ask questions or provide feedback",
          discordButtonText1: "Join Discord",
          discordButtonText2:
            "Ask questions, share feedback, get updates, learn about upcoming features and more",
          regularMode: "Regular Mode",
          proMode: "Pro Mode",
          specialRequest: "For special/emergency request please contact",
          proModeTextSegment1: "If a recent interview ",
          proModeTextSegment2: "is not mandatory",
          proModeTextSegment3:
            "please use the regular mode and patiently wait.",
          proModeText1:
            "Slot grabbing is dependent on the consulate's availability. We will not weaken the regular mode, and we will continuously optimize the system.",
          proModeText2:
            "The pro mode significantly increases the slot grabbing efficiency, but it also substantially raises our operational costs. Sadly, it cannot be offered free of cost at the moment.",
          communityButtonText: "Community",
          notification:
            "The program will be closed temporarily starting from Feb. 22. Thanks for the support!",
        },
      },
    },
  });

export default i18n;
