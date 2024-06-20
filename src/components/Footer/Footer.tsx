// src/components/Footer.tsx
import React from "react"
import {motion} from "framer-motion"
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"

const Footer: React.FC = () => {
	return (
		<motion.footer
			className="bg-primary-nav text-primary-text p-4 flex items-center justify-center rounded-tl-lg rounded-tr-lg"
			initial={{opacity: 0, y: 50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.5}}
		>
			<motion.div
				className="flex space-x-8"
				initial={{scale: 0}}
				animate={{scale: 1}}
				transition={{duration: 0.5, delay: 0.5}}
			>
				<motion.a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaFacebook className="text-2xl md:text-3xl lg:text-4xl text-primary-content hover:text-primary-active" />
				</motion.a>
				<motion.a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaTwitter className="text-2xl md:text-3xl lg:text-4xl text-primary-content hover:text-primary-active" />
				</motion.a>
				<motion.a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaInstagram className="text-2xl md:text-3xl lg:text-4xl text-primary-content hover:text-primary-active" />
				</motion.a>
				<motion.a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaLinkedin className="text-2xl md:text-3xl lg:text-4xl text-primary-content hover:text-primary-active" />
				</motion.a>
			</motion.div>
		</motion.footer>
	)
}

export default Footer
