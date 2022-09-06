import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {

  return (

    <div>

      {/* Navbar Header Section */}
      <div className="bg-gray-800  border-b border-gray-600 shadow-lg items-center flex justify-between w-full fixed top-0 " >

        {/* Left Side */}
        <div className="flex items-center " >

          <a href="https://www.lootrush.com"> <img src="https://www.lootrush.com/images/logo.svg" alt="Logo" className="inline-block p-4 ml-12" /> </a>

          <Link href="#" >
            <a className="text-white inline-block p-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg "> All Games </a>
          </Link>
        </div>

        {/* Right Side */}
        <div>
          <button className="inline-block p-2 mr-4  text-white bg-gray-600 hover:bg-gray-700 rounded-lg active:bg-gray-800 " >
            Login
          </button>

          <button className="inline-block p-2 mr-12 bg-violet-500 text-white hover:bg-violet-600 rounded-lg  " >
            Create Account
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-800 py-32 ">
        {/* Upper Section */}
        <div className="text-center pt-20 text-white text-4xl font-semibold  ">
          Crypto gaming for all
        </div>
        <div className="text-center text-gray-400 pt-10 ">
          Challenge your gaming skills through a fun and rewarding experience
        </div>
        <div className="text-center mt-12 ">
          <Link href="#" >
            <a className="text-black bg-white inline-block p-3 rounded-lg hover:bg-gray-200 active:bg-gray-300 " > Explore all games</a>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="flex mt-12 text-center ">
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/gods%20unchained.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2  ">
            <img src="https://www.lootrush.com/images/blankos.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/illuvium.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginCard.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/thetan%20arena.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/sorare.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/star%20atlas.png" alt="Img" className="rounded-lg " />
          </div>
          <div className="p-2 ">
            <img src="https://www.lootrush.com/images/zed.png" alt="Img" className="rounded-lg " />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className=" bg-gray-800 pb-20">
        <div className="text-white text-5xl text-center mb-20 ">
          Start playing in a few clicks
        </div>
        <div className="flex " >
          <div className=" text-center px-20 ">
            <img src="https://www.lootrush.com/images/choose.svg" alt="img1" className="w-50 h-50 display-block mr-auto ml-auto" />
            <div className="text-gray-500 rounded-lg bg-gray-600 inline-flex px-4 py-2 ">1</div>
            <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Choose a game </p>
            <p className="leading-6 font-body text-gray-400 mt-5">Create an account and select the game you want to play</p>
          </div>
          <div className=" text-center px-20 ">
            <img src="https://www.lootrush.com/images/pay-entry.svg" alt="img2" className="w-50 h-50 display-block mr-auto ml-auto " />
            <p className="text-gray-500 rounded-lg bg-gray-600 inline-flex px-4 py-2 " >2</p>
            <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Choose your NFTs</p>
            <p className="leading-6 font-body text-gray-400 mt-5">Select the NFTs that best fit your gaming preference</p>
          </div>
          <div className=" text-center px-20 ">
            <img src="https://www.lootrush.com/images/have-fun.svg" alt="img3" className="w-50 h-50 display-block mr-auto ml-auto " />
            <p className="text-gray-500 rounded-lg bg-gray-600 inline-flex px-4 py-2 " >3</p>
            <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Start playing </p>
            <p className="leading-6 font-body text-gray-400 mt-5">Get access to your account credentials and have fun!</p>
          </div>
          <div className=" text-center px-20 " >
            <span><img src="https://www.lootrush.com/images/play-to-earn.svg" alt="img4 " className="w-50 h-50 display-block mr-auto ml-auto " /></span>
            <p className="text-gray-500 rounded-lg bg-gray-600 inline-flex px-4 py-2 " >4</p>
            <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Earn tokens through gameplay </p>
            <p className="leading-6 font-body text-gray-400 mt-5">Withdraw earned tokens into your own wallet, or use them to buy or upgrade NFTs</p>
          </div>
        </div>



        <div>
          <div className="mt-60 text-center text-white text-bold text-2xl">
            Have fun by leveraging our global marketplace
          </div>
          <div className="flex mt-10 ">
            <div className="pl-20">
              <img src="https://www.lootrush.com/images/section%201.png" alt="Best NFTs" className="w-3/4" />
            </div>
            <div className="pl-20">
              <div className="text-white text-4xl font-bold mb-6 mt-10">
                The best NFTs to enjoy the game
              </div>
              <div>
                <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
                <label className="text-gray-300 text-base ml-4">NFTs curated from experts and guilds</label>
              </div>
              <div >
                <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
                <label className="text-gray-300 text-base ml-4">Change your NFTs whenever you want</label>
              </div>
              <div>
                <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
                <label className="text-gray-300 text-base ml-4">Various programs to match your gaming preference</label>
              </div>
            </div>
          </div>
        </div>


        <div className=" flex mt-40 ">
          <div className="px-20">
            <div className="text-white text-4xl font-bold mb-6 mt-10 ">
              Earn crypto tokens by playing games
            </div>
            <div>
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Use your gaming skills to grow your balance</label>
            </div>
            <div >
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Purchase your own NFTs</label>
            </div>
            <div>
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Become a top player... Or just have fun!</label>
            </div>
          </div>
          <div>
            <img src="https://www.lootrush.com/images/section%202.png" alt="crypto tokens" className="w-3/4" />
          </div>
        </div>


        <div className=" flex mt-40 ">
          <div className="pl-36">
            <img src="https://www.lootrush.com/images/section%203.png" alt="NFTs to other players" className="w-full" />
          </div>
          <div className="px-20">
            <div className="text-white text-4xl font-bold mb-6 mt-10 ">
              List your NFTs to other players
            </div>
            <div>
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Easy - no gamer management required</label>
            </div>
            <div >
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Have your NFTs earn tokens when you are not playing</label>
            </div>
            <div>
              <input type="checkbox" checked name="check" className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5" />
              <label className="text-gray-300 text-base ml-4">Know how much you will earn through listing</label>
            </div>
          </div>
        </div>


        <div className="text-center mt-40 py-12 bg-violet-500 mx-10 rounded-lg ">
          <p className=" text-white leading-6 font-body font-bold text-3xl mb-8">
            Let's start
          </p>
          <Link href="#" >
            <a className="px-4 py-2 text-sm rounded-lg border border-transparent shadow transition focus:outline-none hover:no-underline text-black hover:text-black active:text-black bg-white hover:bg-gray-200 active:bg-gray-300" > Explore all games </a>
          </Link>
        </div>
      </div>


      {/* Footer Section */}
      <div>
        <Footer />
      </div>

    </div>
  )
}
