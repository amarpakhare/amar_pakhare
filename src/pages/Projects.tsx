// src/pages/Projects.tsx
import React from "react"
import {motion} from "framer-motion"

const projects = [
	{
		title: "Project One",
		description: "Description for project one.",
		image: "path/to/project1.png", // Replace with actual image paths
	},
	{
		title: "Project Two",
		description: "Description for project two.",
		image: "path/to/project2.png",
	},
	{
		title: "Project Three",
		description: "Description for project three.",
		image: "path/to/project3.png",
	},

	// Add more projects as needed
]

const Projects: React.FC = () => {
	return (
		<>
			<main className="bg-primary-nav text-primary-text p-8 m-4 md:m-10 lg:m-20 rounded-lg">
				<motion.div
					className="flex flex-col items-center mt-10 gap-8"
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-primary-content"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 0.5, delay: 0.2}}
					>
						My Projects
					</motion.h2>
					<div className="w-full max-h-96 ">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects.map((project, index) => (
								<motion.div
									key={index}
									className="bg-primary-background p-2 rounded-lg shadow-lg"
									whileHover={{scale: 1.05}}
									whileTap={{scale: 0.95}}
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									transition={{duration: 0.5}}
								>
									<img
										src={project.image}
										alt={project.title}
										className="rounded-lg w-full h-40 object-cover"
									/>
									<h3 className="text-2xl font-bold text-primary-content mt-4">
										{project.title}
									</h3>
									<p className="text-md md:text-lg text-primary-text mt-2">
										{project.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</main>
		</>
	)
}

export default Projects
