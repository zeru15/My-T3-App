import Link from "next/link"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Header() {

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
        <div className="sticky top-0 z-30">
            {/* Navbar Header Section */}
            < div className="bg-gray-800  border-b border-gray-600 shadow-lg items-center flex justify-between w-full fixed top-0 " >

                {/* Left Side */}
                < div className="flex items-center " >

                    <a href="https://www.lootrush.com"> <img src="https://www.lootrush.com/images/logo.svg" alt="Logo" className="inline-block p-4 ml-12" /> </a>

                    <Link href="#" >
                        <a className="text-white inline-block p-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg "> All Games </a>
                    </Link>
                </div >

                {/* Right Side */}
                < div >
                    <button className="inline-block p-2 mr-4  text-white bg-gray-600 hover:bg-gray-700 rounded-lg active:bg-gray-800 " >
                        Login
                    </button>

                    <button onClick={openModal} className="inline-block p-2 mr-12 bg-violet-500 text-white hover:bg-violet-600 rounded-lg  " >
                        Create Account
                    </button>
                </div >
            </div >

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog  className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900"  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        </div>
    )
}
export default Header