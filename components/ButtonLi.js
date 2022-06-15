import React from "react";


export default function LinkedIn() {
    return (
        <button onClick={()=> window.open("https://www.linkedin.com/in/drakegriffith8/", "_blank")}className="button-linkedin" > 
            <img src="./images/linkedin.png" width="11px"/>
            <span> LinkedIn </span> 
           
        </button>
    )
}
     
