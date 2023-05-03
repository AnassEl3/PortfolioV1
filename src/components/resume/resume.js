import React from 'react';
import $ from 'jquery';

import './resume.scss';
import {storage} from '../../firebase/config'

class Resume extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      resume: {
        ar: "",
        fr: "",
        en: "",
      }
    }
  }

  getLinks = async ()=>{
    let docArRef = storage.ref().child(`resume/ar`);
    let docFrRef = storage.ref().child(`resume/fr`);
    let docEnRef = storage.ref().child(`resume/en`);

    let resume = this.state.resume;
    resume.ar = await docArRef.getDownloadURL();
    resume.fr = await docFrRef.getDownloadURL();
    resume.en = await docEnRef.getDownloadURL();

    this.setState({
      resume
    })
  }

  componentDidMount(){
    this.getLinks()
    
  }

  render(){
    return (
      <div id="resume" className="Resume d-flex justify-content-center align-items-center flex-column m-3 p-2 bg-white rounded">
        <h1 className="text-primary text-center">MY RESUME</h1>
        <div className="resumeText  d-flex justify-content-center align-items-center">
            <p className="text-center mb-0">
                For more information about me, you can download my resume :
            </p>
        </div>
        <div className="resumeBtns d-flex justify-content-center align-items-center flex-column m-1">
            <a className="resumeBtn text-decoration-none text-white btn-primary rounded-pill m-2 py-2 px-4" target="_blank" href={this.state.resume.fr}>In Frensh</a>
            {/*<a className="resumeBtn text-decoration-none text-white btn-primary rounded-pill m-2 py-2 px-4" target="_blank" href={this.state.resume.en}>In English</a>*/}
        </div>
      </div>
    )
  }
  
}

export default Resume;