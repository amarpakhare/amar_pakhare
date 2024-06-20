import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"
import About from "./pages/About.tsx"
import Projects from "./pages/Projects.tsx"
import Contact from "./pages/Contact.tsx"
import Home from "./pages/Home.tsx"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="projects" element={<Projects />} />
			<Route path="contact" element={<Contact />} />
		</Route>
	)
)
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
