import Header from "../../components/header"
import Image from 'next/image'
import AxieinfinityOriginCard from './../../../public/Images/Card.png'

function AccountManagement() {
    return (
        <div className="bg-gray-800">
            <div>
                <Header />
            </div>
            <div className="bg-gray-700 pt-16 ">
                <div className="max-w-7xl mx-auto py-6 px-2 md:px-6 lg:px-8">
                    <div className="md:flex items-center space-x-2 justify-between px-4 md:px-6 lg:px-12">
                        <h1 className="flex-0 text-3xl mb-0 font-bold text-white"> Hi, Zerubabel </h1>
                        <div className="flex flex-wrap space-x-4">
                            <button className="my-2 cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                            px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                            focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                            bg-gray-600 hover:bg-gray-700 active:bg-gray-800"> Withdraw </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-8 mx-20">
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-white">Balance</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-8">
                        <div className="col-span-1 p-6 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <p className="leading-6 font-body mb-6 text-3xl text-white ">$0.00</p>
                            <div className="flex items-center">
                                <img src="https://www.lootrush.com/images/icons/USD.svg" className="mr-2" alt="USD Icon" />
                                <p className="leading-6 font-body font-mono m-0 text-white">USD</p>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <p className="leading-6 font-body mb-6 text-3xl text-white">0 SLP</p>
                            <div className="flex items-center">
                                <img src="https://www.lootrush.com/images/icons/SLP.png" className="mr-2" alt="SLP Icon" />
                                <p className="leading-6 font-body font-mono m-0 text-white">SLP</p>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <p className="leading-6 font-body mb-6 text-3xl text-white">0 AXS</p>
                            <div className="flex items-center">
                                <img src="https://www.lootrush.com/images/icons/USD.svg" className="mr-2" alt="USD Icon" />
                                <p className="leading-6 font-body font-mono m-0 text-white">AXS</p>
                            </div>
                        </div>
                        <div className="col-span-1 p-6 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <p className="leading-6 font-body mb-6 text-3xl text-white">0 DEC</p>
                            <div className="flex items-center">
                                <img src="https://www.lootrush.com/images/icons/DEC.png" className="mr-2" alt="DEC Icon" />
                                <p className="leading-6 font-body font-mono m-0 text-white">DEC</p>
                            </div></div><div className="col-span-1 p-6 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <p className="leading-6 font-body mb-6 text-3xl text-white">0 WETH</p>
                            <div className="flex items-center">
                                <img src="https://www.lootrush.com/images/icons/USD.svg" className="mr-2" alt="USD Icon" />
                                <p className="leading-6 font-body font-mono m-0 text-white">WETH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mx-20">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-white ">Your games</h2>
                </div>

                <div className="md:grid grid-cols-3 gap-4 my-8">
                    <a className="flex rounded-xl hover:no-underline bg-gray-700 shadow-xl"
                        href="/account-management/contracts/77478634-6c20-4482-998d-c4079c2071ca">
                        <div className="flex flex-1">
                            <div className="flex-0 cursor-pointer p-4">
                                <div className="h-auto w-24 flex-shrink-0">
                                    <Image className="h-auto w-24" src= {AxieinfinityOriginCard} alt="Game Logo" />
                                </div>
                            </div>
                            <div className="flex-wrap flex-1 py-4">
                                <div className="font-bold text-white text-xl mb-1">Axie Infinity</div>
                                <div className="whitespace-wrap mb-4">
                                    <div className="text-base text-muted">Plant Double Aqua</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-0 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-gray-500 w-6 h-6">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>



            <div className="max-w-7xl mx-auto py-6 px-2 md:px-6 lg:px-8">
                <div className="relative px-4 md:px-6 lg:px-12">
                    <div className="my-8">
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-white ">Your games</h2>
                    </div>
                    <div className="mb-8 py-24 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-white leading-6 font-body font-bold m-0 text-2xl mb-6">No active contracts</p>
                            <p className="leading-6 font-body text-gray-400 w-72">Get your first NFTs to begin playing a game with us and earn tokens.</p>
                            <a role="button" className="cursor-pointer flex items-center font-body font-bold 
                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition 
                            focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                            bg-violet-500 hover:bg-violet-600 active:bg-violet-700" href="/games/axie-infinity">Start now</a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-white ">Your listed NFTs</h2>
                    </div>
                    <div className="mb-8 py-24 bg-gray-700 rounded-md flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-white leading-6 font-body font-bold m-0 text-2xl mb-6">No NFTs listed</p>
                            <p className="leading-6 font-body text-gray-400 w-72">Do you own NFTs? List them on our platform and earn tokens without work.</p>
                            <a role="button" className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                                        px-4 py-2 text-base rounded-lg pointer-events-none cursor-not-allowed opacity-75 
                                        border border-transparent shadow transition focus:outline-none hover:no-underline 
                                        text-white hover:text-white active:text-white bg-violet-500 hover:bg-violet-600 
                                        active:bg-violet-700">List an NFT</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccountManagement