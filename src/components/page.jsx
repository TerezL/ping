import {React,  useRef, useState} from "react";
import Logo from "./images/logo.svg";
import Pic from "./images/illustration-dashboard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Page(){

    const spanRef = useRef(null);
    

  function handleClick(e) {
    const form = e.target.form;

    function validateEmail() {
      
      const isEmailMismatch = form[0].validity.typeMismatch;

      if (isEmailMismatch) {
        spanRef.current.textContent = "Please provide a valid email address";
        
      } else if (!isEmailMismatch) {
        spanRef.current.style.display = "none";
      } 
    }

    if (!form.checkValidity()) {
      validateEmail();
      e.preventDefault();
    }
  }

    return(
        <>
        <header>
            <img src={Logo} alt="logo" className="logo"/>
            </header>
            <main>
            <section aria-label="title" className="title">
                <h1>We are launching <span className="bold">soon!</span></h1>
            </section>
            <section aria-label="formlabel">
                <p>Subscribe and get notified</p>
            </section>
            <div className="container">
            <form action="" noValidate>
            
                <input type="email" id="email" placeholder="Your email address..." className="mail" />
                <div className="errmsg" ref={spanRef}></div>
                
          <button onClick={handleClick} onclick="this.form.reset();" type="submit">Notify Me</button>
         </form>
          
         </div>
         
          
            
           
            
            <img src={Pic} alt="mainPic" className="mainPic"/>
            <section aria-label="social" className="social">
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-border fa-facebook-f" className="circle"/></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" className="circle"/></a>
            <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" className="circle"/></a>
            </section>
            </main>
            <footer>
            <p>© Copyright Ping. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Page;