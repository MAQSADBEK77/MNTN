import Image from "next/image";
import logo from "../images/logo.svg";
import Account from "../images/account.svg";
import Link from "next/link";
function NavBar() {
  return (
    <div className="header flex justify-between flex-wrap gap-7 h-36 items-center px-20">
      <Link href="#" className="logotip">
        <Image
          className="hover:scale-110 transition-all duration-300 "
          src={logo}
          alt="Logotip"
        />
      </Link>
      <div className="links flex gap-10 h-10 items-center">
        <Link
          href="#"
          className="hover:text-white transition-all h-full flex items-center p-4 rounded-lg hover:bg-[#0b1d26]">
          Equipment
        </Link>
        <Link
          href="#"
          className="hover:text-white transition-all h-full flex items-center p-4 rounded-lg hover:bg-[#0b1d26]">
          About us
        </Link>
        <Link
          href="#"
          className="hover:text-white transition-all h-full flex items-center p-4 rounded-lg hover:bg-[#0b1d26]">
          Blog
        </Link>
      </div>
      <Link
        href="#"
        className="p-4 hover:bg-[#0b1d26] h-10 transition-all rounded-lg flex items-center gap-2">
        <Image alt="Account" src={Account} />
        <span>Account</span>
      </Link>
    </div>
  );
}

export default NavBar;
