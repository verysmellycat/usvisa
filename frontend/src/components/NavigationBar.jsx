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
} from "@nextui-org/react";

const NavigationBar = () => {
  return (
    <Navbar isBordered>
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
