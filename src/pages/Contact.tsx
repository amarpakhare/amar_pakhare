// src/pages/Contact.tsx
import React from "react"
import {motion} from "framer-motion"

const Contact: React.FC = () => {
	return (
		<>
			<main className="flex items-center justify-center bg-primary-nav text-primary-text p-8 m-4 md:m-10 rounded-lg">
				<motion.div
					className="flex flex-col md:flex-row items-center gap-20"
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
							Contact Me
						</motion.h2>
						<motion.p
							className="text-md md:text-lg lg:text-xl mt-4"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.3}}
						>
							I'm available for freelance projects and full-time positions. If
							you have a question or just want to say hi, feel free to reach out
							to me!
						</motion.p>
						<motion.form
							className="flex flex-col gap-4 mt-4 w-full"
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							transition={{duration: 0.5, delay: 0.4}}
						>
							<input
								type="text"
								placeholder="Your Name"
								className="p-2 rounded-md border-2 border-primary-background focus:outline-none focus:border-primary-active"
							/>
							<input
								type="email"
								placeholder="Your Email"
								className="p-2 rounded-md border-2 border-primary-background focus:outline-none focus:border-primary-active"
							/>
							<textarea
								placeholder="Your Message"
								className="p-2 rounded-md border-2 border-primary-background focus:outline-none focus:border-primary-active h-32 resize-none"
							/>
							<button
								type="submit"
								className="p-2 rounded-md bg-primary-content text-primary-card font-bold hover:bg-primary-active hover:text-primary-background transition duration-300"
							>
								Send Message
							</button>
						</motion.form>
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

export default Contact
