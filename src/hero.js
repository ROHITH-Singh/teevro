import React ,{useState,useEffect,Component} from "react";
import fire from './fire';
const Hero = (props) => {
    
   
    return (
        <section className="hero">
            <nav><h2>
                {fire.auth().currentUser.email} </h2>
                <button onClick={props.handlelogout}>Logout</button>
                </nav>
        </section>
    )
}
export default Hero;