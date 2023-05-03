import React from 'react';
import $ from 'jquery';

import './contact.scss';
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';

class Contact extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      recaptchaRef: null,
      verified: false
    }
  }

  sendEmail = (e)=>{
    e.preventDefault();
    if(this.state.verified){
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        e.target, 
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      this.showNote("done", "The email has been sent successfully !")
      this.closeContact()
    }else{
      this.showNote("error", "Check the box to make sure your not a robot please.")
    }
  }

  verified = ()=>{
    this.setState({
      verified: true
    })
  }

  closeContact = ()=>{
    let contactForm = $("#contact .contactForm")[0];
    $(contactForm).fadeOut("slow", ()=>{
      $(contactForm).remove()
    })
  }

  showNote = (state, msg)=>{
    let noteContainer = $("#contact .contactNote");
    switch(state){
      case "error":
        noteContainer.removeClass("bg-danger bg-success invisible")
        noteContainer.addClass("bg-danger")
        noteContainer.find("p").text(msg)
      break;
      case "done":
        noteContainer.removeClass("bg-danger bg-success invisible")
        noteContainer.addClass("bg-success")
        noteContainer.find("p").text(msg)
      break;
    }
  }
  

  componentDidMount(){

  }

  render(){
    return (
      <div id="contact" className="Contact d-flex justify-content-center align-items-center flex-column m-3 p-2 bg-white rounded">
        <h1 className="text-primary text-center">CONTACT ME</h1>
        <div className="contactText text-center">
            <p className="text-center">
                If you have any project in mind or just want to say hey, 
                feel free to send me an email at <span className="bold">anasselyaagoubi3@gmail.com</span> or fill up the form below.
                <br></br>
                <span className="italic">~Let’s talk.</span>
            </p>

        </div>
        <div className="contactNote w-50 rounded bg-success invisible">
          <p className="text-center text-white p-2 m-0">
            
          </p>
        </div>
        <div className="contactForm d-flex justify-content-center align-items-center w-100">
            <form className="form-group w-75" name="contact" onSubmit={(e)=>{this.sendEmail(e)}}>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <input className="form-control my-1 mr-1" type="text" name="name" placeholder="Your name ..." maxLength="30" autoComplete="off" required></input>
                  <input className="form-control my-1 ml-1" type="email" name="email" placeholder="Your email ..." maxLength="50" required></input>
                </div>
                  <input className="form-control my-1 w-100" type="text" name="subject" placeholder="Subject ..." maxLength="60" autoComplete="off" required></input>
                  <textarea className="form-control my-1 w-100" name="message" placeholder="Your message ..." maxLength="800" required></textarea>

                  <Recaptcha 
                    sitekey=/*{process.env.REACT_APP_EMAILJS_RECAPTCHA_KEY}*/"6Le6kwUbAAAAABFne8X5GQSnMePq45ToXc5LlUHq"
                    render="explicit"
                    verifyCallback={()=>{this.verified()}}
                  />

                  <input className="contactSend btn btn-primary rounded-pill text-white py-1 px-4 m-1" type="submit" value="Send"></input>
                </div>
            </form>
        </div>
      </div>
    )
  }
  
}

export default Contact;