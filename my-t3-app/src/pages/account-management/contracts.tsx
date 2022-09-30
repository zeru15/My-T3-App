import Header from "../../components/header";
import Footer from "../../components/footer";

function contracts() {
    return (
        <div className="bg-gray-900">qqw                                                                                                        w   w

            <div>
                <Header />
            </div>

            <div className="pt-20 flex mr-20 ml-24 mt-12">

                {/* Left Side */}
                <div className="w-3/4 mr-12">

                    {/* Section One */}
                    <div className="mt-8">
                        <h1 className="text-xl text-white font-bold mb-4">My account</h1>
                        <form className="p-8 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block font-body text-gray-400 text-base">Email</label>
                            </div>
                            <input name="email" type="text" className="text-gray-200 bg-gray-700 border border-gray-500 
                            focus:bg-gray-800 focus:ring-gray-400 focus:border-gray-400 block w-full 
                            placeholder:text-gray-500 rounded-md  px-4 py-2 text-base"
                                value="player+lootrush233013@lootrush.com" />
                            <div className="mt-8">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block font-body text-gray-400 text-base">Password</label>
                                </div>
                                <input name="password" type="text" className="text-gray-200 bg-gray-700 border border-gray-500 
                                    focus:bg-gray-800 focus:ring-primary-400 focus:border-primary-400 block w-full 
                                    placeholder:text-gray-500 rounded-md border-gray-600 px-4 py-2 text-base"
                                    value="LhxpoyZvvwlxgWGx663" />
                            </div>
                        </form>
                    </div>

                    {/* Section Two */}
                    <div>
                        <div>
                            <h1 className="text-xl mt-8 font-bold text-white ">Start playing</h1>
                            <h2 className="text-base font-light mb-4 text-white ">
                                Use the email and password to sign in to Axie Infinity</h2>
                            <div className="p-8 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                                <div className="flex-row items-center gap-4 flex">
                                    <a role="button" className="cursor-pointer flex items-center font-body 
                                        font-bold select-none relative whitespace-nowrap align-middle outline-0 
                                        justify-center w-auto p-2 rounded-lg pointer-events-none cursor-not-allowed 
                                        opacity-75 border border-transparent shadow transition focus:outline-none 
                                        hover:no-underline text-white hover:text-white active:text-white bg-gray-600
                                        hover:bg-gray-700 active:bg-gray-800">
                                        <span className="sr-only">Desktop</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6 w-6 m-2" aria-hidden="true" fill="currentColor">
                                            <path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z"></path>
                                        </svg>
                                    </a>
                                    <div className="grow">
                                        <p className="leading-6 text-sm font-body font-bold mb-0 text-white ">Desktop</p>
                                        <p className="leading-6 text-sm font-body text-gray-400 mb-0">
                                            Download the game on the official website</p>
                                    </div>
                                    <a role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center 
                                                        w-auto px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                                                        focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                                        bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
                                        target="_blank" href="https://welcome.skymavis.com/download/">
                                        Download
                                                            </a>
                                </div>
                            </div>
                            <div className="p-8 mt-4 rounded-xl hover:no-underline bg-gray-700 shadow-xl">
                                <div className="flex-row items-center gap-4 flex">
                                    <a role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                                    select-none relative whitespace-nowrap align-middle outline-0 justify-center 
                                                                    w-auto p-2 rounded-lg pointer-events-none cursor-not-allowed opacity-75 
                                                                    border border-transparent shadow transition focus:outline-none hover:no-underline 
                                                                    text-white hover:text-white active:text-white bg-gray-600 hover:bg-gray-700 
                                                                    active:bg-gray-800">
                                        <span className="sr-only">Mobile</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6 m-2" aria-hidden="true" fill="currentColor">
                                            <path d="M320 0H64C37.49 0 16 21.49 16 48v416C16 490.5 37.49 512 64 512h256c26.51 0 48-21.49 48-48v-416C368 21.49 346.5 0 320 0zM192 464c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 464 192 464z">
                                            </path>
                                        </svg>
                                    </a>
                                    <div className="grow">
                                        <p className="leading-6 text-sm font-body font-bold mb-0 text-white ">Mobile</p>
                                        <p className="leading-6 text-sm font-body text-gray-400 mb-0">
                                            If you want to play on mobile devices, you can also sign in to the
                                            marketplace with these credentials to get your mobile QR code
                                                                                        </p>
                                    </div>
                                    <a role="button" className="cursor-pointer flex items-center font-body font-bold 
                                                                                        select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto 
                                                                                        px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                                                                                        focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                                                                        bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
                                        target="_blank" href="https://marketplace.axieinfinity.com/">
                                        Get your QR code
                                                                                            </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Three */}
                    <div>
                        <div className="flex flex-col gap-5 my-4">
                            <div>
                                <h3 className="mb-2 leading-6 text-white text-xl font-bold ">
                                    Competing, earning and withdrawing tokens on Origin
                                </h3>
                                <p className="m-0 text-muted text-gray-400">
                                    A summary about how we work regarding tournament/AXS prizes,
                                    crafting runes/charms, and SLP withdrawal on Axie Infinity: Origin.
                                    </p>
                            </div>
                            <div className="flex gap-4 flex-col md:flex-col ">
                                <div className="flex flex-1 flex-col items-start gap-3 
                                        rounded-2xl p-8 bg-gray-700">
                                    <img src="https://www.lootrush.com/images/pages/how-it-works/axie-infinity/1.png"
                                        alt="Crafting Rewards" width="80" height="80" />
                                    <h5 className="leading-6 text-white text-xl font-bold ">Crafting Rewards</h5>
                                    <p className="m-0 text-muted text-gray-400">
                                        We encourage all users to craft runes and charms,
                                        and even incentivize with SLP rewards.
                                        On LootRush, you earn SLP bonuses to craft more runes and charms.
                                        For every 7 earned moonshards, you get an extra SLP exclusively to
                                        craft runes and charms.
                                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl 
                                                    p-8 bg-gray-700">
                                    <img src="https://www.lootrush.com/images/pages/how-it-works/axie-infinity/2.png"
                                        alt="Sell or Use Crafted Charms/Runes" width="80" height="80" />
                                    <h5 className="leading-6 text-white text-xl font-bold">Sell or Use Crafted Charms/Runes</h5>
                                    <p className="m-0 text-muted text-gray-400">
                                        Runes and charms can be worth hundreds of dollars,
                                        and every rune or charm that is worth more than U$5
                                        can be sold through LootRush. It's up to you whether you
                                        want to equip or sell them.
                                                            </p>
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-3 
                                                            rounded-2xl p-8 bg-gray-700">
                                    <img src="https://www.lootrush.com/images/pages/how-it-works/axie-infinity/3.png"
                                        alt="Compete and earn AXS" width="80" height="80" />
                                    <h5 className="leading-6 text-white -text-xl font-bold ">Compete and earn AXS</h5>
                                    <p className="m-0 text-muted text-gray-400 ">
                                        We take a 30% fee on earned AXS,
                                        and you keep the rest. Climb the leaderboards and earn huge prizes!
                                                                        </p>
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl 
                                                                        p-8 bg-gray-700">
                                    <img src="https://www.lootrush.com/images/pages/how-it-works/axie-infinity/4.png"
                                        alt="You can withdraw SLP instantly" width="80" height="80" />
                                    <h5 className="leading-6 text-white text-xl font-bold ">You can withdraw SLP instantly</h5>
                                    <p className="m-0 text-muted text-gray-400">
                                        On LootRush, you can can withdraw SLP every day,
                                        a day after winning battles.
                                                                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Four */}
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4 pt-8 capitalize text-white ">team</h1>
                        </div>
                        <div className="col-span-2">
                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                <div className="col-span-3 flex items-start justify-center">
                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex items-center 
                                    justify-center font-body select-none relative whitespace-nowrap align-middle 
                                    outline-0 w-auto p-2 rounded-md shadow border border-transparent text-white 
                                    bg-gray-600">
                                        <img src="https://axiecdn.axieinfinity.com/axies/6543709/axie/axie-full-transparent.png"
                                            className="w-full h-auto" alt="Plant Icon" />
                                    </div>
                                </div>
                                <div className="col-span-9">
                                    <div className="flex items-center justify-center text-white bg-gray-600 
                                                rounded-md p-2 inline-flex self-start mb-4 text-md">
                                        <img src="https://www.lootrush.com/images/icons/plant.png"
                                            alt="Plant Icon" className="w-4 h-4 mr-2" />
                                                Plant
                                                </div>
                                    <div>
                                        <p className="text-xs uppercase text-gray-500 font-bold tracking-wide mb-1">
                                            Cards
                                                        </p>
                                        <div className="flex flex-wrap">
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                    rounded-md inline-flex items-center justify-center font-body select-none 
                                                    relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                    rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                Cattail Slap
                                                        </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 
                                                        mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                        select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                        px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                        bg-gray-600">
                                                October Treat
                                                            </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 
                                                            mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                            select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                            px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                            bg-gray-600">
                                                Vegetal Bite
                                                                </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 
                                                                r-2 rounded-md inline-flex items-center justify-center font-body 
                                                                select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                bg-gray-600">
                                                Wooden Stab
                                                                    </div>
                                        </div>
                                    </div>
                                    <p className="leading-6 font-body text-md text-white ">
                                        This is your frontline Plant tank axie that despite being a tank,
                                        also can deal damage with Wooden Stab. Body parts include:
                                        Serious, Beech, Pumpkin, Cattail.
                                                                        </p>
                                </div>
                            </div>
                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                <div className="col-span-3 flex items-start justify-center">
                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex 
                                                                                items-center justify-center font-body select-none relative 
                                                                                whitespace-nowrap align-middle outline-0 w-auto p-2 rounded-md 
                                                                                shadow border border-transparent text-white bg-gray-600">
                                        <img src="https://axiecdn.axieinfinity.com/axies/9094662/axie/axie-full-transparent.png"
                                            className="w-full h-auto" alt="Aqua Icon" />
                                    </div>
                                </div>
                                <div className="col-span-9">
                                    <div className="flex items-center justify-center text-white bg-gray-600 
                                                                                            rounded-md p-2 inline-flex self-start mb-4 text-md">
                                        <img src="https://www.lootrush.com/images/icons/aqua.svg" alt="Aqua Icon"
                                            className="mr-2" />
                                                Aqua
                                                                                                    </div>
                                    <div>
                                        <p className="text-xs uppercase text-gray-500 font-bold 
                                                                                                        tracking-wide mb-1">
                                            Cards
                                                                                                            </p>
                                        <div className="flex flex-wrap">
                                            <div role="Label" className="flex-shrink-0 tracking-wide 
                                                                                                                px-2 py-1 my-1 mr-2 rounded-md inline-flex items-center 
                                                                                                                justify-center font-body select-none relative whitespace-nowrap 
                                                                                                                align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg 
                                                                                                                shadow border border-transparent text-white bg-gray-600">
                                                Crimson Water
                                                                                                                    </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 
                                                                                                                    py-1 my-1 mr-2 rounded-md inline-flex items-center justify-center 
                                                                                                                    font-body select-none relative whitespace-nowrap align-middle outline-0
                                                                                                                    w-auto px-4 py-2 text-sm rounded-lg shadow border border-transparent 
                                                                                                                    text-white bg-gray-600">
                                                Star Shuriken
                                                                                                                        </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                                        my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                                        select-none relative whitespace-nowrap align-middle outline-0 w-auto 
                                                                                                                        px-4 py-2 text-sm rounded-lg shadow border border-transparent text-white 
                                                                                                                        bg-gray-600">
                                                Swift Escape
                                                                                                                            </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                                            my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                                            select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 
                                                                                                                            py-2 text-sm rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                Upstream Swim
                                                                                                                                </div>
                                        </div>
                                    </div>
                                    <p className="leading-6 font-body text-md text-white ">
                                        This is your midline Aqua axie that can reliably speed past any opposing
                                        axie and damage them down before they make their turn.
                                        Body parts include: Piranha, Shoal Star, Goldfish, Koi.
                                                                                                                                    </p>
                                </div>
                            </div>
                            <div className="md:grid grid-cols-12 gap-6 mx-6 py-6 border-b border-b-gray-700">
                                <div className="col-span-3 flex items-start justify-center">
                                    <div role="Label" className="px-1 py-1 w-full mb-4 inline-flex items-center 
                                                                                                                                            justify-center font-body select-none relative whitespace-nowrap align-middle 
                                                                                                                                            outline-0 w-auto p-2 rounded-md shadow border border-transparent text-white 
                                                                                                                                            bg-gray-600">
                                        <img src="https://axiecdn.axieinfinity.com/axies/6349154/axie/axie-full-transparent.png"
                                            className="w-full h-auto" alt="Aqua Icon" />
                                    </div>
                                </div>
                                <div className="col-span-9">
                                    <div className="flex items-center justify-center text-white bg-gray-600 
                                                                                                                                                        rounded-md p-2 inline-flex self-start mb-4 text-md">
                                        <img src="https://www.lootrush.com/images/icons/aqua.svg" alt="Aqua Icon"
                                            className="mr-2" />
                                                        Aqua
                                                                                                                                                                </div>
                                    <div>
                                        <p className="text-xs uppercase text-gray-500 font-bold tracking-wide 
                                                                                                                                                                    mb-1">
                                            Cards
                                                                                                                                                                        </p>
                                        <div className="flex flex-wrap">
                                            <div role="Label" className="flex-shrink-0 tracking-wide 
                                                                                                                                                                            px-2 py-1 my-1 mr-2 rounded-md inline-flex items-center 
                                                                                                                                                                            justify-center font-body select-none relative whitespace-nowrap 
                                                                                                                                                                            align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow 
                                                                                                                                                                            border border-transparent text-white bg-gray-600">
                                                Acrobatic
                                                                                                                                                                                </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 
                                                                                                                                                                                my-1 mr-2 rounded-md inline-flex items-center justify-center font-body 
                                                                                                                                                                                select-none relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 
                                                                                                                                                                                text-sm rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                Crimson Water
                                                                                                                                                                                    </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                                                                                                                                    rounded-md inline-flex items-center justify-center font-body select-none 
                                                                                                                                                                                    relative whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm 
                                                                                                                                                                                    rounded-lg shadow border border-transparent text-white bg-gray-600">
                                                Revenge Arrow
                                                                                                                                                                                        </div>
                                            <div role="Label" className="flex-shrink-0 tracking-wide px-2 py-1 my-1 mr-2 
                                                                                                                                                                                        rounded-md inline-flex items-center justify-center font-body select-none relative 
                                                                                                                                                                                        whitespace-nowrap align-middle outline-0 w-auto px-4 py-2 text-sm rounded-lg shadow 
                                                                                                                                                                                        border border-transparent text-white bg-gray-600">
                                                Tail Slap
                                                                                                                                                                                            </div>
                                        </div>
                                    </div>
                                    <p className="leading-6 font-body text-md text-white ">
                                        This is your backline Aqua axie that can also speed itself up &amp;
                                        generate energy thanks to Nimo. Body parts include: Piranha, Arco,
                                        Risky Beast, Nimo.
                                                                                                                                                                                                </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right Side */}
                <div className="w-1/4">
                    <div className="col-span-3 mt-12 md:mt-0">
                        <div className="flex items-center space-x-4 mb-8">
                            <h3 className="text-xl md:text-3xl mb-0 text-white ">Plant Double Aqua</h3>
                        </div>
                        <p className="leading-6 font-body text-lg font-bold uppercase text-white ">Payment</p>
                        <div className="divide-y divide-gray-700">
                            <div data-product-fee="true" className="flex flex-col gap-2">
                                <div className="flex items-center">
                                    <div className="flex items-center text-lg text-white">
                                        <img src="https://www.lootrush.com/images/icons/USD.svg"
                                            className="inline-block w-6 h-auto mr-2" alt="USD Icon" />
                                            $49.99
                                            <span className="text-muted text-base text-gray-300">&nbsp;/entry fee</span>
                                    </div>
                                </div>
                                <div className="flex items-center text-white">
                                    <a className="flex items-center text-lg text-white 
                                                hover:text-white hover:decoration-transparent"
                                        href="/games/axie-infinity/how-to-rent">
                                        <img src="https://www.lootrush.com/images/icons/SLP.png"
                                            className="inline-block w-6 h-auto mr-2" alt="SLP Icon" />
                                                30% SLP
                                                        <span className="text-muted text-base mr-2 text-gray-300 ">&nbsp;/token fee</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 text-muted">
                                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex items-center text-white">
                                    <a className="flex items-center text-lg text-white hover:text-white 
                                            hover:decoration-transparent"
                                        href="/games/axie-infinity/how-to-earn-tokens">
                                        <img alt="Runes And Charms icon"
                                            src="https://www.lootrush.com/images/icons/runes.png" className="mr-3" />
                                            70%
                                                    <span className="text-muted text-base mr-2 text-gray-300">&nbsp;/item sales fees</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 text-muted">
                                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" >
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="leading-6 font-body text-gray-400 
                             hidden md:flex text-sm items-center m-0 mt-8 mb-4 text-gray-300">
                            Pay the entry fee to start playing with your team.
                            After the first 3 days, pay on a daily or weekly basis
                            the amount of SLP required to keep the account active.
                                                                You keep all the rest of the SLP.</p>
                        <a role="button" className="mt-2 cursor-pointer flex items-center font-body font-bold 
                                                                select-none relative whitespace-nowrap align-middle outline-0 justify-center 
                                                                w-full px-4 py-2 text-sm rounded-lg border border-transparent shadow transition 
                                                                focus:outline-none hover:no-underline text-white hover:text-white active:text-white 
                                                                bg-gray-600 hover:bg-gray-700 active:bg-gray-800" href="/games/axie-infinity">
                            Change program
                                                                    </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default contracts