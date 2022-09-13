import React from 'react'
import Button from './button'
export default function searchbar() {
  return (
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:"30em"}}>
            <form action="" style={{marginRight:"4em",width:"fit-content"}}>
                <img style={{width:"30px",zIndex:"-1",transform:"translateY(2.9em)",marginLeft:"0.5em"}} src="./images/home.png" alt="" />
                <input style={{width:"80%",padding:"1em 3em",borderRadius:"8px"}} type="text" placeholder="Search Homes And Agents"/>
                <Button name="Find" s={{cursor:"pointer",backgroundColor:"#2C6CD9",borderColor:"#2C6CD9",padding:"0.3em 0.7em",borderRadius:"5px",color:"white",transform:"translateX(20em)",position:"relative",bottom:"3em"}}/>
                
            </form>
        </div>
  )
}
