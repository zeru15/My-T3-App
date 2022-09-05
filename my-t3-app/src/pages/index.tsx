import Link from "next/link";

export default function Home() {

  return (

    <div>

      {/* Navbar Header Section */}
      <div className="bg-gray-800  border-b border-gray-600 shadow-lg items-center flex justify-between w-full fixed top-0 " >

        {/* Left Side */}
        <div className="flex items-center " >
          <Link href="#">
            <a> <img src="https://www.lootrush.com/images/logo.svg" alt="Logo" className="inline-block p-4 ml-12" /> </a>
          </Link>

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
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/gods%20unchained.png"  alt = "Img" className = "rounded-lg "/>
          </div>
          <div className = "p-2  ">
            <img src = "https://www.lootrush.com/images/blankos.png" alt = "Img" className = "rounded-lg "/>
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/illuvium.png" alt = "Img" className = "rounded-lg "/>
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginCard.png" alt = "Img" className = "rounded-lg "/>
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/thetan%20arena.png" alt = "Img" className = "rounded-lg " />
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/sorare.png" alt = "Img" className = "rounded-lg "/>
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/star%20atlas.png" alt = "Img" className = "rounded-lg " />
          </div>
          <div className = "p-2 ">
            <img src = "https://www.lootrush.com/images/zed.png" alt = "Img" className = "rounded-lg "/>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className=" bg-gray-800 pb-20">
        <div className="text-white text-5xl text-center mb-20 ">
          Start playing in a few clicks
        </div>
        <div className= "flex " >
          <div className="mx-24 text-center ">
            <img src = "https://www.lootrush.com/images/choose.svg" alt = "img1" />
            <div className="text-gray-500 inline-flex items-center justify-center font-body select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg bg-opacity-20 shadow border border-transparent text-white bg-gray-600 ">1</div>
            <p className=""> Choose a game </p>
            <p></p>
          </div>
          <div className="mx-24 text-center ">
            <img src = "https://www.lootrush.com/images/pay-entry.svg" alt = "img2" />
            <p className="text-gray-500 inline-flex items-center justify-center font-body select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg bg-opacity-20 shadow border border-transparent text-white bg-gray-600 " >2</p>
            <p className=" "> Choose your NFTs</p>
            <p></p>
          </div>
          <div className="mx-24 text-center ">
            <img src = "https://www.lootrush.com/images/have-fun.svg" alt = "img3" />
            <p className="text-gray-500 inline-flex items-center justify-center font-body select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg bg-opacity-20 shadow border border-transparent text-white bg-gray-600 " >3</p>
            <p className=""> Start playing </p>
            <p></p>
          </div>
          <div className="mx-28 text-center " >
            <img src = "https://www.lootrush.com/images/play-to-earn.svg" alt = "img4 " />
            <p className="text-gray-500 inline-flex items-center justify-center font-body select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg bg-opacity-20 shadow border border-transparent text-white bg-gray-600 " >4</p>
            <p className="text-center"> Earn tokens through gameplay </p>
            <p></p>
          </div>
        </div>


      </div>

    </div>
  )
}
