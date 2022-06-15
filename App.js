import React from "react"
import Mail from "./components/ButtonMl"
import LinkedIn from "./components/ButtonLi"
import Profile from "./components/Profile"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div>
            <header>
                <Profile />
                <div>
                    <LinkedIn />
                    <Mail />
                </div>
            </header>
            <Main />
            <Footer />
        </div>
    )
}