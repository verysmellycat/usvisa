import { Link, Button } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";

const UserCommunity = () => {
  return (
    <div className="flex flex-col items-center my-3w-full">
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
          <img src="/wechatQR.jpg" alt="wechat group" className="max-w-xs" />
        </Tab>
        <Tab
          key="xhs"
          title={
            <div className="flex items-center gap-x-2">
              <img src="/xhs.png" alt="xhs logo" width={18} height={18} />
              <span>小红书</span>
            </div>
          }
        >
          <img src="/xhsQR.jpg" alt="xhs group" className="max-w-xs" />
        </Tab>
        <Tab
          key="github"
          title={
            <div className="flex items-center gap-x-2">
              <img src="/github.png" alt="github logo" width={18} height={18} />
              <span>Github</span>
            </div>
          }
        >
          <Button
            as={Link}
            href="https://github.com/usvisa-lol/usvisa"
            isExternal
            className="bg-black max-w-xs h-fit py-3"
          >
            <p className="text-white text-xs break-words whitespace-normal">
              <span className="font-medium text-sm">Join Github</span> <br />
              Request new feature / country support, ask questions or provide
              feedback
            </p>
          </Button>
        </Tab>
        <Tab
          key="discord"
          title={
            <div className="flex items-center gap-x-2">
              <img
                src="/discord.png"
                alt="discord logo"
                width={18}
                height={18}
              />
              <span>Discord</span>
            </div>
          }
        >
          <Button
            as={Link}
            href="https://discord.gg/MFFf4RnpPm"
            isExternal
            className="bg-blue-600 max-w-xs h-fit py-3"
          >
            <p className="text-white text-xs break-words whitespace-normal">
              <span className="font-medium text-sm">Join Discord</span> <br />
              Ask questions, share feedback, get updates, learn about upcoming
              features and more
            </p>
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserCommunity;
