import {
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-20 flex w-full items-center justify-between gap-x-3 bg-white px-6 py-3">
      <Navbar className="absolute z-0 md:hidden">
        <NavbarMenuToggle />
        <NavbarMenu>
          <NavbarMenuItem>
            <Link
              className="font-medium hover:text-blue-600"
              color="foreground"
              href="/tutorial"
            >
              {t("navbar.link1")}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="font-medium hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ceac.state.gov/genniv/"
            >
              {t("navbar.link2")}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="font-medium hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
            >
              USVISA-INFO
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div className="flex flex-grow items-center justify-center gap-x-3 md:justify-normal">
        <Button as={Link} href="/" isIconOnly className="bg-transparent">
          <img src="/logo.png" alt="main logo" width={38} height={38} />
        </Button>
        <div className="hidden items-center gap-x-6 md:flex">
          <Link
            className="text-sm font-medium hover:text-blue-600"
            color="foreground"
            href="/tutorial"
          >
            {t("navbar.link1")}
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600"
            isExternal
            color="foreground"
            href="https://ceac.state.gov/genniv/"
          >
            {t("navbar.link2")}
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600"
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
          >
            USVISA-INFO
          </Link>
        </div>
      </div>
      <div className="hidden items-center gap-x-3 md:flex">
        <div className="flex items-center gap-x-2 text-sm font-medium">
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
      <Button
        as={Link}
        href="/community"
        className="absolute right-2 rounded-xl border-2 bg-sky-400 p-3 text-sm md:hidden"
      >
        {t("communityButtonText")}
      </Button>
    </nav>
  );
};

export default NavigationBar;
