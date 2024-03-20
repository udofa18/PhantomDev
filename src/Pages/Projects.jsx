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

function Projecs() {
    return (
        <>
            <div>

                <h1 className="text-center py-20 text-lime-400 text-3xl font-extrabold"><span className="text-white">{"<"}</span> Projects <span className="text-white">{">"}</span></h1>

                <div className="flex flex-wrap justify-between px-40 sm:px-5 gap-5 m-auto">
                    <Card className="w-96 sm:w-full  bg-yellow-100">
                        <CardHeader shadow={false} floated={false} className="h-96">
                            <img
                                src="/images/atelier.png"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="text-2xl">
                                    Crystalveey Atelier
                                </Typography>

                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                Crystalveeys’ atelier is a fashion merchandise and recommerce site that allows individuals to shop their favorite fashion pieces and also sell previously owned clothing items to interested buyers.
                            </Typography>
                            <ButtonGroup size="sm" className="py-4">
                                <Button>React</Button>
                                <Button>Tailwind</Button>
                                <Button>Firebase</Button>

                            </ButtonGroup>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="https://atelier.crystalveey.com/" target="_blank">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                    Visit
                                </Button></a>
                        </CardFooter>
                    </Card>
                    <Card className="w-96 sm:w-full bg-yellow-100">
                        <CardHeader shadow={false} floated={false} className="h-96">
                            <img
                                src="/images/wholesquare.png"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="text-2xl">
                                    Wholesquare

                                </Typography>

                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                social network designed for relaxation, enjoyment, and insight, as we connect, collaborate, and explore together!
                            </Typography>
                            <ButtonGroup size="sm" className="py-4">
                                <Button>React</Button>
                                <Button>Tailwind</Button>
                                <Button>Firebase</Button>

                            </ButtonGroup>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="https://www.wholesquare.org/" target="_blank">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                    Visit
                                </Button></a>
                        </CardFooter>
                    </Card>
                    <Card className="w-96 sm:w-full bg-yellow-100">
                        <CardHeader shadow={false} floated={false} className="h-96">
                            <img
                                src="/images/github.png"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="text-2xl">
                                    Github Api Fetch
                                </Typography>

                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                Featches My Repositores from Github   ...
                            </Typography>
                            <ButtonGroup size="sm" className="py-4">
                                <Button>Vue</Button>
                                <Button>Tailwind</Button>
                                <Button>Github</Button>

                            </ButtonGroup>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href="https://github-ass.vercel.app/" target="_blank">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-lime-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                    Visit
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

export default Projecs
