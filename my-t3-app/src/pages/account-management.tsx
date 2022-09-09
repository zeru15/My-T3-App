import Header from "../components/header"

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