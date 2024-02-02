import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
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
    <Navbar isBordered maxWidth="xl">
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand>
          <Link href="/" color="foreground" className="gap-x-2">
            <img src="/logo.png" alt="main logo" width={38} height={38} />
            <p className="font-bold font-inter text-xl">Vizard</p>
          </Link>
        </NavbarBrand>
        <div className="hidden gap-x-2 sm:flex">
          <NavbarItem>
            <Link
              className="hover:text-blue-600"
              color="foreground"
              href="/instruction"
            >
              {t("navbar.link1")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ceac.state.gov/genniv/"
            >
              {t("navbar.link2")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
            >
              USVISA-INFO
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            isExternal
            className="gap-x-2"
            href="https://discord.gg/MFFf4RnpPm"
            color="foreground"
          >
            <img src="/discord.png" alt="discord logo" width={30} height={30} />
            <p className="hover:text-blue-600">Discord</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            isExternal
            className="gap-x-2"
            href="https://github.com/usvisa-lol/usvisa"
            color="foreground"
          >
            <img src="/github.png" alt="github logo" width={30} height={30} />
            <p className="hover:text-blue-600">Github</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Popover placement="bottom">
            <PopoverTrigger>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <img
                  src="/xhs.png"
                  alt="xiaohongshu logo"
                  width={30}
                  height={30}
                />
                <p className="hover:text-blue-600">小红书</p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <img src="/xhsQR.jpg" alt="xiaohongshu QR code" width={200} />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Popover placement="bottom">
            <PopoverTrigger>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <img
                  src="/wechat.png"
                  alt="wechat logo"
                  width={30}
                  height={30}
                />
                <p className="hover:text-blue-600">微信群</p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <img src="/wechatQR.jpg" alt="wechat group QR code" width={200} />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <Button size="sm">
            <Link href="/community">{t("text.userCommunity")}</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link
            className="hover:text-blue-600"
            color="foreground"
            href="/instruction"
          >
            使用教程
          </Link>
        </NavbarItem>
        <NavbarMenuItem>
          <Link
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
          >
            填写DS-160
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
          >
            USVISA-INFO
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
