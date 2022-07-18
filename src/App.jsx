import React from "react"
import Header from './components/header/Header'
import Home from "./pages/home/Home"
import Footer from './components/footer/footer'
import "./scss/main.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // un known



function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    )

}

export default App;