import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const Navbar = () => {
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
  );
};

export default Navbar;
