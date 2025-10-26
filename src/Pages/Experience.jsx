import React from 'react'

const Experience = () => {
    return (
        <div className=''>
            <h1 className="text-center sm:pt-28 py-20 text-lime-400 text-2xl font-bold"><span className="text-white">{"<"}</span> Experience <span className="text-white">{">"}</span></h1>
            <div className='px-40 py-10 sm:py-5 sm:flex-col flex justify-between sm:px-5 gap-5'>
                <div className="w-[32rem] sm:w-full ">
                    <ul className="flex flex-col w-full">
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path
                                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                                        </path>
                                        <path
                                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                                        </path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    AltSchool Africa
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                        Diploma in Software Engineering (12 months)
                                    </p>
                                    <ol className='list-disc  gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">Graduated from the school of enineering, passing all test and exams</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Gained insights into popular frontend frameworks like <span className='text-lime-400'>React</span>  and 
                                            <span className='text-lime-400'> Vue.js</span>, enabling me to build robust and interactive web applications.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                                Learnt how to communicate with server-side <span className='text-lime-400'>APIs</span> to fetch and display data on your web applications.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                                Master the art of creating websites that adapt seamlessly to different screen sizes and devices, ensuring an optimal user experience.
                                            </p>
                                        </li>


                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    Crystalveey
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                        Frontend Engineer
                                    </p>
                                    <ol className='list-disc gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">   A Portfolio Company providing Fashion, re-commerce, travel, charity and community Services</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Designed, Developed, Researched, and managed the successful launch of <a href='http://atelier.crystalveey.com' className='text-lime-400' target='_blank'>http://atelier.crystalveey.com </a>, <a href=' http://wholesquare.org' className='text-lime-400' target='_blank'> http://wholesquare.org </a>, <a href=' https://www.crystalveey.com/' className='text-lime-400' target='_blank'> https://www.crystalveey.com/ </a>, <a href=' https://untagg.crystalveey.com/' className='text-lime-400' target='_blank'> https://untagg.crystalveey.com/ </a>


                                            </p>
                                        </li>
                                       


                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    Xedla pay
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                       Cofounder and Software Engineer
                                    </p>
                                    <ol className='list-disc gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">   A Safe and Reliable Option for Buyers and Sellers, Perform all your day to day financial transaction .</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Designed, Developed, Researched, and managed the successful launch of <a href='https://www.xedla.com/' className='text-lime-400' target='_blank'>https://www.xedla.com/ </a>. App available on playstore and appstore.


                                            </p>
                                        </li>
                                       


                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                   Artistic Labs
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                        Frontend Engineer
                                    </p>
                                    <ol className='list-disc gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">   A Decentralized messaging platform for people and communities looking to engage with Web3 products and services.</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Designed, Developed, Researched, and managed the successful launch of <a href='http://gamic.app' className='text-lime-400' target='_blank'>http://gamic.app/ </a>. App available on playstore and appstore.


                                            </p>
                                        </li>
                                       


                                    </ol>
                                </div>
                            </div>
                        </li>


                        <li className="relative flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path
                                            d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z">
                                        </path>
                                        <path fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    DX Mentorship 
                                </h5>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                       Developer Relation Advocate <a className='text-yellow-400' href='https://dxmentorship.com/mentees/daniel/' target='_blank'>(https://dxmentorship.com/mentees/daniel/)</a>
                                    </p>
                                    <ol className='list-disc  gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">Equipped with knowledge and information that will propel me into a fulfilling Developer Advocacy career. </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Worked with a team to plan, manage, and strategize on the course of the  program 

                                            </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                            Got basic Developer relation skills e.g  <span className='text-gray-300'> Communication Skills, Community Engagement, Advocacy and Empathy, Content Creation, Problem-Solving, Public Speaking, Feedback Loop Management etc</span> 
                                            </p>
                                        </li>
                                        
                                    </ol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-[32rem] sm:w-full  ">
                    <ul className="flex flex-col w-full">
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path
                                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                                        </path>
                                        <path
                                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                                        </path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    Chainlink Bootcamp <span className='text-gray-500'>(Web3)</span>
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                        Certificate of participaton
                                    </p>
                                    <ol className='list-disc  gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">Learnt how to write smart contracts with Chainlink Developer Advocates</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Deployed my first <span className='text-lime-400'>smart contrat</span>, created token, created and minted <span className='text-lime-400'>NFTs</span> 
                                            </p>
                                        </li>
                                        {/* <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                                Learnt how to communicate with server-side <span className='text-lime-400'>APIs</span> to fetch and display data on your web applications.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                                Master the art of creating websites that adapt seamlessly to different screen sizes and devices, ensuring an optimal user experience.
                                            </p>
                                        </li> */}


                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex flex-col gap-2">
                            <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
                                <span className="h-full w-0.5 bg-blue-gray-100"></span>
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    BCAMP (Web3)
                                </h5>
                            </div>
                            <div className="flex gap-4 pb-8">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                     Mode Solidity Bootcamp
                                    </p>
                                    <ol className='list-disc gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">   Bootcamp for web3 Enthusiast and Developers.  Worked with  a solidity developer and Backed developer to create a Decentralised ticketing platfrom for event organizers and attendees using the Mode Network, Thirdweb, IPFS etc.</p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base  antialiased font-normal leading-relaxed text-gray-50" >  <a href='https://ticketchain-test.vercel.app/' className='text-lime-400' target='_blank'>https://ticketchain-test.vercel.app/ </a>,<br></br> Github: <a href=' https://github.com/udofa18/ticketchain-test' className='text-lime-400' target='_blank'> https://github.com/udofa18/ticketchain-test </a>


                                            </p>
                                        </li>
                                       


                                    </ol>
                                </div>
                            </div>
                        </li>
                        {/* <li className="relative flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                        className="w-4 h-4">
                                        <path
                                            d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z">
                                        </path>
                                        <path fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <h5
                                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-400">
                                    DX Mentorship 
                                </h5>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
                                <div>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-200">
                                       Developer Relation Advocate <a className='text-yellow-400' href='https://dxmentorship.com/mentees/daniel/' target='_blank'>(https://dxmentorship.com/mentees/daniel/)</a>
                                    </p>
                                    <ol className='list-disc  gap-4 flex flex-col'>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">Equipped with knowledge and information that will propel me into a fulfilling Developer Advocacy career. </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 "> Worked with a team to plan, manage, and strategize on the course of the  program 

                                            </p>
                                        </li>
                                        <li>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-500 ">
                                            Got basic Developer relation skills e.g  <span className='text-gray-300'> Communication Skills, Community Engagement, Advocacy and Empathy, Content Creation, Problem-Solving, Public Speaking, Feedback Loop Management etc</span> 
                                            </p>
                                        </li>
                                        
                                    </ol>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
                </div>
        </div>
    );
}

export default Experience