import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
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
} from "@nextui-org/react";

const NavigationBar = () => {
  const menuItems = ["填写DS-160", "手动预约"];
  /*
  return (
    <nav className="flex justify-between items-center p-2 mb-2 border-y-2 sticky z-20 top-0 bg-white ">
      <div className="flex items-center gap-x-10">
        <Link to="/" className="flex items-center ml-2 gap-x-3">
          <img src="/vite.svg" alt="main logo" width={40} height={40} />
          <p className="font-semibold text-2xl ">Vizard</p>
        </Link>
        <a href="https://ceac.state.gov/genniv/">填写DS-160</a>
        <a href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in">
          手动预约
        </a>
      </div>
      <div className="flex items-center gap-x-10">
        <Link to="/tip">
          <p className="hover:text-blue-600">支持这个项目 一起打击黄牛</p>
        </Link>
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
        <a
          href="https://discord.gg/fEY8ZUuZYU"
          className="flex items-center gap-x-2"
        >
          <img src="/discord.png" alt="discord logo" width={30} height={30} />
          <p className="hover:text-blue-600">Discord</p>
        </a>
      </div>
    </nav>
  );*/

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand>
          <Link href="/" color="foreground">
            <img src="/vite.svg" alt="main logo" width={30} height={30} />
            <p className="font-bold text-xl">Vizard</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="hover:text-blue-600"
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
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
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link className="hover:text-blue-600" href="/tip" color="foreground">
            💰 支持这个项目 一起打击黄牛
          </Link>
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <Button size="sm">
            <Link href="/tip">赞助</Link>
          </Button>
        </NavbarItem>
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
