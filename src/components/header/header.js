import React from 'react';
import $ from 'jquery';
import {motion} from 'framer-motion';

import './header.scss';

import ArrowDown from './arrowDown';

class Header extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="Header d-flex flex-column justify-content-center align-items-center">
        <div className="headerBackground "></div>
        <div className="headerContent position-absolute d-flex flex-column justify-content-center align-items-center h-100">
          <motion.h1 className="text-white text-center"
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{delay: 1, duration: 1.5, type: "spring"}}
          >
            HI, My name is <span>Anass El yaagoubi</span>
            </motion.h1>
          <br></br>
          <motion.h2 className="text-white text-center" 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.5, duration: 1.5, type: "tween"}}
          >
            I <span>design</span>/<span>build</span> websites <br></br>and <span>develop</span> web apps
          </motion.h2>
          
          <div className="arrowDown">
            <ArrowDown/>
          </div>
        
        </div>
      </div>
    )
  }
  
}

export default Header;