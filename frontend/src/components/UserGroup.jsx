import React from "react";
import { Link } from "@nextui-org/react";

const UserGroup = () => {
  return (
    <div className="flex flex-col items-center mt-3 mb-3 w-full">
      <div className="w-4/5 text-center">
        <div className="border-b-2 p-2">
          <p className="flex justify-center text-lg gap-x-2 items-center">
            <img src="/wechat.png" alt="wechat logo" width={30} height={30} />
            微信
          </p>
          <img src="/wechatQR.jpg" alt="wechat group" />
        </div>
        <div className="border-b-2 p-2">
          <p className="flex justify-center text-lg gap-x-2 items-center">
            <img src="/xhs.png" alt="xiaohongshu logo" width={30} height={30} />
            小红书
          </p>
          <img src="/wechatQR.jpg" alt="wechat group" />
        </div>
        <div className="p-2">
          <Link
            isExternal
            className="gap-x-2"
            href="https://discord.gg/MFFf4RnpPm"
            color="foreground"
          >
            <img src="/discord.png" alt="discord logo" width={30} height={30} />
            <p className="hover:text-blue-600 text-lg">Discord</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserGroup;
