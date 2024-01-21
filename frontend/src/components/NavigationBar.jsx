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

const NavigationBar = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="space-between">
        <NavbarBrand>
          <Link href="/" color="foreground" className="gap-x-2">
            <img src="/vite.svg" alt="main logo" width={30} height={30} />
            <p className="font-bold text-xl">Vizard</p>
          </Link>
        </NavbarBrand>

        <div className="hidden sm:flex gap-x-3">
          <NavbarItem>
            <Link
              className="hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ceac.state.gov/genniv/"
            >
              填写DS-160
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
            >
              手动预约
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        {/*<NavbarItem className="hidden sm:flex">
          <Link className="hover:text-blue-600" href="/tip" color="foreground">
            💰 支持这个项目 一起打击黄牛
          </Link>
        </NavbarItem> */}
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
        {/*<NavbarItem className="sm:hidden">
          <Button size="sm">
            <Link href="/tip">赞助</Link>
          </Button>
        </NavbarItem>*/}
      </NavbarContent>

      <NavbarMenu>
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
            手动预约
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
