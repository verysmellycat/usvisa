import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "cn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    cn: {
      translation: {
        ais:{
          title:"常见问题",
          faq1:"在 USVISA-INFO 填写信息时怎么回答 TCN 这个问题：“Are you traveling from another country to apply for a U.S. visa in Canada？”",
          faqAnswer1:"在加拿大本国选 no，否则选 yes。在本国的情况包括当地居民／学生签／工作签和 PR。不在本国指不居住在加拿大，持旅游签来加拿大的情况。",
          faq2: "如果 TCN 回答 Yes，程序可以帮我自动预约美签吗？",
          faqAnswer2: "可以，本程序同时适用于 tcn = yes 和 no 的情况；但是 tcn = yes 的成功率比较低，请检查清楚。",
          faq3: "提交后我还需要做什么吗？我还可以做什么吗？",
          faqAnswer3: "不需要，程序会自动抢 slot，成功了会有邮件通知。与此同时，你可以做任何你想做的事，对程序没有影响。",
          faq4: "我需要取消已有的预约才能使用程序吗？我已有的预约会被程序取消吗？",
          faqAnswer4: "不需要。程序也不会取消你的已有预约，只会重新预约你期望日期范围内的面试时间，请确保你的密码安全。",
          faq5: "信息填错了或者想更改日期范围怎么办？",
          faqAnswer5: "提交新的刷签请求，新的请求会覆盖旧的。",
          faq6: "可以一次又一次地使用这个程序吗？",
          faqAnswer6: "可以，但每次刷签成功后再提交新的刷签请求，需要再次支付费用。"

        },
        tutorial:{
          title:"使用教程",
          title1: "填写个人信息",
          body1: "选择你想预约面试的城市，并且提供签证预约网站的登陆密码。如果账户中所有人都需要刷签，不需要填写schedule ID，系统会自动判断。",
          title2: "为某位申请人刷签（可选）",
          body2: "如果不是账户中所有人都需要刷签，你可以通过填写schedule ID指定为账户中哪位申请人刷签。登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击continue，网址中显示的数字即为schedule ID。多位申请人请以54306276,54306278的格式填写。",
          title3: "多人拆组刷签（可选）",
          body3: "如果账户中有多人同组，系统默认为多人一起刷签，但是成功率比较低。如果可以接受在不同时间面试，请把同组的人拆分。登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击continue，在如图所示界面中点击Reschedule Appointment后勾选一位申请人，点击下一步，即可把申请人拆分出来形成一个新的schedule ID。",
          title4: "发送邮件提交",
          body4: "请仔细检查你填写的信息，尤其确保提供的密码可以成功登陆签证预约网站。确认无误后，请使用与签证预约网站账户相同的邮箱发送界面中显示内容的邮件。如果没有收到自动回邮，证明发送内容有误，或系统遇到了网络错误，请检查发送的内容，多尝试几次。",
          title5: "完成订单支付",
          body5: "请从上一步的自动回邮中点击支付链接，用任意方式完成支付后你会再次收到一封自动回邮，表明刷签已经开始。"
        
        },
        home: {
          heading: "系统预约",
          heading2: "自动抓取位置",
          heading3: "预约成功实时邮件通知",
          cta: "开始使用",
          optionsTitle: "请从以下选项中选择",
          option1: "创建/更新刷签请求",
          option2: "查询刷签状态",
          option3: "取消刷签&退款",
          refundOptionTitle: "请确认以下内容",
          refundP1: "提交后系统将会在24小时内自动完成退款",
          refundP2: "退款后刷签请求将即刻失效，如需再次使用请重新付款",
          refundP3: "建议同步修改账户密码以保证信息安全",
          refundInput1: "不填默认为账户中全部申请人退款",
        },
        buttons: {
          next: "下一步",
          back: "上一步",
          close: "关闭",
          submit:"提交"
        },
        submissionForm: {
          heading1: "请使用签证预约邮箱发送以下邮件",
          heading2: "收不到自动回复？检查垃圾信箱或",
          link1: "更换签证账户邮箱",
        },
        creationForm:{
          title:"请提供以下必要信息",
          idealDate:"期望预约时间范围",
          noTimeAdded:"尚未添加任何时间！",
          skipTmr:"我没法及时赶到第二天的面试，勾选跳过这些slot",
          passwordLabel:"预约网站登陆密码"
        },
        errors:{
          minChar:"密码至少需要8个字符",
          requiredPassword:"请输入预约网站登陆密码",
          timeRange:"请至少提交一个期望时间范围并再三确认这是你想要的时间！"
        },
        emailChangeModal: {
          title: "更换签证账户邮箱",
          text1:
            "1. 登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击右上角Actions -> Account Settings -> Update Email。",
          text2:
            "2. 输入要更换的邮箱，点击Update。新邮箱最好是gmail，防止邮件被识别为广告或垃圾邮件。",
        },
        navbar: {
          link1: "使用教程",
          link2: "填写DS-160",
        },
        payment: {
          option1: "微信支付",
          option2: "支付宝",
          option3: "银联支付",
          text1: "请从以下支付方式中选择：",
          text2a: "点击按钮后你会跳转到相应页面完成支付，",
          text2b: "完成支付后请保存好支付订单id。",
          buttonText: "前往支付页面",
        },
        form: {
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
          cancelButtonText: "取消",
          confirmButtonText: "确认",
        },
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
        communityButtonText: "用户交流",
        toggleLanguage: "EN",
        open: "显示",
        close: "关闭",
        donation: "如果你愿意支持这个项目可以用以下方式捐赠",
        donationText: "仅限捐赠使用",
      },
    },
    en: {
      translation: {
        buttons: {
          next: "Next",
          back: "Back",
          close: "Close",
          submit:"Submit"
        },
        ais:{
          title:"FAQ",
          faq1:"How to answer 'Are you traveling from another country to apply for a U.S. visa in Canada?' on usvisa-info?",
          faqAnswer1:"If you're in canada select 'No', otherwise select 'Yes'. Being in Canada means you're a citizen, worker, student or PR. You're considered to be outside of Canada if you're not physically here and/or you have a visitor visa.",
          faq2: "If I am a Third Country National (TCN), can this program help me automatically schedule a U.S. visa appointment?",
          faqAnswer2: "Yes, the program works either way. However, the success rate for TCNs is relatively low, so please double-check carefully.",
          faq3: "Do I need to do anything after submission? Can I do anything else?",
          faqAnswer3: "No, the program will automatically grab a slot and notify you via email upon success. Meanwhile, you can carry on with anything else you'd like to do; it won't affect the program.",
          faq4: "Do I need to cancel existing appointments to use the program? Will the program cancel my existing appointments?",
          faqAnswer4: "No. The program won't cancel your existing appointments; it will only reschedule them for your desired date range. Please keep your passwords safe.",
          faq5: "What if I entered incorrect information or want to change the date range?",
          faqAnswer5: "Submit a new visa application request, and the new request will override the old one.",
          faq6: "Can I use this program repeatedly?",
          faqAnswer6: "Yes, but each time after a successful visa application, you'll need to submit a new visa application request and pay the fee."
        
        },
        home: {
          heading: "Appointment Finder",
          heading2: "Automatically Book a Slot",
          heading3: "and get real-time email after successful booking",
          cta: "Start Here",
          optionsTitle: "Please select one of the following",
          option1: "Create/Update request",
          option2: "Query existing request",
          option3: "Cancel request & Refund",
          refundOptionTitle: "Please note the following",
          refundP1: "You'll receive your refund automatically within 24 hours",
          refundP2:
            "After the refund, the appointment search will be canceled and you'll need to book again.",
          refundP3:
            "For security, we recommend changing your password on the booking website",
          refundInput1:
            "If left blank, all applicants in the account will be refunded by default.",
        },
        tutorial:{
          title:"Tutorial",
          title1: "Fill in Personal Information",
          body1: "Choose the city where you want to schedule your interview and provide the login password for the visa appointment website. If everyone in the account needs to apply for a visa, there is no need to fill in the schedule ID; the system will automatically determine.",
          title2: "Apply for Visa for Someone Else (Optional)",
          body2: "If not everyone in the account needs to apply for a visa, you can specify which applicant to apply for by filling in the schedule ID. After logging into https://ais.usvisa-info.com/en-ca/niv/users/sign_in, click 'continue,' and the number displayed in the URL is the schedule ID. For multiple applicants, please fill in the format as '54306276,54306278.'",
          title3: "Split Group Visa Application (Optional)",
          body3: "If there are multiple people in the account who are in the same group, the system defaults to applying for visas together, but the success rate is relatively low. If you can accept interviews at different times, split the applicants in the same group. After logging into https://ais.usvisa-info.com/en-ca/niv/users/sign_in, click 'continue,' then click 'Reschedule Appointment' on the page as shown in the picture below, select one applicant, click 'next,' and a new schedule ID will be generated for the applicant.",
          title4: "Submit Application via Email",
          body4: "Please carefully check the information you have provided, especially ensuring that the password provided can successfully log in to the visa appointment website. After confirming the information is correct, please use the email address associated with the visa appointment website account to send the content displayed on the interface via email. If you do not receive an automatic reply email, it indicates that there was an error in the content sent or the system encountered a network error. Please check the content sent and try again several times.",
          title5: "Complete Order Payment",
          body5: "Click the payment link in the previous automatic reply email and complete the payment in any way you prefer. After completing the payment, you will receive another automatic reply email, indicating that the visa application process has started."
        
        } ,
        submissionForm: {
          heading1:
            "Plese email us the following details using the email used for your visa appointment",
          heading2:
            "Didn't recieve an automated reply? Please check your spam folder",
          link1: "or change your email address",
        },
        creationForm:{
          title:"Please fill out the following information",
          idealDate:"Ideal date range",
          noTimeAdded:"No time added!",
          skipTmr:"Skip slots that become available with only 1 day notice.",
          passwordLabel:"Appointment account password"
        },
        errors:{
          minChar:"Password is at least 8 characters",
          requiredPassword:"Please enter the appointment website password",
          timeRange:"Please make sure to provide at least 1 time range."

        },
        emailChangeModal: {
          title: "Change Visa Account Email",
          text1:
            "1. Login to https://ais.usvisa-info.com/en-ca/niv/users/sign_in then on the top right corner click Actions -> Account Settings -> Update Email.",
          text2:
            "2. Enter the new email and click Update. To avoid getting categorized as Ad/spam email, we recommend using Gmail.",
        },
        navbar: {
          link1: "User Tutorial",
          link2: "DS-160",
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
        form: {
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
          cancelButtonText: "Cancel",
          confirmButtonText: "Confirm",
        },
        faq: {
          heading: "FAQ",
          faq1: 'How should I answer the TCN question "Are you traveling from another country to apply for a U.S. visa in Canada?"',
          answer1:
            "No if you are a local resident, student, worker, or permanent resident. Yes if you are in Canada on a visitor's Visa.",
          faq2: "Am I eligible to use this program if I answered yes to the above question?",
          answer2:
            "Yes, the program is applicable to both yes and no scenarios; but the success rate of tcn=yes is quite low, please make sure you answer correctly.",
          faq3: "What else do I need to do after submitting the request? Is there anything I cannot do?",
          answer3:
            "No, the program will automatically reschedule and send an email notificaiton to you. In the mean time, you can do whatever you want, it won't affect the program.",
          faq4: "Should I cancel my existing appointment to use the program? Will my appointment get cancelled by the program?",
          answer4:
            "No, you don't have to cancel your existing appointment. The program won't cancel your appointment, instead, it will only reschedule the appointment to your desirable date range. Make sure your USVISA-INFO credentials remain secured.",
          faq5: "What if I need to correct the information or date range?",
          answer5: "Submit a new request.",
          faq6: "Can I use the program again and again and again?",
          answer6: "Yes, simply submit a new request, but you'll have to pay.",
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
        communityButtonText: "Community",
        toggleLanguage: "CN",
        open: "Display ",
        close: "Close ",
        donation:
          "If you wish to support this program, please consider donating us.",
        donationText: "This should be used for donation only",
      },
    },
  },
});

const selectedLanguage = localStorage.getItem("lang");

if (selectedLanguage) {
  i18n.changeLanguage(selectedLanguage);
}

export default i18n;
