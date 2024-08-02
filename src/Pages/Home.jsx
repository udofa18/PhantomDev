import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../props/MovingText.css'; // Import CSS file for styling
import { useState, useEffect } from 'react'
import { faCss3, faGit, faGithub, faHtml5, faLinkedin, faReact, faTwitter, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Home() {

    const [left, setLeft] = useState(0); // Initial left position
    const [moving, setMoving] = useState(true)

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setLeft(prevLeft => prevLeft + 1); // Increment left position
        }, 10); // Interval for smooth animation (adjust as needed)

        // Cleanup function to stop animation when component unmounts
        return () => clearInterval(moveInterval);
    }, []); // Empty dependency array ensures this effect runs only once

    // Reset left position when text moves out of the screen
    useEffect(() => {
        if (left >= window.innerWidth) {
            setLeft(-500); // Reset position to off-screen
        }
    }, [left]);

    return (
        <div className='relative flex  flex-col items-stretch m-auto h-screen '>

            <div className='flex sm:flex-col md:flex-col m-auto justify-between px-20 md:px-10 md:p-20 py-28 sm:py-10   sm:px-5 ' >
                <div className='w-1/2 m-auto sm:w-full md:w-full'>
                    <h3 className='text-xl py-10 sm:text-xl text-yellow-600'>Hi there!!😁</h3>
                    <h1 style={{ fontFamily: "monospace" }} className=' text-4xl text-lime-400  sm:text-3xl md:text-4xl'>
                        <TypeAnimation
                            sequence={['Frontend Developer...', 1000, 'Developer Advocate...', 1000, 'Community Manager...', 1000]}
                            repeat={Infinity} /></h1>
                    <h3 className='text-xl sm:text-xl py-10 w/50 text-white'>I design and code beautifully simple and complex things, manage awesome communities and I love what I do.
                    </h3>
                    <div className='text-lime-600/50 text-4xl flex justify-left gap-20 flex-wrap sm:gap-5'>
                        <FontAwesomeIcon icon={faReact} />

                        <FontAwesomeIcon icon={faGit} />
                        <FontAwesomeIcon icon={faCss3} />
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faVuejs} />
                        {/* <FontAwesomeIcon icon={f} /> */}


                    </div>
                </div>

                <div className='m-auto  w-1/2 right sm:w-full flex flex-col  sm:py-10 md:py-10  md:w-full '>
                    <div className='m-auto'>
                        <img src="/images/dan.png" alt="" className='relative inline-block h-[200px] w-[200px] m-auto !rounded-full object-cover object-center bg-yellow-600' />

                    </div>

                    <div className='text-center text-2xl py-5 text-yellow-600 font-extrabold'>Daniel Udofa</div>

                </div>
            </div>
            <div className='text-yellow-600 text-3xl flex justify-center gap-20 sm:gap-5 sm:text-2xl p-2 my-10'>
                <a href='https://www.linkedin.com/in/daniel-udofa-865778149/' target='_blank'> <FontAwesomeIcon icon={faLinkedin} bounce /></a>

                <a href='https://github.com/udofa18' target='_blank'><FontAwesomeIcon icon={faGithub} bounce /></a>
                <a href='https://twitter.com/Udofa18' target='_blank'> <FontAwesomeIcon icon={faTwitter} bounce /></a>

                <a href='mailto:danieludofa452@gmail.com' target='_blank'> <FontAwesomeIcon icon={faEnvelope} bounce /></a>

            </div>
            <div className=' w-full  bg-lime-400  overflow-hidden m-auto  place-items-end '>
                <div className={`moving-text ${moving ? 'moving text-black  bg-lime-400 p-2 text-xl font-bold ' : ''}`}>
                    A web developer with 2 years of front end experience and passion for responsive website design. I also publish beginner-friendly articles on Hashnode.
                    Web3/ Blockchain Community Management has also been of interest to me, with 4 years experience working for Awesome Blockchain Projects.
                </div>
            </div>
        </div>

   
    )

}
export default Home
