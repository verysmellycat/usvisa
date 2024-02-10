import React from "react";
import {
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between w-full gap-x-3 py-3 px-6 border-b bg-white">
      <div className="flex flex-grow items-center gap-x-3 justify-center md:justify-normal">
        <Button as={Link} href="/" isIconOnly className="bg-transparent">
          <img src="/logo.png" alt="main logo" width={38} height={38} />
        </Button>
        <div className="hidden md:flex items-center gap-x-6">
          <Link
            className="hover:text-blue-600 text-sm font-medium"
            color="foreground"
            href="/tutorial"
          >
            {t("navbar.link1")}
          </Link>
          <Link
            className="hover:text-blue-600 text-sm font-medium"
            isExternal
            color="foreground"
            href="https://ceac.state.gov/genniv/"
          >
            {t("navbar.link2")}
          </Link>
          <Link
            className="hover:text-blue-600 text-sm font-medium"
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
          >
            USVISA-INFO
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-x-3">
        <div className="flex items-center gap-x-2 text-sm font-medium">
          <p>联系我们</p>
          <p>support@usvisa.lol</p>
        </div>
        <Button
          as={Link}
          href="https://discord.gg/MFFf4RnpPm"
          isExternal
          isIconOnly
          className="bg-transparent"
        >
          <img src="/discord.png" alt="discord logo" width={30} height={30} />
        </Button>
        <Button
          as={Link}
          href="https://github.com/usvisa-lol/usvisa"
          isExternal
          isIconOnly
          className="bg-transparent"
        >
          <img src="/github.png" alt="github logo" width={30} height={30} />
        </Button>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly className="bg-transparent">
              <img
                src="/xhs.png"
                alt="xiaohongshu logo"
                width={30}
                height={30}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <img src="/xhsQR.jpg" alt="xiaohongshu QR code" width={200} />
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly className="bg-transparent">
              <img src="/wechat.png" alt="wechat logo" width={30} height={30} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <img src="/wechatQR.jpg" alt="wechat group QR code" width={200} />
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default NavigationBar;
