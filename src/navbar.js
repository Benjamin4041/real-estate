import React from 'react'
import Button from './button'
import './navbar.module.css'
export default function navbar() {
  return (
        <nav style={{display:"flex",columnGap:"2em",justifyContent:"space-between",padding:"2em"}}>
           <img src="./images/image2.png" alt="no-image" style={{width:"5%"}}  />
            <div style={{display:"flex",columnGap:"1em", color:"white"}}>
                <a style={{color:"white",textDecoration:"none", fontWeight:"500"}} href="">About Us</a>
                <a style={{color:"white",textDecoration:"none", fontWeight:"500"}} href="">Sell A Home</a>
                <a style={{color:"white",textDecoration:"none", fontWeight:"500"}} href=""> Find A Home</a>
                <a style={{color:"white",textDecoration:"none", fontWeight:"500"}} href="">Mortage</a>
            </div>
            <div>
                <Button name="Register" s={{cursor:"pointer",backgroundColor:"#2C6CD9",borderColor:"#2C6CD9",padding:"0.5em 1.5em",borderRadius:"5px",color:"white"}}/>
                <Button className="n" name="Login" s={{cursor:"pointer",backgroundColor:"transparent",border:"solid 1px white",padding:"0.5em 2em",borderRadius:"5px",color:"white"}}/>
                {/* <button style={{cursor:"pointer",backgroundColor:"#2C6CD9",borderColor:"#2C6CD9",padding:"0.5em 1.5em",borderRadius:"5px",color:"white"}}>Register</button>
                <button style={{cursor:"pointer",backgroundColor:"transparent",border:"solid 1px white",padding:"0.5em 2em",borderRadius:"5px",color:"white"}}>Login</button> */}
            </div>
        </nav>
   
  )
}
