import Footer from "../../../components/footer"
import Header from "../../../components/header"
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import { Teams } from "../../../Data/Teams"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AxieinfinityOriginCard from './../../../../public/Images/Card.png'
import AxieFilter from "../../../components/games/axiefilter"
import Link from "next/link"



function AxieInfinity() {




    return (
        <div className="bg-gray-900">
            <div className="mb-16">
                <Header />
            </div>

            <div className="relative shadow-sm py-12">
                <div className="absolute inset-0">
                    <div className=" Banner h-full w-full object-cover 
                    bg-[url('/Banner.png')] 
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



            <div className="max-w-7xl mx-auto py-6 px-2 md:px-6 lg:px-8 mt-8">
                <div className="relative px-2 md:px-6 lg:px-12">


                    <div className="pb-2">
                        <div className="flex flex-1 mt-4 items-center justify-between">
                            <h2 className="text-md text-white "> Select your team </h2>
                        </div>

                        <AxieFilter/>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-12">
                            {Teams.map((teams, index) => {

                                let [isOpen, setIsOpen] = useState(false)

                                function closeModal() {
                                    setIsOpen(false)
                                }

                                function openModal() {
                                    setIsOpen(true)
                                }

                                return (
                                    <div key={index}>
                                        <div className="rounded-xl p-[1px] my-0 transition cursor-pointer col-span-1" >
                                            <div className="relative flex p-6 flex-col h-full rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                                                <div className="flex-1 flex flex-col">
                                                    <div className="flex items-center space-x-1 rounded-t-xl pb-6 border-b border-gray-600">
                                                        <div className="flex-1">
                                                            <div className="text-center">
                                                                <img src={teams.icon1}
                                                                    className="w-full h-auto mb-2 axie-img" alt="Beast Icon" />
                                                                <div className="flex items-center justify-center text-white text-sm">
                                                                    <img src={"https://www.lootrush.com/images/icons/beast.svg"} alt="Beast Icon" className="mr-2" />
                                                                    {teams.name1}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-center">
                                                                <img src={teams.icon2} className="w-full h-auto mb-2 axie-img" alt="Plant Icon" />
                                                                <div className="flex items-center justify-center text-white text-sm">
                                                                    <img src="https://www.lootrush.com/images/icons/plant.png" alt="Plant Icon" className="w-4 h-4 mr-2" />
                                                                    {teams.name2}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-center">
                                                                <img src={teams.icon3} className="w-full h-auto mb-2 axie-img" alt="Bird Icon" />
                                                                <div className="flex items-center justify-center text-white text-sm">
                                                                    <img src="https://www.lootrush.com/images/icons/bird.png" alt="Bird Icon" className="w-4 h-4 mr-2" />
                                                                    {teams.name3}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 flex flex-col flex-1 justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex flex-row gap-2">
                                                                <div className="rounded-md inline-flex self-start px-2 text-sm bg-[#3DFFB9] text-[#264345]">
                                                                    Origin Compatible
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center space-x-4 mt-4">
                                                                <div className="flex items-center text-white mb-0 text-lg">
                                                                    <img src="https://www.lootrush.com/images/icons/USD.svg" className="inline-block w-6 h-auto mr-2" alt="SLP icon" />
                                                                    {teams.amount}
                                                                    <span className="text-muted text-base">&nbsp;/entry fee</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center text-white space-x-4 mt-4">
                                                                <div className="flex items-center mb-0 text-lg">
                                                                    <img src="https://www.lootrush.com/images/icons/slp.png" className="inline-block w-6 h-auto mr-2" alt="SLP icon" />
                                                                    30% SLP
                                                                    <span className="text-muted text-base">&nbsp;/token fee</span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4">
                                                                <div className="flex text-white items-center space-x-4">
                                                                    <h3 className="text-xl mb-2">{teams.name}</h3>
                                                                </div>
                                                                <div className="leading-6 font-body text-gray-400 font-sans m-0 mb-2 overflow-hidden text-ellipsis text-sm">
                                                                    {teams.description}
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-2 uppercase">
                                                                <div className="flex text-white items-center" title="571-900 Victory Stars">
                                                                    <img src="https://www.lootrush.com/images/icons/mmr-white.svg" className="inline-block text-white" alt="Victory Stars" title="571-900 Victory Stars" />
                                                                    <span className="text-sm">571-900 VS</span>
                                                                </div>
                                                                <div className="flex text-white items-center">
                                                                    <img src="https://www.lootrush.com/images/icons/energy.svg" className="inline-block text-white" alt="Stamina" />
                                                                    <span className="text-sm">20 Stamina</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <button onClick={openModal} role="button" className="flex-0 w-full cursor-pointer flex items-center font-body font-bold 
                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                                                            px-28 py-2 text-sm rounded-lg border border-transparent shadow transition focus:outline-none 
                                                            hover:no-underline text-white hover:text-white active:text-white bg-purple-500 
                                                            hover:bg-[purple]-600 active:bg-purple-700">
                                                                    {teams.button}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div>
                                            <Transition appear show={isOpen} as={Fragment}>
                                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                                    </Transition.Child>

                                                    <div className="fixed inset-0 overflow-y-auto">
                                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-out duration-300"
                                                                enterFrom="opacity-0 scale-95"
                                                                enterTo="opacity-100 scale-100"
                                                                leave="ease-in duration-200"
                                                                leaveFrom="opacity-100 scale-100"
                                                                leaveTo="opacity-0 scale-95"
                                                            >
                                                                <Dialog.Panel className="w-full max-w-6xl mt-16 transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                                                    <div className="md:grid grid-cols-3">
                                                                        <div className="col-span-2">
                                                                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                                                                <div className="col-span-3 flex items-start justify-center">
                                                                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex items-center 
                                                                justify-center font-body select-none relative whitespace-nowrap align-middle 
                                                                outline-0 w-auto p-2 rounded-md shadow border border-transparent text-white 
                                                                bg-gray-600">
                                                                                        <img src={teams.icon1}
                                                                                            className="w-full h-auto" alt="Reptile Icon" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-span-9">
                                                                                    <div className="flex items-center justify-center text-white bg-gray-600 rounded-md 
                                                                        p-2 inline-flex self-start mb-4 text-md">
                                                                                        <img src="https://www.lootrush.com/images/icons/reptile.png" alt="Reptile Icon"
                                                                                            className="w-4 h-4 mr-2" />
                                                                                        {teams.name1}
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                                                                                            Cards
                                                                                        </div>
                                                                                        <div className="flex flex-wrap">
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                        rounded-md inline-flex items-center justify-center font-body select-none 
                                                                        relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                        rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Indian Star
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                        rounded-md inline-flex items-center justify-center font-body select-none relative 
                                                                        whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg 
                                                                        shadow border border-transparent text-white bg-gray-600">
                                                                                                Kotaro
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                            rounded-md inline-flex items-center justify-center font-body select-none 
                                                                            relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                            rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Scaly Spoon
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                                rounded-md inline-flex items-center justify-center font-body select-none 
                                                                                relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                                rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Tiny Dino
                                                                                            </div><div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                        rounded-md inline-flex items-center justify-center font-body select-none relative 
                                                                        whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow 
                                                                        border border-transparent text-white bg-gray-600">
                                                                                                Pogona or Friezard
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                            rounded-md inline-flex items-center justify-center font-body select-none relative 
                                                                            whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow 
                                                                            border border-transparent text-white bg-gray-600">
                                                                                                Scar or Gecko
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="leading-6 font-body text-md text-white ">
                                                                                        {teams.description1}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                                                                <div className="col-span-3 flex items-start justify-center">
                                                                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex items-center 
                                                                justify-center font-body select-none relative whitespace-nowrap align-middle 
                                                                outline-0 w-auto p-2 rounded-md shadow border border-transparent text-white bg-gray-600">
                                                                                        <img src={teams.icon2}
                                                                                            className="w-full h-auto" alt="Mech Icon" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-span-9">
                                                                                    <div className="flex items-center justify-center text-white bg-gray-600 rounded-md p-2 
                                                                        inline-flex self-start mb-4 text-md">
                                                                                        <img src="https://www.lootrush.com/images/icons/mech.png" alt="Mech Icon"
                                                                                            className="w-4 h-4 mr-2" />
                                                                                        {teams.name2}
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                                                                                            Cards
                                                                                        </div>
                                                                                        <div className="flex flex-wrap">
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                                        rounded-md inline-flex items-center justify-center font-body select-none 
                                                                                        relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                                        rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Imp
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                                            rounded-md inline-flex items-center justify-center font-body select-none 
                                                                                            relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                                            rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Nut Cracker
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 
                                                                                                mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                                                px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                                                bg-gray-600">
                                                                                                Nut Cracker
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                    my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                    select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                                                    px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                                                    bg-gray-600">
                                                                                                Ronin
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                        my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                        select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                                                        px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                                                        bg-gray-600">
                                                                                                Nut Cracker
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                            my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                            select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                                                            px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                                                            bg-gray-600">
                                                                                                Chubby
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="leading-6 font-body text-md text-white ">
                                                                                        {teams.description2}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                                                                <div className="col-span-3 flex items-start justify-center">
                                                                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex items-center 
                                                                justify-center font-body select-none relative whitespace-nowrap align-middle 
                                                                outline-0 w-auto p-2 rounded-md shadow border border-transparent text-white 
                                                                bg-gray-600">
                                                                                        <img src={teams.icon3}
                                                                                            className="w-full h-auto" alt="Plant Icon" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-span-9">
                                                                                    <div className="flex items-center justify-center text-white bg-gray-600 rounded-md p-2 
                                                                        inline-flex self-start mb-4 text-md">
                                                                                        <img src="https://www.lootrush.com/images/icons/plant.png" alt="Plant Icon"
                                                                                            className="w-4 h-4 mr-2" />
                                                                                        {teams.name3}
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                                                                                            Cards
                                                                                        </div>
                                                                                        <div className="flex flex-wrap">
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md 
                                                                        inline-flex items-center justify-center font-body select-none relative whitespace-nowrap 
                                                                        align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                        text-white bg-gray-600">
                                                                                                Sandal
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md 
                                                                            inline-flex items-center justify-center font-body select-none relative whitespace-nowrap 
                                                                            align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                            text-white bg-gray-600">
                                                                                                Cattail
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md 
                                                                                inline-flex items-center justify-center font-body select-none relative whitespace-nowrap 
                                                                                align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                                text-white bg-gray-600">
                                                                                                Serious
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md inline-flex 
                                                                        items-center justify-center font-body select-none relative whitespace-nowrap align-middle outline-0 
                                                                        w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                                                                Beech
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md 
                                                                            inline-flex items-center justify-center font-body select-none relative whitespace-nowrap 
                                                                            align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                            text-white bg-gray-600">
                                                                                                Papi
                                                                                            </div>
                                                                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 rounded-md 
                                                                                inline-flex items-center justify-center font-body select-none relative whitespace-nowrap 
                                                                                align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                                text-white bg-gray-600">
                                                                                                Plant Ear
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="leading-6 font-body text-md text-white ">
                                                                                        {teams.description3}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="md:order-last p-6 bg-gray-700 sm:rounded-none md:rounded-r-xl">
                                                                            <div className="flex flex-col gap-4 mb-4">
                                                                                <div>
                                                                                    <div className="flex items-center space-x-4">
                                                                                        <h3 className="text-xl mb-2 text-white ">God Mech Reflectile</h3>
                                                                                    </div>
                                                                                    <div className="leading-6 font-body text-gray-400 font-sans m-0 mb-2 
                                                                    overflow-hidden text-ellipsis text-sm">
                                                                                        {teams.description}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-row gap-2 flex-wrap">
                                                                                    <div className="rounded-md inline-flex self-start px-2 text-sm bg-[#3DFFB9] 
                                                                            text-[#264345]">
                                                                                        Origin Compatible
                                                                                    </div>
                                                                                    <div className="rounded-md uppercase inline-flex self-start px-2 text-sm 
                                                                                bg-gray-600 text-gray-300">
                                                                                        {teams.tag}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex gap-2 uppercase">
                                                                                    <div className="flex items-center" title="1500-2000 Victory Stars">
                                                                                        <img src="https://www.lootrush.com/images/icons/mmr-white.svg"
                                                                                            className="inline-block text-white" alt="Victory Stars" title="1500-2000 Victory Stars" />
                                                                                        <span className="text-sm text-white">
                                                                                            1500-2000 VS
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-8 mb-4">
                                                                                <div className="leading-6 font-body text-lg font-bold uppercase text-white">
                                                                                    Payment
                                                                                </div>
                                                                                <div data-product-fee="true" className="flex flex-col gap-2">
                                                                                    <div className="flex items-center">
                                                                                        <div className="flex items-center text-lg text-white ">
                                                                                            <img src="https://www.lootrush.com/images/icons/USD.png" alt="USD Icon"
                                                                                                className="inline-block w-6 h-auto mr-2" />
                                                                                            {teams.amount}
                                                                                            <span className="text-muted text-base">&nbsp;/entry fee</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex items-center">
                                                                                        <a className="flex items-center text-lg text-white hover:text-white hover:decoration-transparent"
                                                                                            href="https://www.lootrush.com/games/axie-infinity/how-to-rent">
                                                                                            <img src="https://www.lootrush.com/images/icons/AXS.png" alt="AXS Icon"
                                                                                                className="inline-block w-6 h-auto mr-2" />
                                                                                            30%
                                                                                            <span className="text-muted text-base mr-2">&nbsp;/token fee</span>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                                                                className="w-4 text-muted">
                                                                                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="flex items-center">
                                                                                        <a className="flex items-center text-lg text-white hover:text-white 
                                                                    hover:decoration-transparent"
                                                                                            href="https://www.lootrush.com/games/axie-infinity/how-to-earn-tokens">
                                                                                            <img alt="Runes And Charms icon" src="https://www.lootrush.com/images/icons/runes.png"
                                                                                                className="mr-2 w-6 h-auto" />
                                                                                            70%
                                                                                            <span className="text-muted text-base mr-2">&nbsp;/item sales fees</span>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                                                                className="w-4 text-muted">
                                                                                                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex justify-between items-center mb-2">
                                                                                <label className="block font-body text-gray-400 text-base"> </label>
                                                                            </div>
                                                                            <input name="promoCode" type="text" placeholder="Add promotion code"
                                                                                className="my-4 text-gray-200 bg-gray-700 border border-gray-500 focus:bg-gray-800 
                                                            focus:ring-gray-400 focus:border-gray-400 block w-full placeholder:text-gray-500 
                                                            rounded-md border-gray-600 px-4 py-2 text-base"/>
                                                                            <div className="flex flex-col gap-3">
                                                                                <button role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                                    select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                                    px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                                                                    focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                                                    bg-purple-500 hover:bg-purple-600 active:bg-purple-700">
                                                                                    Confirm
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="mt-4">
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 
                                                        px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none 
                                                        focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                            onClick={closeModal}
                                                                        >
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default AxieInfinity




