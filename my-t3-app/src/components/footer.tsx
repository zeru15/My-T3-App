import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gray-900 pt-12 border-t border-gray-600 w-full ">
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 lg:flex border-b border-gray-600 pb-12 ">
        <div className="px-10 ">
          <span>
            {" "}
            <img
              src="https://www.lootrush.com/images/logo.svg"
              alt="Logo"
              className="inline-block p-4 ml-12"
            />{" "}
          </span>
          <p className="text-gray-500 text-base">
            {" "}
            &copy; 2022 Smelt Technologies Inc.{" "}
          </p>
          <div className="grid grid-cols-2 md:flex text-white text-2xl">
            <a
              href="#"
              className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className=" text-2xl bg-white bg-opacity-20 m-4 p-2 rounded-lg "
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="px-10 ">
          <p className="text-white font-sans text-base font-bold leading-[24px] mb-6 ">
            {" "}
            Company{" "}
          </p>
          <p className="text-gray-500 text-base">
            {" "}
            <a href="/"> Home </a>{" "}
          </p>
          <p className="text-gray-500 text-base">
            <Link href="/about">About us</Link>
          </p>
          <p className="text-gray-500 text-base">
            <Link href="#">How it works</Link>
          </p>
        </div>
        <div className="px-10 ">
          <p className="text-white font-sans text-base font-bold leading-[24px] mb-6 ">
            {" "}
            Contact us{" "}
          </p>
          <p className="text-gray-500 text-base"> General Questions </p>
          <a href="#" className="text-white hover:text-white">
            {" "}
            support@lootrush.com{" "}
          </a>
          <p className="text-gray-500 text-base"> Partnerships </p>
          <p>
            {" "}
            <a href="#" className="text-white hover:text-white">
              {" "}
              business@lootrush.com{" "}
            </a>{" "}
          </p>
        </div>
        <div className="px-10 ">
          <p className="text-white font-sans text-base font-bold leading-[24px] mb-6 ">
            {" "}
            Community{" "}
          </p>
          <p className="text-gray-500 text-base mb-4 ">
            {" "}
            Enable gamers all over the world with us.{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="text-white hover:text-white px-4 py-2 text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none hover:no-underline 
                    text-white hover:text-white active:text-white bg-gray-600 
                    hover:bg-gray-700 active:bg-gray-800"
            >
              {" "}
              Join our community{" "}
            </a>{" "}
          </p>
        </div>
        <div className="px-10 ">
          <p className="text-white font-sans text-base font-bold leading-[24px] mb-6 ">
            {" "}
            Our Location{" "}
          </p>
          <p className="text-gray-500 text-base"> 2261 Market Street </p>
          <p className="text-gray-500 text-base"> #4735 </p>
          <p className="text-gray-500 text-base"> San Fransisco, CA </p>
          <p className="text-gray-500 text-base"> 94114 </p>
          <p className="text-gray-500 text-base"> United States </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex text-center justify-center ">
        <p className="p-10 ">
          {" "}
          <img src="https://www.lootrush.com/images/yc.svg" />
        </p>
        <p className="p-10 ">
          {" "}
          <img src="https://www.lootrush.com/images/paradigm.svg" />
        </p>
        <p className="p-10 ">
          {" "}
          <img src="https://www.lootrush.com/images/a11z.svg" />
        </p>
      </div>
    </div>
  );
}

export default Footer;
