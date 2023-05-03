import React from 'react';
import $ from 'jquery';

import './navigation.scss';
import arFlag from "../media/arabicFlag.png";
import frFlag from "../media/frenshFlag.png";
import enFlag from "../media/englishFlag.png";

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      smallNav: false,
      smallNavOpen: true
    }
  }

  setNavState = ()=>{
    if(window.innerWidth <= 800){
      this.setState({
        smallNav: true
      })
    }else{
      this.setState({
        smallNav: false
      })
    }
  }

  setSmallNavBtn = ()=>{
    $(".Navigation #smallNavBtn").on("click",(e)=>{
      if(this.state.smallNavOpen == true){
        $(e.target).parents("#smallNavBtn").removeClass("is-active");
        $(e.target).parents("#smallNavBtn").addClass("is-active");
        this.state.smallNavOpen = false;
      }else{
        $(e.target).parents("#smallNavBtn").removeClass("is-active");
        this.state.smallNavOpen = true;
      }
      
    })
  }

  componentDidMount(){
    //initiating and adjusting the navigation (smallNav)
    this.setNavState();
    $(window).on("resize",()=>{
      this.setNavState();
    })
    
  }

  componentDidUpdate(){
    if(this.state.smallNav == true){
      this.setSmallNavBtn();
    }
  }

  render(){
    return (
      <div className="Navigation d-flex justify-content-center align-items-center flex-wrap bg-secondary p-3 sticky-top">
          {
            (()=>{
              if(this.state.smallNav == false){
                return(
                  <div className="navLinks d-flex justify-content-start align-items-center">
                    <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-white text-decoration-none rounded py-2 px-3 mx-2" href="#aboutme"><span className="material-icons px-1">person</span> ABOUT ME</a>
                    <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-white text-decoration-none rounded py-2 px-3 mx-2" href="#work"><span className="material-icons px-1">work</span> MY WORK</a>
                    <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-white text-decoration-none rounded py-2 px-3 mx-2" href="#resume"><span className="material-icons px-1">article</span> RESUME</a>
                    <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-white text-decoration-none rounded py-2 px-3 mx-2" href="#contact"><span className="material-icons px-1">question_answer</span> CONTACT</a>
                  </div>
                )
              }else{
                return(
                  <div className="navLinks d-flex justify-content-start align-items-center position-relative">
                    <button id="smallNavBtn" className="hamburger hamburger--squeeze" type="button" data-toggle="collapse" data-target="#smallNavContent">
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
                    <br></br>
                    <div id="smallNavContent" className="collapse position-absolute p-2 bg-white border border-primary rounded">
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-pripary text-decoration-none rounded p-3 mx-2" href="#aboutme"><span className="material-icons px-1">person</span> ABOUT ME</a>
                        <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-pripary text-decoration-none rounded p-3 mx-2" href="#work"><span className="material-icons px-1">work</span> MY WORK</a>
                        <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-pripary text-decoration-none rounded p-3 mx-2" href="#resume"><span className="material-icons px-1">article</span> RESUME</a>
                        <a className="d-flex justify-content-cenyer align-items-center text-nowrap text-pripary text-decoration-none rounded p-3 mx-2" href="#contact"><span className="material-icons px-1">question_answer</span> CONTACT</a>                      </div> 
                    </div>  
                  </div>
                )

              }
              
            })()
          }

      </div>
    )
  }
  
}

export default Navigation;