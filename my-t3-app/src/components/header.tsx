import Link from "next/link"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Header() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    let [isSignUpOpen, setIsSignUpOpen] = useState(false)

    function closeSignUpModal() {
        setIsSignUpOpen(false)
    }

    function openSignUpModal() {
        setIsSignUpOpen(true)
    }

    return (
        <div className="sticky top-0 z-30">
            {/* Navbar Header Section */}
            < div className="bg-gray-800  border-b border-gray-600 shadow-lg 
            items-center flex justify-between w-full fixed top-0 " >

                {/* Left Side */}
                < div className="flex items-center " >

                    <a href="https://www.lootrush.com">
                        <img src="https://www.lootrush.com/images/logo.svg" alt="Logo" className="inline-block p-4 ml-12" />
                    </a>

                    <Link href="#" >
                        <a className="text-white inline-block p-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg ">All Games</a>
                    </Link>
                </div >

                {/* Right Side */}
                < div >
                    <button onClick={openModal} className="inline-block p-2 mr-4 
                    text-white bg-gray-600 hover:bg-gray-700 rounded-lg active:bg-gray-800 " >
                        Login
                    </button>

                    <button onClick={openSignUpModal} className="inline-block p-2 mr-12 bg-violet-500 text-white hover:bg-violet-600 rounded-lg  " >
                        Create Account
                    </button>
                </div >
            </div >

            {/* Login Modal */}
            <div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog className="relative z-10" onClose={closeModal}>
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
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title className="text-4xl  leading-6 text-white text-center pb-8 "  >
                                            Login
                                        </Dialog.Title>
                                        <div className="text-center md:text-left">
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition focus:outline-none 
                                            hover:no-underline text-black hover:text-black active:text-black 
                                            bg-white hover:bg-gray-200 active:bg-gray-300" >
                                                <span className="mr-3 inline-flex shrink-0 self-center">
                                                    <svg aria-hidden="true" focusable="false" className="svg-inline--fa fa-google fa-w-16 fa-1x w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" role="img">
                                                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                Sign in with Google
                                            </button>
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition focus:outline-none 
                                                            hover:no-underline text-black hover:text-black active:text-black 
                                                            bg-white hover:bg-gray-200 active:bg-gray-300">
                                                <span className="mr-3 inline-flex shrink-0 self-center">
                                                    <svg aria-hidden="true" focusable="false" className="svg-inline--fa fa-facebook fa-w-16 fa-1x w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
                                                        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                Sign in with Facebook
                                            </button>
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition focus:outline-none 
                                                                            hover:no-underline text-black hover:text-black active:text-black 
                                                                            bg-white hover:bg-gray-200 active:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 mr-2">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                    </path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                    </path>
                                                </svg>
                                                Sign in with Email
                                            </button>
                                            <button role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition focus:outline-none 
                                                                                            hover:no-underline text-white hover:text-white active:text-white 
                                                                                            bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                Sign up
                                            </button>
                                        </div>




                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>


            {/* Create Account Modal */}
            <div>
                <Transition appear show={isSignUpOpen} as={Fragment}>
                    <Dialog className="relative z-10" onClose={closeSignUpModal}>
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
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title className="text-4xl  leading-6 text-white text-center pb-8 "  >
                                            Sign Up
                                        </Dialog.Title>

                                        <div className="text-center md:text-left">
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition 
                                            focus:outline-none hover:no-underline text-black hover:text-black active:text-black 
                                            bg-white hover:bg-gray-200 active:bg-gray-300" >
                                                <span className="mr-3 inline-flex shrink-0 self-center">
                                                    <svg aria-hidden="true" focusable="false" className="svg-inline--fa fa-google fa-w-16 fa-1x w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" role="img">
                                                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                Sign up with Google
                                            </button>
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition 
                                                            focus:outline-none hover:no-underline text-black hover:text-black active:text-black 
                                                            bg-white hover:bg-gray-200 active:bg-gray-300">
                                                <span className="mr-3 inline-flex shrink-0 self-center">
                                                    <svg aria-hidden="true" focusable="false" className="svg-inline--fa fa-facebook fa-w-16 fa-1x w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">
                                                        <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                Sign up with Facebook
                                            </button>
                                            <button role="button" className="mb-4 cursor-pointer flex items-center font-body font-bold 
                                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition 
                                                                            focus:outline-none hover:no-underline text-black hover:text-black active:text-black 
                                                                            bg-white hover:bg-gray-200 active:bg-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 mr-2">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                                    </path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                                    </path>
                                                </svg>
                                                Sign up with Email
                                            </button>
                                            <p className="leading-6 font-body text-gray-400 text-center text-sm mb-6">
                                                By proceeding, you agree to the Terms and Conditions &amp; Privacy and cookies Policy.
                                            </p>
                                            <button role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                                                            select-none relative whitespace-nowrap align-middle outline-0 justify-center w-full 
                                                                                            px-4 py-2 text-base rounded-lg border border-transparent shadow transition 
                                                                                            focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                                                                            bg-gray-600 hover:bg-gray-700 active:bg-gray-800">
                                                Already have an account?
                                            </button>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeSignUpModal}
                                            >
                                                Cancel
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
}
export default Header