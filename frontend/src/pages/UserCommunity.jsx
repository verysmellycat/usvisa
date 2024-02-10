import { Link } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";

const UserCommunity = () => {
  return (
    <div className="flex flex-col items-center my-3 w-full">
      <Tabs>
        <Tab
          key="wechat"
          title={
            <div className="flex items-center gap-x-2">
              <img src="/wechat.png" alt="wechat logo" width={18} height={18} />
              <span>微信</span>
            </div>
          }
        >
          <img src="/wechatQR.jpg" alt="wechat group" className="mx-auto" />
        </Tab>
        <Tab key="xhs" title="小红书">
          <div className="flex flex-col border-b-2 p-2 gap-y-3">
            <p className="flex justify-center text-lg gap-x-2 items-center">
              <img
                src="/xhs.png"
                alt="xiaohongshu logo"
                width={30}
                height={30}
              />
              小红书
            </p>
            <img src="/xhsQR.jpg" alt="xhs group" />
          </div>
        </Tab>
      </Tabs>
      <Link
        isExternal
        className="gap-x-2"
        href="https://discord.gg/MFFf4RnpPm"
        color="foreground"
      >
        <img src="/discord.png" alt="discord logo" width={30} height={30} />
        <p className="hover:text-blue-600 text-lg">Discord</p>
      </Link>
      <Link
        isExternal
        className="gap-x-2"
        href="https://github.com/usvisa-lol/usvisa"
        color="foreground"
      >
        <img src="/github.png" alt="github logo" width={30} height={30} />
        <p className="hover:text-blue-600 text-lg">Github</p>
      </Link>
    </div>
  );
};

export default UserCommunity;
