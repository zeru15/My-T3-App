import Footer from "../components/footer"
import Header from "../components/header"

function About() {
    return (
        <div className="bg-gray-800 ">
            
            <Header />

            <div className="pt-60 text-center mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
                A safe and friendly global crypto-gaming platform
            </div>
            <p className="mx-auto mt-12 max-w-2xl text-lg tracking-tight text-white pb-20">
                We are a global platform for gamers to list and get access to assets (NFTs)
                required to play crypto games. We believe crypto gaming should be friendly,
                affordable, and enjoyable to all. We achieve our mission by removing the financial
                and technical barriers of crypto gaming.
            </p>
            <div className="pb-20 px-2 ">
                <img src="https://www.lootrush.com/images/web-header-about.png" />
            </div>

            <div className="pt-20 mb-20 ">
                <div className="font-display text-3xl tracking-tight text-white sm:text-4xl text-center py-12 ">
                    Board of Directors
                </div>
                <div className="flex " >
                    <div className=" text-center px-20 ">
                        <img src="https://www.lootrush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanderson.a64a8736.png&w=256&q=75" alt="img1" className="w-50 h-50 display-block mr-auto ml-auto" />
                        <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Anderson Ferminiano </p>
                        <p className="text-white leading-6 font-body font-bold text-md mt-8"> Board Member at LootRush </p>
                        <p className="leading-6 font-body text-gray-400 mt-5">CEO at LootRush</p>
                    </div>
                    <div className=" text-center px-20 ">
                        <img src="https://www.lootrush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhenrique.102319a2.png&w=256&q=75" alt="img2" className="w-50 h-50 display-block mr-auto ml-auto " />
                        <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Henrique Dubugras</p>
                        <p className="text-white leading-6 font-body font-bold text-md mt-8"> Board Member at LootRush</p>
                        <p className="leading-6 font-body text-gray-400 mt-5">Founder and Co-CEO at Brex
                            Board Member at MercadoLivre</p>
                    </div>
                    <div className=" text-center px-20 ">
                        <img src="https://www.lootrush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffred.b8682fe6.png&w=256&q=75" alt="img3" className="w-50 h-50 display-block mr-auto ml-auto " />
                        <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Fred Ehrsam </p>
                        <p className="text-white leading-6 font-body font-bold text-md mt-8"> Board Member at LootRush </p>
                        <p className="leading-6 font-body text-gray-400 mt-5">Co-Founder at Paradigm
                            Co-founder and Board Member at Coinbase</p>
                    </div>
                    <div className=" text-center px-20 " >
                        <span><img src="https://www.lootrush.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjohn.2c796528.png&w=256&q=75" alt="img4 " className="w-50 h-50 display-block mr-auto ml-auto " /></span>
                        <p className="text-white leading-6 font-body font-bold text-xl mt-8"> Jonathan Lai </p>
                        <p className="text-white leading-6 font-body font-bold text-md mt-8"> Board Observer at LootRush </p>
                        <p className="leading-6 font-body text-gray-400 mt-5">General Partner at a16z
                            Former PM at Riot</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center font-display text-3xl tracking-tight text-white sm:text-4xl ">
                    What they say about us
                </div>
                <ul className="flex p-20 ">
                    <li className="h-full relative p-12 m-4 rounded-lg bg-gradient-to-b from-[#ED2024]/20 via-gray-700 to-gray-700">
                        <img src="https://www.lootrush.com/_next/static/media/venturebeat.9d2263d6.svg" alt="Venture Beat" className="py-12 pl-4" />
                        <p className="text-3xl text-white"> LootRush aims to bring affordable NFTs to the masses </p>
                        <p className="text-sm mt-6 text-gray-300 text-muted"> By Anushree Dave • May 5, 2022 </p>
                    </li>
                    <li className="h-full relative p-12 m-4 rounded-lg bg-gradient-to-b from-[#F8BF1D]/20 via-gray-700 to-gray-700">
                        <img src="https://www.lootrush.com/_next/static/media/coindesk.c7013721.svg" alt="Coin Desk" className="py-12 pl-4" />
                        <p className="text-3xl text-white"> Paradigm, a16z Back $12M Round for Blockchain Game Platform LootRush </p>
                        <p className="text-sm mt-6 text-gray-300 text-muted"> By William Hicks • May 09, 2022 </p>
                    </li>
                    <li className="h-full relative p-12 m-4 rounded-lg bg-gradient-to-b from-[#5C03CE]/20 via-gray-700 to-gray-700">
                        <img src="https://www.lootrush.com/_next/static/media/yahoo.366cb523.svg" alt="Yahoo" className="py-12 pl-4" />
                        <p className="text-3xl text-white"> Paradigm, a16z Back $12M Round for Blockchain Game Platform LootRush </p>
                        <p className="text-sm mt-6 text-gray-300 text-muted"> By Brandy Betz • May 05, 2022 </p>
                    </li>
                </ul>
            </div>


            <div className=" pb-12 ">
                <div className="text-center font-display text-3xl tracking-tight text-white sm:text-4xl">
                    Meet our Investors
                </div>
                <p className="text-center text-gray-500 font-base mt-4  " >
                    LootRush is backed by some of the world's most prominent tech, gaming, and crypto investors.
                </p>
                <ul className=" grid grid-cols-3 gap-10 m-20 ">
                    <li className="text-white items-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <img src="https://www.lootrush.com/_next/static/media/yc_color.9a150058.svg" alt="Combinator" className="w-50 h-50 display-block mr-auto ml-auto  " />
                    </li>
                    <li className="text-white items-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <img src="https://www.lootrush.com/_next/static/media/paradigm_color.b15f6aa3.svg" alt="Paradigm" className="w-50 h-50 display-block mr-auto ml-auto  " />
                    </li>
                    <li className="text-white items-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <img src="https://www.lootrush.com/_next/static/media/a11z_color.bc49a03c.svg" alt="Andreessen" className="w-50 h-50 display-block mr-auto ml-auto  " />
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            Aleksander & Jeff
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> Axie Infinity </p>
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            Roham Gharegozlou
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> Dapper Labs </p>
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            William Hockey
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> Plaid </p>
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            Alex & Drew
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> The Chainsmokers / Mantis </p>
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            Pedro & Henrique
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> Brex </p>
                    </li>
                    <li className="text-white text-center justify-center text-base rounded-lg 
                    border border-transparent shadow transition focus:outline-none  py-14
                    text-white bg-gray-600 ">
                        <div className="text-2xl font-bold text-white">
                            Vivi Nevo
                        </div>
                        <p className="leading-6 font-body text-gray-400 mt-5"> Former Time Warner </p>
                    </li>
                </ul>
            </div>


            {/* Footer Section */}
            <div>
                <Footer />
            </div>

        </div>
    )
}
export default About