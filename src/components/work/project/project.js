import React from 'react';
import $ from 'jquery';

import './project.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      project: this.props.projectObject,
      images: [
        {
          original: "https://firebase.google.com/images/social.png",
          thumbnail: "https://firebase.google.com/images/social.png"
          
        },
        {
          original: "https://www.gstatic.com/devrel-devsite/prod/v702c60b70d68da067f4d656556a48e4ab1cf14be10bb79e46f353f3fdfe8505d/firebase/images/touchicon-180.png",
          thumbnail: "https://www.gstatic.com/devrel-devsite/prod/v702c60b70d68da067f4d656556a48e4ab1cf14be10bb79e46f353f3fdfe8505d/firebase/images/touchicon-180.png"
        }
      ]
    }
  }

  setImages = ()=>{
    let images = [];
    this.state.project.imgs.forEach(url => {
      images.push({
        original: url,
        originalClass: 'img',
      })
    });

    this.setState({
      images
    })
  }

  setTextArea(e){
    e.target.style.height = `${e.target.scrollHeight}px`; 
  }

  componentDidMount(){
    this.setImages()
  }

  render(){
    return (
      <div className="Project">

        <div className="modal fade" id={`projectModal-${this.state.project.id}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close p-0" data-dismiss="modal">
                  <span className="h1 px-3">&times;</span>
                </button>              
              </div>

              <div className="modal-body">

                <div className="d-flex justify-content-center align-items-around flex-column">
                  <div className="d-flex justify-content-between align-items-start">

                  {/*---------- informations ---------- */}
                    <div className="infos d-flex justify-content-start align-items-start flex-column flex-grow-1 w-50">
                      <div className="d-flex justify-content-start align-items-start flex-column">
                        <h4 className="title">Title : {this.state.project.title}</h4>
                        <h5 className="date">Date : {this.state.project.date}</h5>
                        <div className="techContainer d-flex justify-content-center align-items-start flex-column w-100 my-2">
                          <h4>Technologies :</h4>
                          <div className="techs d-flex justify-content-start align-items-center flex-wrap w-100">
                            {
                              this.state.project.techs.map((tech, i)=>(
                                <h5 key={i} className="bg-primary rounded-pill text-white py-1 px-3 m-1">{tech}</h5>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>

                  {/*---------- images ---------- */}
                    <div className="imags d-flex justify-content-center align-items-center flex-grow-1">
                      <div className="imgsDisplayer d-flex justify-content-center align-items-center border border-primary border-3 bg-primary w-100">
                        <ImageGallery items={this.state.images} showPlayButton={false} showNav={true} showThumbnails={false} showFullscreenButton={false} />
                      </div>
                    </div>
                    
                  </div>
                {/*---------- description ---------- */}
                  <div className="desc d-flex justify-content-center align-items-start flex-column w-100 my-3">
                    <h4>Description :</h4>
                    <textarea className="border-primary border-2 rounded p-2 w-100" readOnly value={this.state.project.desc} onChange={this.setTextArea}>
                      
                    </textarea>
                  </div>

                {/*---------- links ---------- */}
                <div className="links d-flex justify-content-center align-items-start flex-column w-100 my-3">
                    <h4>Links :</h4>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                      {
                        this.state.project.links.map((link, i)=>(
                          <a key={i} className="btn btn-secondary rounded text-white text-decoration-none py-2 px-4 m-1" href={link.href} target="_blank">{link.name}</a>
                        ))
                      }
                    </div>
                  </div>

                </div>

              </div>
              
            </div>
          </div>
        </div>


      </div>
    )
  }
  
}

export default Project;