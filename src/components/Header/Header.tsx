// src/components/Header.tsx
import React from "react"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

const Header: React.FC = () => {
	return (
		<motion.header
			className="bg-primary-nav text-primary-text p-4 flex items-center justify-between rounded-br-lg rounded-bl-lg"
			initial={{opacity: 0, y: -50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.5}}
		>
			<motion.div
				className="flex-shrink-0"
				initial={{scale: 0}}
				animate={{scale: 1}}
				transition={{duration: 0.5, delay: 0.5}}
			>
				<h1 className="text-5xl font-bold text-primary-content">A.</h1>
			</motion.div>
			<motion.nav
				className="w-full"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 0.5, delay: 0.7}}
			>
				<ul className="flex justify-end space-x-8 md:space-x-12 lg:space-x-16">
					<motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
						<NavLink
							to="/"
							className={({isActive}) =>
								`text-lg md:text-xl lg:text-2xl no-underline ${
									isActive ? "text-primary-active" : "text-primary-text"
								}`
							}
						>
							Home
						</NavLink>
					</motion.li>
					<motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
						<NavLink
							to="/about"
							className={({isActive}) =>
								`text-lg md:text-xl lg:text-2xl no-underline ${
									isActive ? "text-primary-active" : "text-primary-text"
								}`
							}
						>
							About
						</NavLink>
					</motion.li>
					<motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
						<NavLink
							to="/projects"
							className={({isActive}) =>
								`text-lg md:text-xl lg:text-2xl no-underline ${
									isActive ? "text-primary-active" : "text-primary-text"
								}`
							}
						>
							Projects
						</NavLink>
					</motion.li>
					<motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
						<NavLink
							to="/contact"
							className={({isActive}) =>
								`text-lg md:text-xl lg:text-2xl no-underline ${
									isActive ? "text-primary-active" : "text-primary-text"
								}`
							}
						>
							Contact
						</NavLink>
					</motion.li>
				</ul>
			</motion.nav>
		</motion.header>
	)
}

export default Header
