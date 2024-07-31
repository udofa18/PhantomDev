import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    ButtonGroup,
    Badge,
} from "@material-tailwind/react";
// import { Swiper, SwiperSlide } from 'swip/er/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Projecs() {


    return (
        <>
            <div className="h-screen sm:h-full">

                <h1 className="text-center sm:py-40 pt-20 pb-5 text-lime-400 text-2xl font-bold"><span className="text-white">{"<"}</span> Projects <span className="text-white">{">"}</span></h1>
<p className="text-center py-5 text-gray-300"> For more projects Visit my <a href="https://github.com/udofa18" target="_blank" className="text-lime-500 ">Github Account</a></p>
                <div className="flex  justify-center gap-5  ">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Card className="w-80 nav sm:w-full bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/atelier.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl ">
                                            Crystalveey Atelier
                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to Buy and sell their favorite fashion pieces.
                                    </Typography>

                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            React
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Tailwind
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Firebase
                                        </li>

                                    </ul>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://atelier.crystalveey.com/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/wholesquare.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            Wholesquare

                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        A Social network designed for relaxation, enjoyment, and insight, as we connect, collaborate, and explore together!
                                    </Typography>

                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            React
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Tailwind
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Firebase
                                        </li>

                                    </ul>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://www.wholesquare.org/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/github.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            Github Api Fetch
                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        An assignment task that Featches My Repositores from Github and shows relevant information about REPO.  ...
                                    </Typography>

                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Vue
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Tailwind
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Github
                                        </li>

                                    </ul>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://github-ass.vercel.app/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/ticketchain.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            Ticketchain

                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        A web3 Application for Blockchain Event organizers and attendees. Decentralized ticketing platform built on Mode Blockchain

                                    </Typography>
                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            React
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Thirdweb
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Solidity
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Web3
                                        </li>
                                    </ul>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://ticketchain-test.vercel.app/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/crystalveey.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            Crystalveey

                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        Crystalveey is a portfolio company encompassing a fashion merchandize and re-commerce brand that produces quality clothing for both male and female, a like-minded community platfrom.
                                    </Typography>
                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            React
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Tailwind
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Vite
                                        </li>
                                       
                                    </ul>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://www.crystalveey.com/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/mane.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            ManeLabs
                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        a SAAS company out to meet various needs for individuals and firms. Our offering range from product and identity design to web and mobile app development, hosting and related services.                                    </Typography>

                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Vue
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Tailwind
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Github
                                        </li>

                                    </ul>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://mane-labs.vercel.app/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src="/images/untagg.png"
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Typography color="lime" className="text-xl">
                                            Untagg

                                        </Typography>

                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal text-gray-400"
                                    >
                                        Untagg is more than just a marketplace for clothes; it’s a movement for conscious fashion. We believe that style shouldn’t come at the expense of the planet or your wallet.
                                    </Typography>
                                    <ul className="flex m-auto  text-sm text-gray-200 justify-center my-2 bg-black p-2 rounded-lg">
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            React
                                        </li>
                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Firebase
                                        </li>

                                        <li className="font-bold border-r px-1 border-r-yellow-500">
                                            Material UI
                                        </li>
                                    </ul>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="https://untagg.crystalveey.com/" target="_blank">
                                        <Button
                                            ripple={false}
                                            fullWidth={true}
                                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        >
                                            Visit Site
                                        </Button></a>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </>
    )
}

export default Projecs
