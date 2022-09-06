import Link from "next/link"
import Header from "../components/header"

function Games() {
    return (
        <div className = "bg-gray-800 pb-20 ">
            <Header />
            {/* Upper Section  */}
            <div>
                <div className="absolute inset-0 my-28 mx-20  ">
                    <img src="https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginBanner.png" className="h-full w-full object-cover rounded-lg" />
                    <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r from-gray-800 to-transparent ">
                    </div>
                </div>
                <div className="relative p-36">
                    <img src="https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginLogo.png" width="180" alt="Axie Infinity Logo" />
                    <p className="text-white leading-6 font-body mt-6 md:w-1/2" > Axie Infinity is a trading and battling game that
                        allows players to collect, breed, raise, battle, and trade
                        creatures known as "axies", which are digitized as NFTs.
                    </p>
                    <div className="space-x-2 ">
                        <div className="my-2 inline-flex items-center justify-center 
                    font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 shadow 
                    border border-transparent text-white bg-white bg-opacity-10"> Strategy </div>
                        <div className="my-2 inline-flex items-center justify-center 
                    font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 
                    shadow border border-transparent text-white bg-white bg-opacity-10"> 70 MB</div>
                        <div className="my-2 inline-flex items-center justify-center 
                        font-body px-4 py-1 text-sm leading-4 rounded-md bg-opacity-20 
                        shadow border border-transparent text-white bg-white bg-opacity-10">
                            <a className="text-current hover:text-current hover:cursor-pointer"> axieinfinity.com </a>
                        </div>
                        <div className="w-full w-fit space-y-4 space-y-0 pt-6 ">
                            <Link href="https://www.lootrush.com/games/axie-infinity">
                                <a className="px-12 cursor-pointer flex items-center 
                                font-body font-bold px-6 py-3 text-lg rounded-lg 
                                border border-transparent shadow transition focus:outline-none 
                                hover:no-underline text-black hover:text-black active:text-black 
                                bg-white hover:bg-gray-200 active:bg-gray-300">Play Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Lower Section */}
            <div>
                <div className = " text-white leading-6 font-body font-bold text-2xl" >
                    All games
                </div>
            </div>

        </div>
    )
}
export default Games