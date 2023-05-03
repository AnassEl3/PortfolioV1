import React from 'react';
import $ from 'jquery';

import './work.scss';
import projectImg from './media/projectDefaultImg.png';
import Project from './project/project';

import { db } from '../../firebase/config';

class Work extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  getProjects = ()=>{
    db.collection("projects").get().then((snapshot)=>{
      let data = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      
      this.setState({
        projects: data
      });
    });
  }

  componentDidMount(){
    this.getProjects();
  }

  render(){
    return (
      <div id="work" className="Work d-flex flex-column justify-content-center align-items-center m-3 p-2 bg-white rounded">
        <h1 className="text-primary text-center">RECENT WORK</h1>

        <div className="projects d-flex justify-content-center align-items-start flex-wrap">
          {
            (()=>{
              if(this.state.projects.length == 0){
                return(
                  <div className="noProjectFound p-3">
                    <p>
                      Projects will be added soon ...
                    </p>
                  </div>
                )
              }else{
                this.state.projects.sort((a, b)=>{
                  return new Date(b.date) - new Date(a.date);
                });
                return(
                  this.state.projects.map((project) => (
                    <div key={project.id} className="d-flex justify-content-center align-items-center flex-column">
                      <a className="project d-flex justify-content-center align-items-center flex-column p-2 my-1 mx-2 text-decoration-none text-black-50 btn" data-toggle="modal" data-target={`#projectModal-${project.id}`}>
                        <div className="projectImg d-flex justify-content-center align-items-center rounded">
                            <img className="rounded" src={(()=>{
                              if(project.thumbnail == ""){
                                return projectImg
                              }else{
                                return project.thumbnail
                              }
                            })()}></img>
                        </div>
                        <div className="projectTitle py-1">
                            <h5>{project.title}</h5>
                        </div>
                        <div className="projectDate">
                            <h5>{project.date}</h5>
                        </div>
                      </a>
                      <Project projectObject={project}/>
                    </div>
                    )
                  )  
                )
              }
            })()  
          }

        
          

        </div>
      </div>
    )
  }
  
}

export default Work;