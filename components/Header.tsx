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
    <>
      {/* Desktop */}
      <div className="w-full px-16 py-3 md:flex justify-between items-center hidden">
        <div className="flex items-center gap-8">
          <Image src={Logo} width={150} height={150} alt="logo" />
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
          <li className="flex flex-col justify-center items-center cursor-pointer text-center">
            <TfiMapAlt className="w-7 h-7 text-[#1c2120]" />
            <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
              Track Order
            </span>
          </li>
          <li className="flex flex-col justify-center items-center text-[#1c2120] relative cursor-pointer text-center">
            <BsHandbag className="w-7 h-7 text-[#1c2120]" />
            <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
              Cart
            </span>
            <span className="absolute top-0 -right-1 bg-[#ff0000] w-4 h-4 flex justify-center items-center rounded-full text-xs text-white">
              0
            </span>
          </li>
          <li className="flex flex-col justify-center items-center text-[#1c2120] cursor-pointer text-center">
            <RxAvatar className="w-7 h-7 text-[#1c2120]" />
            <span className="text-sm text-[#1c2120] hover:text-[#0e4d65]">
              Sign in
            </span>
          </li>
        </ul>
      </div>

      {/* Mobile */}
      <div className="w-full px-6 py-2 flex justify-between items-center md:hidden">
        <Image src={Logo} width={100} height={100} alt="logo" />
        <ul className="flex items-center gap-3">
          <li className="flex flex-col justify-center items-center text-[#0e4d65] relative cursor-pointer">
            <BsHandbag className="w-5 h-5 text-[#0e4d65]" />
            <span className="absolute -top-2 -right-2 bg-[#ff0000] w-4 h-4 flex justify-center items-center rounded-full text-xs text-white">
              0
            </span>
          </li>
          <li>
            <IoIosSearch className="w-6 h-6 text-[#0e4d65]" />
          </li>
          <li className="flex flex-col justify-center items-center text-[#1c2120] cursor-pointer">
            <RxAvatar className="w-7 h-7 text-[#0e4d65]" />
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r md:hidden w-full from-[#cde7f6] to-[#f0f9ff] py-3 px-6 flex  my-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/flag.png" width={32} height={32} alt="flag" />
          <span className="text-md text-[#0e4d65]">Deliver To?</span>
        </div>
        <AiOutlineEdit className="text-[#0e4d65] w-6 h-6" />
      </div>
    </>
  );
};
export default Header;
