import React from "react"
   
export default function Mail() {
    return (
        <button 
        onClick={()=> window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKjFCThQDqSTwmjJVSKNzgtxZSlvqlQVdcpPZWDmckLSQvBpTwCjlTZqlHSKzqnvjrKg", "_blank")}className="button-email"> 
            <img src="./images/mainemail.png" width="15px"/>
            <span> Email </span>
        </button>
    )
}


 
 