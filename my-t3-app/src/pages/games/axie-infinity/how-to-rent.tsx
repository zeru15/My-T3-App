import Header from "../../../components/header"
import Image from 'next/image'
import AxieinfinityOriginCard from './../../../../public/Images/Card.png'
import One from './../../../../public/Images/1.png'
import Two from './../../../../public/Images/2.png'
import Three from './../../../../public/Images/3.png'
import Four from './../../../../public/Images/4.png'
import Footer from "../../../components/footer"
import { RentSteps } from "./../../../Data/RentSteps"
import Link from "next/link"

function HowToRent() {
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

                <div className="relative font-bold text-lg text-white pb-8  ">
                    <span className="ml-36 pb-4 hover:border-b-2 active:border-b-2"><Link href="/games/axie-infinity"><a> Teams </a></Link></span>
                    <span className="ml-8 pb-4 hover:border-b-2 active:border-b-2 "><Link href="/games/axie-infinity/how-to-earn-tokens"><a> How to earn tokens </a></Link></span>
                    <span className="ml-8 pb-4 hover:border-b-2 active:border-b-2 "><Link href="/games/axie-infinity/how-to-rent"><a> How to rent </a></Link></span>
                </div>
            </div>


            <div className="max-w-7xl mx-auto py-6 px-2 md:px-6 lg:px-8">
                <div className="relative px-2 md:px-6 lg:px-12">
                    <h1 className="mt-8 text-white text-2xl font-bold">How to rent a team?</h1>
                    <div className="flex flex-col gap-5 my-8">

                        {RentSteps.map((rentSteps) => {
                            return (
                                <div className="relative pl-16 md:pl-0">
                                    <div className="absolute text-9xl -left-0 md:-left-16 top-4 font-bold text-gray-800 ml-2" >
                                        {rentSteps.id}
                                    </div>
                                    <div className="relative flex flex-1 flex-col md:flex-row bg-gray-700 rounded-lg shadow-2xl">
                                        <div className="flex flex-col flex-1 p-6 pl-10 gap-3 justify-center">
                                            <h3 className="text-white text-2xl font-bold ">{rentSteps.title}</h3>
                                            <p className="text-gray-400 m-0">
                                                {rentSteps.description}
                                            </p>
                                        </div>
                                        <div>
                                            <span >
                                                <Image alt="Join game" src={rentSteps.img} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default HowToRent