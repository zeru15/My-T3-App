import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";
import Banner from "./../../../public/Images/Banner.png";
import Logo from "./../../../public/Images/Logo.png";
import AxieinfinityOriginCard from "./../../../public/Images/Card.png";
import GodsUnchained from "./../../../public/Images/godsunchained.png";
import Blankos from "./../../../public/Images/blankos.png";
import Illuvium from "./../../../public/Images/illuvium.png";
import ThetanArena from "./../../../public/Images/thetan arena.png";
import Sorare from "./../../../public/Images/sorare.png";
import StarAtlas from "./../../../public/Images/star atlas.png";
import Zed from "./../../../public/Images/zed.png";
import Section1 from "./../../../public/Images/section 1.png";
import Section2 from "./../../../public/Images/section 2.png";
import Section3 from "./../../../public/Images/section 3.png";
import Mir from "./../../../public/Images/mir4.png";
import CryptoKitties from "./../../../public/Images/crypto kitties.png";
import NbaTopShot from "./../../../public/Images/nba top shot.png";
import EmberSword from "./../../../public/Images/ember sword.png";

function Games() {
  return (
    <div className=" bg-gray-800 w-full ">
      {/* Header Section */}
      <Header />

      {/* Upper Section  */}
      <div>
        <div className="">
          <div className="absolute inset-0 my-28 mx-20 pl-12 ">
            <Image
              src={Banner}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r from-gray-800 to-transparent "></div>
          </div>
          <div className="relative p-36 ml-8">
            <Image
              src={Logo}
              width="180"
              height="150"
              alt="Axie Infinity Logo"
            />
            <p className="text-white leading-6 font-body mt-6 md:w-1/2">
              {" "}
              Axie Infinity is a trading and battling game that allows players
              to collect, breed, raise, battle, and trade creatures known as
              "axies", which are digitized as NFTs.
            </p>
            <div className="space-x-2 ">
              <div
                className="my-2 inline-flex items-center justify-center 
                    font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 shadow 
                    border border-transparent text-white bg-white bg-opacity-10"
              >
                {" "}
                Strategy{" "}
              </div>
              <div
                className="my-2 inline-flex items-center justify-center 
                    font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 
                    shadow border border-transparent text-white bg-white bg-opacity-10"
              >
                {" "}
                70 MB
              </div>
              <div
                className="my-2 inline-flex items-center justify-center 
                        font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 
                        shadow border border-transparent text-white bg-white bg-opacity-10"
              >
                <a className="text-current hover:text-current hover:cursor-pointer hover:underline ">
                  {" "}
                  axieinfinity.com{" "}
                </a>
              </div>
              <div className="w-full w-fit space-y-4 space-y-0 pt-6 ">
                <Link href="/games/axie-infinity">
                  <a
                    className="px-12 cursor-pointer flex items-center 
                                font-body font-bold px-6 py-3 text-lg rounded-lg 
                                border border-transparent shadow transition focus:outline-none 
                                hover:no-underline text-black hover:text-black active:text-black 
                                bg-white hover:bg-gray-200 active:bg-gray-300"
                  >
                    Play Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="pb-12 ">
        <div className=" text-white leading-6 font-body font-bold text-2xl m-10">
          All games
        </div>

        <div className="mt-6 mx-auto max-w-md grid gap-3 md:gap-4 grid-cols-2 
                sm:max-w-lg px-2 md:px-6 lg:px-8 md:grid-cols-4 md:max-w-7xl">
          <Link href="/games/axie-infinity" >
            <div className="relative flex flex-col overflow-hidden translate 
                    transition cursor-pointer hover:scale-105 active:scale-95">

              <a>
                <Image
                  src={AxieinfinityOriginCard}
                  className="rounded-lg shadow-lg"
                  alt="Axie Infinity Promo Image"
                />
              </a>

              <div className="py-2">
                <button
                  className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                            px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                            focus:outline-none hover:no-underline text-black hover:text-black active:text-black 
                            bg-white hover:bg-gray-200 active:bg-gray-300"
                >
                  <span className="text-xl"> Play now </span>
                </button>
              </div>
            </div>
          </Link>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={GodsUnchained}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={ThetanArena}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={Mir}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={Sorare}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={Zed}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={CryptoKitties}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={NbaTopShot}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={Illuvium}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={StarAtlas}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={Blankos}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-3">
              <button
                className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              >
                <img
                  src="https://www.lootrush.com/images/icons/add-alert.svg"
                  className="w-6 h-6"
                  alt="Gods Unchained Poster"
                />
              </button>
            </div>
            <div className="shadow-lg">
              <Image
                src={EmberSword}
                className="rounded-t-lg"
                alt="Gods Unchained Promo Image"
              />
              <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                <p className="leading-6 text-sm font-body m-0">
                  {" "}
                  Unavailable on LootRush{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Games;
