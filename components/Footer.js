import React from "react"

export default function Footer() {
    return (
        <div className="footer-container">
            <button onClick={()=> window.open("https://twitter.com/drakegriffith8", "_blank")}> 
                <img src="./images/twitter.png" width="50px"/></button>
            <button onClick={()=> window.open("https://facebook.com/drakegriffith", "_blank")}> 
                <img src="./images/fb.png" width="50px"/></button>
            <button onClick={()=> window.open("https://instagram.com/_drakegriffith", "_blank")}> 
                <img src="./images/instagram.png" width="50px"/></button>
            <button onClick={()=> window.open("https://github.com/drakegriffith", "_blank")}> 
                <img src="./images/github.png" width="50px"/></button>
        </div>
            
    )
}

