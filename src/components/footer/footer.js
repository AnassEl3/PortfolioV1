import React from 'react';
import $ from 'jquery';

import './footer.scss';
import LinkedinIcon from './media/linkedinIcon.png';
import GitgubIcon from './media/githubIcon.png';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Footer d-flex justify-content-center align-items-center flex-column bg-secondary p-2">
        <div className="socialmedia  d-flex justify-content-center align-items-center py-1">
            <a className="text-decoration-none text-white mx-2" href="https://www.linkedin.com/in/anass-el-yaagoubi-24236320a" target="_blank"><img className="iconImg" src={LinkedinIcon}></img></a>
            <a className="text-decoration-none text-white mx-2" href="https://github.com/AnassEl3" target="_blank"><img className="iconImg" src={GitgubIcon}></img></a>

        </div>
        <div className="footerText mt-3">
            <p className="d-flex justify-content-center align-items-center text-white">
            <span className="material-icons px-1">copyright</span>
                Made by <span className="italic px-1">Anass El yaagoubi</span>
            </p>
        </div>
      </div>
    )
  }
  
}

export default Footer;