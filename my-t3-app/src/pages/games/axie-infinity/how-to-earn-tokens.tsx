import Header from "../../../components/header"
import Image from 'next/image'
import AxieinfinityOriginCard from './../../../../public/Images/Card.png'
import One from './../../../../public/Images/1.png'
import Two from './../../../../public/Images/2.png'
import Three from './../../../../public/Images/3.png'
import Four from './../../../../public/Images/4.png'
import Footer from "../../../components/footer"
import Link from "next/link"

function HowToEarnToken() {
    return (
        <div className="bg-gray-900">
            <div className="mb-16">
                <Header />
            </div>


            <div className="relative shadow-sm py-12">
                <div className="absolute inset-0">
                    <div className=" Banner h-full w-full object-cover 
                    bg-[url('https://www.lootrush.com/images/games/axie-infinity-origin/AxieinfinityOriginBanner.png')] 
                    bg-no-repeat bg-center bg-cover " ></div>
                    <div className="opacity-50 absolute inset-0 bg-gray-900 "></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900"></div>
                </div>

                <div className="shadow-xl max-w-7xl py-4 mx-auto px-2 md:px-6 lg:px-8">
                    <div className="relative sm:rounded-2xl sm:overflow-hidden">
                        <div className="flex items-center relative p-4 sm:px-6 lg:px-12">
                            <Image src={AxieinfinityOriginCard} className="flex-0 rounded-lg" width="100%" height="150" />
                            <h1 className="text-4xl text-white font-bold ml-5">
                                Axie Infinity: Origin
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="relative font-bold text-lg text-white  ">
                    <span className="ml-36 pb-4 hover:border-b-2 active:border-b-2"><Link href="/games/axie-infinity"><a> Teams </a></Link></span>
                    <span className="ml-8 pb-4 hover:border-b-2 active:border-b-2 "><Link href="/games/axie-infinity/how-to-earn-tokens"><a> How to earn tokens </a></Link></span>
                    <span className="ml-8 pb-4 hover:border-b-2 active:border-b-2 "><Link href="/games/axie-infinity/how-to-rent"><a> How to rent </a></Link></span>
                </div>
            </div>


            <div className="max-w-7xl mx-auto py-6 px-2 md:px-6 lg:px-8">
                <div className="relative px-2 md:px-6 lg:px-12">
                    <div className="flex flex-col gap-5 my-4">
                        <div>
                            <h3 className="mb-2 leading-6 text-white text-2xl font-bold ">Competing, earning and withdrawing tokens on Origin</h3>
                            <p className="m-0 text-muted text-gray-500 ">
                                A summary about how we work regarding tournament/AXS prizes, crafting runes/charms,
                                and SLP withdrawal on Axie Infinity: Origin.</p>
                        </div>
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl p-8 bg-gray-700">
                                <Image src={One} alt="Crafting Rewards" width="80" height="80" />
                                <h5 className="leading-6 text-white text-lg font-bold ">Crafting Rewards</h5>
                                <p className="m-0 text-muted text-gray-300">
                                    We encourage all users to craft runes and charms, and even incentivize with SLP rewards.
                                    On LootRush, you earn SLP bonuses to craft more runes and charms.
                                    For every 7 earned moonshards, you get an extra SLP exclusively to craft runes and charms.
                                </p>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl p-8 bg-gray-700">
                                <Image src={Two} alt="Sell or Use Crafted Charms/Runes" width="80" height="80" />
                                <h5 className="leading-6 text-white text-lg font-bold ">Sell or Use Crafted Charms/Runes</h5>
                                <p className="m-0 text-muted text-gray-300">Runes and charms can be worth hundreds of dollars,
                                    and every rune or charm that is worth more than U$5 can be sold through LootRush.
                                    It's up to you whether you want to equip or sell them. </p>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl p-8 bg-gray-700">
                                <Image src={Three} alt="Compete and earn AXS" width="80" height="80" />
                                <h5 className="leading-6 text-white text-lg font-bold ">Compete and earn AXS</h5>
                                <p className="m-0 text-muted text-gray-300">We take a 30% fee on earned AXS, and you keep the rest.
                                    Climb the leaderboards and earn huge prizes!</p>
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl p-8 bg-gray-700">
                                <Image src={Four} alt="You can withdraw SLP instantly" width="80" height="80" />
                                <h5 className="leading-6 text-white text-lg font-bold ">You can withdraw SLP instantly</h5>
                                <p className="m-0 text-muted text-gray-300">On LootRush, you can can withdraw SLP every day, a day after winning battles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HowToEarnToken