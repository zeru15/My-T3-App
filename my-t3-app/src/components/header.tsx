import Link from "next/link"

function Header() {

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

                    <button className="inline-block p-2 mr-12 bg-violet-500 text-white hover:bg-violet-600 rounded-lg  " >
                        Create Account
                    </button>
                </div >
            </div >
        </div>
    )
}
export default Header