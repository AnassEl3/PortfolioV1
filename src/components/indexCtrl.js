import React from 'react';
import $ from 'jquery';

import './indexCtrl.scss';

import Header from './header/header.js';
import Aboutme from './aboutme/aboutme';
import Navigation from './navigation/navigation';
import Work from './work/work';
import Resume from './resume/resume';
import Contact from './contact/contact';
import Footer from './footer/footer';

class IndexCtrl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  render(){
    return (
      <div className="IndexCtrl bg-primary">
        <Header />
        <Navigation />
        <Aboutme />
        <Work />
        <Resume />
        <Contact />
        <Footer />
      </div>
    )
    
  }
  
}

export default IndexCtrl;