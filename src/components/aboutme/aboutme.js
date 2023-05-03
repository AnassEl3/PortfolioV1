import React from 'react';
import $ from 'jquery';

import './aboutme.scss';
import me from './media/me.png';

class Aboutme extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="aboutme" className="Aboutme d-flex flex-column justify-content-center align-items-center m-3 p-2 pt-4 bg-white rounded">
        
        <div className="intro d-flex justify-content-around align-items-center  flex-wrap">
          <div className="introImg d-flex justify-content-start align-items-center p-2 ">
            <img className="rounded-pill border border-secondary" src={me}></img>
          </div>
          <div className="introText d-flex justify-content-center align-items-start flex-column w-50 ">
            <h4 className="bold text-primary">Hello,</h4>
            <p>
              I am <span className="text-primary boldItalic">Anass El yaagoubi</span>, a web developer currently using the <span className="bold">MERN stack</span>.
              i am generally passionate about technology and excited to learn new stuff.
              <br></br>
              I always try to build and develop the most efficient, stable, and beautiful websites that are 
              responsive with all devices (pc, mobile, tv ...).
              <br></br>
              Feel free to contact me anytime.
            </p>
          </div>
        </div>

        <div className="aboutmeLine bg-primary mx-5 my-3"> </div>

        <div className="skills d-flex flex-column justify-content-center align-items-center w-75">
          <h1 className="text-primary">SKILLS</h1>
          <div className="d-flex justify-content-center align-items-stretch flex-wrap w-100">
            <div className="box d-flex justify-content-start align-items-center flex-column py-3 px-4 m-2">
              <h3>Front-End</h3>
              <div className="boxLine"></div>
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="col d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Languages :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">HTML5</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">CSS3</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">JAVASCRIPT (ES6+)</li>
                  </ul>
                </div>
                <div className="col d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Libraries :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">jQuery</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">SASS</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Bootstrap</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">React.js</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Framer motion</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box d-flex justify-content-start align-items-center flex-column py-3 px-4 m-2">
              <h3>Back-End</h3>
              <div className="boxLine"></div>
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Languages :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">Node.js</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">PHP</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Databases :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">MongoDB</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">SQL Server</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Frameworks :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">Express</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box d-flex justify-content-start align-items-center flex-column py-3 px-4 m-2">
              <h3>OTHERS</h3>
              <div className="boxLine"></div>
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Languages :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">C++</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">JAVA</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Python</li>
                  </ul>
                </div>
                <div className="d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Frameworks :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">JAVA EE</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">.NET Framework</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box d-flex justify-content-start align-items-center flex-column py-3 px-4 m-2">
              <h3>Tools</h3>
              <div className="boxLine"></div>
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="col d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Design :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">Photoshop</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Figma (UX/UI design)</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Draw.io (diagrams)</li>
                  </ul>
                </div>
                <div className="col d-flex justify-content-start align-items-start flex-column p-2 m-1">
                  <h5 className="text-nowrap">Development :</h5>
                  <ul className="list-group">
                    <li className="list-group-item border-0 p-0 text-nowrap">NPM</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">GIT/GITHUB</li>
                    <li className="list-group-item border-0 p-0 text-nowrap">Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  
}

export default Aboutme;