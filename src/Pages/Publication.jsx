import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


function Publication() {

    return (
        <>
            <div>

                <h1 className="text-center py-20 sm:pt-40 text-lime-400 text-2xl font-extrabold"><span className="text-white">{"<"}</span> Publications <span className="text-white">{">"}</span></h1>
               
               <div className="flex flex-wrap justify-center sm:px-5 gap-5 m-auto">
                <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                    <CardHeader shadow={false} floated={false} className="h-60">
                        <img
                            src="/images/stress.png"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="lime" className="text-xl">
                            Managing "STRESS😩"as Software Engineer
                            </Typography>
                         
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal text-gray-400"
                        >
                            Managing stress as a software engineer is crucial for maintaining both your mental well-being and your productivity. ...
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="https://danielscode.hashnode.dev/managing-stressas-software-engineer" target="_blank">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Read
                        </Button></a>
                    </CardFooter>
                </Card>
                <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                    <CardHeader shadow={false} floated={false} className="h-60">
                        <img
                            src="/images/dev.png"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="lime" className="text-xl">
                            Beginners Guide to Developer Relations

                            </Typography>
                         
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal text-gray-400"
                        >
                            At its core, Developer Relations is about establishing and maintaining a strong bond between developers and the company's products or services. ...
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="https://danielscode.hashnode.dev/beginners-guide-to-developer-relations" target="_blank">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Read
                        </Button></a>
                    </CardFooter>
                </Card>
                <Card className="w-80 sm:w-full  bg-black/50 border border-lime-500 shadow-2xl shadow-lime-900   backdrop-blur-2xl backdrop-saturate-100">
                    <CardHeader shadow={false} floated={false} className="h-60">
                        <img
                            src="/images/amina.png"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="lime" className="text-xl">
                            How to give your site an animated background using particle.js
                            </Typography>
                         
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal text-gray-400"
                        >
                            Particles.js is a JavaScript library for creating animated, interactive particle backgrounds for web pages.   ...
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="https://danielscode.hashnode.dev/how-to-give-your-site-an-animated-background-using-particlejs" target="_blank">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Read
                        </Button></a>
                    </CardFooter>
                </Card>
            </div>
            <div className="w-60 m-auto py-20">
            <a href="https://danielscode.hashnode.dev/" target="_blank">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            See More
                        </Button></a>
                                    </div>
            </div> 

        </>
    )
}

export default Publication
