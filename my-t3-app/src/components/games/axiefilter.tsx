import Link from "next/link";
import { Menu } from "@headlessui/react";

function AxieFilter() {
  return (
    <div>
                            <div className="mt-5 flex flex-col lg:flex-row justify-between items-center md:space-x-2">
                                <div className="order-1 md:order-0 flex items-center md:justify-start w-full space-x-3 overflow-auto md:overflow-visible">


                                    <Menu>
                                        <Menu.Button className="text-white ">
                                            <div className="relative my-2 ">
                                                <div className="w-full">
                                                    <div className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center 
                                        w-full px-2.5 py-1.5 text-xs rounded-lg border border-transparent 
                                        shadow transition focus:outline-none hover:no-underline text-white 
                                        hover:text-white active:text-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                        <div className="leading-6 font-body font-bold text-sm mb-0 text-white">
                                                            Victory Stars
                                                        </div>
                                                        <span className="ml-3 inline-flex shrink-0 self-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5" focusable="false">
                                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" >
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Button>
                                        <Menu.Items className="grid display-grid absolute top-1/4 md:top-12 z-10 p-4 left-8 shadow-2xl 
                                    w-screen md:w-64 rounded-xl hover:no-underline bg-gray-700 shadow-xl transform 
                                    scale-100 opacity-100 mt-12 " >
                                            <Menu.Item>
                                                <div role="option"
                                                    className="leading-6 text-sm font-body font-bold text-gray-400 ml-2 mt-2">
                                                    Filter by
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-169" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">
                                                                Trainer
                                                                <span className="text-muted block">0-519 VS</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-169" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">
                                                                Intermediate
                                                                <span className="text-muted block">520-959 VS</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-169" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">
                                                                Advanced
                                                                <span className="text-muted block">960-1479 VS</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-169" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">
                                                                Expert
                                                                <span className="text-muted block">1480-1200 VS</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>

                                    <Menu>
                                        <Menu.Button className="text-white">
                                            <div className="relative my-2">
                                                <div className="w-full" id="headlessui-listbox-button-31" aria-haspopup="true" aria-expanded="false" aria-controls="headlessui-listbox-options-36">
                                                    <div role="button" className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                        px-2.5 py-1.5 text-xs rounded-lg border border-transparent shadow transition 
                                        focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                        bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                        <div className="leading-6 font-body font-bold text-sm mb-0 text-white">Stamina</div>
                                                        <span className="ml-3 inline-flex shrink-0 self-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5" focusable="false">
                                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" >
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Button>
                                        <Menu.Items className="grid display-grid absolute top-1/4 md:top-12 z-10 p-4 left-32 shadow-2xl 
                                    w-screen md:w-64 rounded-xl hover:no-underline bg-gray-700 shadow-xl transform 
                                    scale-100 opacity-100 mt-12 " >
                                            <Menu.Item>
                                                <div role="option"
                                                    className="leading-6 text-sm font-body font-bold text-gray-400 ml-2 mt-2">
                                                    Filter by
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-163" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">20 Stamina</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-163" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">40 Stamina</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-163" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">60 Stamina</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>


                                    <Menu>
                                        <Menu.Button className="text-white">
                                            <div className="relative my-2">
                                                <div className="w-full" id="headlessui-listbox-button-32" aria-haspopup="true" aria-expanded="false" aria-controls="headlessui-listbox-options-37">
                                                    <div role="button" className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                        px-2.5 py-1.5 text-xs rounded-lg border border-transparent shadow transition 
                                        focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                        bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                        <div className="leading-6 font-body font-bold text-sm mb-0 text-white">SLP/day</div>
                                                        <span className="ml-3 inline-flex shrink-0 self-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5" focusable="false">
                                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" >
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Button>
                                        <Menu.Items className="grid display-grid absolute top-1/4 md:top-12 z-10 p-4 left-60 shadow-2xl 
                                    w-screen md:w-64 rounded-xl hover:no-underline bg-gray-700 shadow-xl transform 
                                    scale-100 opacity-100 mt-12 " >
                                            <Menu.Item>
                                                <div role="option"
                                                    className="leading-6 text-sm font-body font-bold text-gray-400 ml-2 mt-2">
                                                    Filter by
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-155" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">0 SLP/day</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-156" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">30 SLP/day</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-156" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">40 SLP/day</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-156" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">60 SLP/day</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-156" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">120 SLP/day</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>

                                    <Menu>
                                        <Menu.Button className="text-white">
                                            <div className="relative my-2">
                                                <div className="w-full" id="headlessui-listbox-button-33" aria-haspopup="true" aria-expanded="false" aria-controls="headlessui-listbox-options-38">
                                                    <div role="button" className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                        px-2.5 py-1.5 text-xs rounded-lg border border-transparent shadow transition 
                                        focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                        bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                        <div className="leading-6 font-body font-bold text-sm mb-0 text-white">Entry Fee</div>
                                                        <span className="ml-3 inline-flex shrink-0 self-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5" focusable="false">
                                                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" >
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Button>
                                        <Menu.Items className="grid display-grid absolute top-1/4 md:top-12 z-10 p-4 left-80 shadow-2xl 
                                    w-screen md:w-64 rounded-xl hover:no-underline bg-gray-700 shadow-xl transform 
                                    scale-100 opacity-100 mt-12 " >
                                            <Menu.Item>
                                                <div role="option"
                                                    className="leading-6 text-sm font-body font-bold text-gray-400 ml-2 mt-2">
                                                    Filter by
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-120" role="option" >
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">Free</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-139" role="option" >
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">$0.99</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-140" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">$4.99</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-141" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">$24.99</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-142" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">$49.99</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"
                                                            id="headlessui-listbox-option-143" role="option">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">$74.99</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Menu>




                                </div>


                            </div>

                            <div className="mt-4">
                                <div className="flex items-center text-white justify-between">
                                    <div>Showing 6 of 146 teams</div>
                                    <Menu>
                                        <Menu.Button className="text-white">
                                            <div>
                                                <div className="relative">
                                                    <div className="w-full" id="headlessui-listbox-button-34" aria-haspopup="true" aria-expanded="false" aria-controls="headlessui-listbox-options-39">
                                                        <div role="button" className="cursor-pointer flex items-center font-body font-bold 
                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                                        px-3 py-2 text-sm leading-4 rounded-lg border border-transparent transition 
                                        bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-30 focus:outline-none 
                                        hover:no-underline text-white hover:text-white active:text-white bg-gray-400">
                                                            <div className="leading-6 font-body text-base mb-0"><b>Sort by</b>&nbsp;<span className="font-normal">Lower entry fee</span>
                                                            </div>
                                                            <span className="ml-3 inline-flex shrink-0 self-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5" focusable="false">
                                                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" >
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Button>
                                        <Menu.Items className="grid display-grid absolute top-1/4 md:top-12 z-10 p-4 right-12 shadow-2xl 
                                    w-screen md:w-64 rounded-xl hover:no-underline bg-gray-700 shadow-xl transform 
                                    scale-100 opacity-100 mt-28 " >
                                            <Menu.Item>
                                                <div role="option" className="leading-6 text-sm font-body font-bold text-gray-400 ml-2 mt-2">
                                                    Sort by
                                                </div>
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"  role="option" aria-selected="true">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">Lower entry fee</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"  role="option" aria-selected="true">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">Higher entry fee</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"  role="option" aria-selected="true">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">Lower Victory Stars</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        className={`${active && 'bg-blue-500'}`}
                                                        href="/account-settings"
                                                    >
                                                        <div className="flex p-2 m-0 rounded-md text-white items-center 
                                                    hover:bg-gray-500 justify-between cursor-pointer"  role="option" aria-selected="true">
                                                            <div className="leading-6 font-body m-0 flex-1 text-left">Higher Victory Stars</div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items >
                                    </Menu>

                                </div>
                            </div>
                        </div>
  );
}

export default AxieFilter;
