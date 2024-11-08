import Image from "next/image";
import Logo from "../public/logo.png";
import Flag from "../public/flag.png";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { TfiMapAlt } from "react-icons/tfi";
import { BsHandbag } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full px-16 py-3 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Image src={Logo} width={180} height={180} alt="logo" />
        <div className="bg-gradient-to-r w-52 from-[#cde7f6] to-[#f0f9ff] py-3 px-4 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={Flag} width={24} height={24} alt="flag" />
            <span className="text-sm text-[#0e4d65]">Deliver To?</span>
          </div>
          <AiOutlineEdit width={24} height={24} className="text-[#0e4d65]" />
        </div>
        <div className="py-3 pl-6 pr-4 bg-[#EDF0F4] w-72 rounded-md flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full border-none outline-none bg-transparent"
          />
          <IoIosSearch className="w-6 h-6 text-[#464646]" />
        </div>
      </div>
      <ul className="flex items-center gap-8">
        <li className="flex flex-col justify-center items-center cursor-pointer">
          <TfiMapAlt className="w-7 h-7 text-[#1c2120]" />
          <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
            Track Order
          </span>
        </li>
        <li className="flex flex-col justify-center items-center text-[#1c2120] relative cursor-pointer">
          <BsHandbag className="w-7 h-7 text-[#1c2120]" />
          <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
            Cart
          </span>
          <span className="absolute top-0 -right-1 bg-[#ff0000] w-4 h-4 flex justify-center items-center rounded-full text-xs text-white">
            0
          </span>
        </li>
        <li className="flex flex-col justify-center items-center text-[#1c2120] cursor-pointer">
          <RxAvatar className="w-7 h-7 text-[#1c2120]" />
          <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
            Sign in
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Header;
