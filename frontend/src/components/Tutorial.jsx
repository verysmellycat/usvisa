
import { useTranslation } from "react-i18next";
export default function Tutorial({ variant }) {
  const {t} = useTranslation()
  const cgiVideoItems = [
    {
      title: "加载浏览器插件",
      body: "在chrome浏览器中，点击右上角 -> 扩展程序 -> 管理扩展程序。打开开发者模式后，点击加载已解压的扩展程序，选择插件所在文件夹。",
    },
    {
      title: "输入刷签凭证",
      body: "加载插件后，输入邮箱收到的token，点击开始刷签。在这期间如果你打开了美签取消预约页面/更改预约页面并且有符合你时间的slot，程序会检测到并且自动跳转到预约页面帮你预约。",
    },
  ];

  const cgiImageItems = [
    {
      title: "填写个人信息",
      body: "提供签证预约网站的登陆密码，并且输入预约人数。请确保你输入的人数与账户中的一致，否则程序无法正常运行。",
    },
    {
      title: "发送邮件提交",
      body: "请仔细检查你填写的信息，尤其确保提供的密码可以成功登陆签证预约网站。确认无误后，请使用与签证预约网站账户相同的邮箱发送界面中显示内容的邮件。如果没有收到自动回邮，证明发送内容有误，或系统遇到了网络错误，请检查发送的内容，多尝试几次。",
    },
  ];

  const aisItems = [
    {
      title: t('tutorial.title1'),
      body: t('tutorial.body1'),
    },
    {
      title: t('tutorial.title2'),
      body: t('tutorial.body2'),
    },
    {
      title: t('tutorial.title3'),
      body: t('tutorial.body3'),
    },
    {
      title: t('tutorial.title4'),
      body: t('tutorial.body4'),
    },
    {
      title: t('tutorial.title5'),
      body: t('tutorial.body5'),
    },
  

  ];

  return (
    <>
      <h2 className="text-center text-3xl font-bold">{t('tutorial.title')}</h2>
      {variant === "cgi" &&
        cgiImageItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse gap-x-6 gap-y-6 lg:grid lg:grid-cols-10"
          >
            <img
              src={`/cgi-${index + 1}.png`}
              className="col-span-7 border border-foreground-400"
            />
            <div className="col-span-3 w-full space-y-3 text-wrap">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-lg">{item.body}</p>
            </div>
          </div>
        ))}
      {(variant === "cgi" ? cgiVideoItems : aisItems).map((item, index) => (
        <div
          key={index}
          className="flex flex-col-reverse gap-x-6 gap-y-6 lg:grid lg:grid-cols-10"
        >
          {variant === "cgi" ? (
            <video
              src={`/cgi-${index + 1}.mp4`}
              autoPlay
              loop
              className="col-span-7 border border-foreground-400"
            />
          ) : (
            <img
              src={`/${index + 1}.png`}
              className="col-span-7 border border-foreground-400"
            />
          )}
          <div className="col-span-3 w-full space-y-3 text-wrap">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-lg">{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
