import profilePic from '../assets/foto.png';
import {HERO_CONTENT} from '../constants';
import {motion} from "framer-motion";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0, transition: {duration: 0.5}
    }
}

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center">

                <div className="w-full lg:w-1/3 flex justify-center">

                    <motion.img
                        src={profilePic}
                        className="border border-stone-900 rounded-xl"
                        alt="profile"
                        width={500}
                        height={650}
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 1}}
                    />
                </div>


                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-3xl tracking-tight lg:text-4xl">
                            Mochammad Wachid Nur Faizin
                        </motion.h2>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent">
                        WEB Developer
                    </motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-4 text-base leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/resume.pdf" target="_blank" rel="noopener noreferrer" download
                           className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 mb-6 inline-block">
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;