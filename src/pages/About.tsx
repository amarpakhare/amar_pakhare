// src/pages/About.tsx
import React from "react"
import {motion} from "framer-motion"

const About: React.FC = () => {
	return (
		<>
			<main className="flex items-center justify-center bg-primary-nav text-primary-text p-8 m-4 md:m-10 lg:m-20 rounded-lg">
				<motion.div
					className="flex flex-col md:flex-row items-center mt-10 gap-20"
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<motion.h2
							className="text-3xl md:text-4xl font-bold text-primary-content"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.2}}
						>
							About Me
						</motion.h2>
						<motion.p
							className="text-md md:text-lg lg:text-xl mt-4"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.3}}
						>
							Hi, I'm AmarPakhare, a passionate{" "}
							<motion.span className="animate-typing overflow-hidden whitespace-nowrap">
								FULL STACK WEB DEVELOPER 🚀
							</motion.span>{" "}
							with a love for creating dynamic and responsive web applications.
							I have experience working with various technologies and enjoy
							tackling challenging projects.
						</motion.p>
						<motion.p
							className="text-md md:text-lg lg:text-xl mt-4"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.4}}
						>
							My journey started with a curiosity for coding, and over the
							years, I have honed my skills in both front-end and back-end
							development. I thrive in collaborative environments and am always
							eager to learn and adapt to new technologies.
						</motion.p>
						<motion.a
							href="path/to/your/resume.pdf" // Replace with the actual path to your resume
							download
							className="p-2 mt-4 rounded-md bg-primary-content text-primary-card font-bold hover:bg-primary-active hover:text-primary-background transition duration-300"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.5}}
						>
							Download Resume
						</motion.a>
					</div>
					<motion.img
						src="src/assets/Designer.png" // Replace with your profile image path
						alt="Profile"
						className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mb-4 rounded-full border-4 border-primary-background"
						initial={{opacity: 0, scale: 0.25}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 1, delay: 0.5, ease: "easeInOut"}}
					/>
				</motion.div>
			</main>
		</>
	)
}

export default About
