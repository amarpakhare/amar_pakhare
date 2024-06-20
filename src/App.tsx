// src/App.tsx
import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import "./App.css"

const App: React.FC = () => {
	return (
		<>
			<div className="flex flex-col flex-grow min-h-screen bg-primary-background">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
