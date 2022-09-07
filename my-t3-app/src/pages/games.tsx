import Link from "next/link"
import Footer from "../components/footer"
import Header from "../components/header"

function Games() {
    return (
        <div className = " bg-gray-800 ">

            {/* Header Section */}
            <Header />
            
            {/* Upper Section  */}
            <div>
                <div className = "">
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
                            <a className="text-current hover:text-current hover:cursor-pointer hover:underline "> axieinfinity.com </a>
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
            </div>


            {/* Lower Section */}
            <div className="pb-12 ">
                <div className = " text-white leading-6 font-body font-bold text-2xl m-10" >
                    All games
                </div>

                <div className ="mt-6 mx-auto max-w-md grid gap-3 md:gap-4 grid-cols-2 
                sm:max-w-lg px-2 md:px-6 lg:px-8 lg:grid-cols-4 lg:max-w-7xl">
                    <div className ="relative flex flex-col overflow-hidden translate 
                    transition cursor-pointer hover:scale-105 active:scale-95">
                        <a>
                            <img src ="https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginCard.png" className="rounded-lg shadow-lg" alt = "Axie Infinity Promo Image" />
                        </a>
                        <div className = "py-2">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                            px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                            focus:outline-none hover:no-underline text-black hover:text-black active:text-black 
                            bg-white hover:bg-gray-200 active:bg-gray-300">
                                <span className="text-xl"> Play now </span>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/gods%20unchained.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/thetan%20arena.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/mir4.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/sorare.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/zed.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/crypto%20kitties.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/nba%20top%20shot.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/illuvium.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/star%20atlas.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/blankos.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className ="absolute right-3 top-3">
                            <button className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto
                             p-2 rounded-lg border border-transparent shadow transition 
                             focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                             bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                <img src = "https://www.lootrush.com/images/icons/add-alert.svg" className="w-6 h-6" alt = "Gods Unchained Poster" />
                            </button>
                        </div>
                        <div className="shadow-lg">
                            <img src = "https://www.lootrush.com/images/ember%20sword.png" className="rounded-t-lg" alt = "Gods Unchained Promo Image" />
                            <div className="bg-gray-700 rounded-b-lg py-2 px-4 text-center flex flex-1 items-center justify-center">
                                <p className = "leading-6 text-sm font-body m-0" > Unavailable on LootRush </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer/>
            </div>

        </div>
    )
}
export default Games