// src/App.tsx
import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import "./App.css"

const App: React.FC = () => {
	return (
		<>
			<div className="flex flex-col flex-grow min-h-screen">
				<div className="area">
					<ul className="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
