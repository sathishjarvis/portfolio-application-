import React from 'react';
import '../App.css';
// import { Document, Page } from 'react-pdf';
// import {Mydoc} from '../images/Sathish resume 04 23.pdf';
export const About = () => {
  const container ={
    backgroundColor:"#065783",
    height:"300px",
    width:"700px",
    marginLeft:"450px",
    borderRadius:"15px",
    marginBottom:"100px",
    boxShadow:" 5px 15px 15px 15px #888888",
    color:"white",
    marginTop:"10px",
  }
  const topper={
   backgroundColor:"grey", 
  }
  const traffic={
    display:"flex",
  }
  const red={
    border:"1px solid red",
    height:"20px",
    marginLeft:"2px",
    width:"20px",
    marginTop:"4px",
    borderRadius:"50%",
    backgroundColor:"red"
  }
  const yellow={
    border:"1px solid yellow",
    height:"20px",
    margin:"2px 2px 2px 2px",
    width:"20px",
    marginTop:"4px",
    borderRadius:"50%",
    backgroundColor:"yellow"

  }
  const green={
    border:"1px solid green",
    height:"20px",
    margin:"2px 2px 2px 2px",
    width:"20px",
    marginTop:"4px",
    borderRadius:"50%",
    backgroundColor:"green"
  }
  const text={
    paddingLeft:"70px",
  }
  const cd={
    color:"yellow"
  }
  const resume={
    marginLeft:"450px",
    paddingTop:"40px",
  }
  const button={
    padding:"5px 5px 5px 5px",
  }
  return (
    <div>
      <div style={resume}>
      {/* <Document file={Mydoc}>
      <Page pageNumber={1} />
    </Document> */}
      <button style={button}><a href='../images/Sathish resume 04 23.pdf' target='_blank'>download CV</a></button>
      </div>
    <div style={container}>
      <div style={topper}>
        <div style={traffic}>
          <div style={red}></div>
          <div style={yellow}></div>
          <div style={green}></div>
        </div>
      </div>
      <div style={text}>
        <h5>PS E:\&#x003E; <span style={cd}>cd</span> year (jan 2023)</h5>
        <h5>PS E:\year (jan 2023)\&#x003E; <span style={cd}>ls</span></h5>
        <h5>Full stack Developing course at Timespro Institute.</h5>
        <h5>I completed Projects named as [Student Quiz], BMI calculator</h5>
        <h5>I used HTML, CSS and JAVA SCRIPT is used to store details in local storage</h5>
      </div>
    </div>

    <div style={container}>
      <div style={topper}>
        <div style={traffic}>
          <div style={red}></div>
          <div style={yellow}></div>
          <div style={green}></div>
        </div>
      </div>
      <div style={text}>
        <h5>PS E:\&#x003E; <span style={cd}>cd</span> year (jan 2021)</h5>
        <h5>PS E:\year (jan 2021)\&#x003E; <span style={cd}>ls</span></h5>
        <h5>Bachelor of engineering (computer science and engineering), Anna University</h5>
        <h5>I have completed my graduation in a computer science engineering major with a 7.2 CGPA.</h5>
        <h5>I completed Project named as [Human action detection using gmm and svm].</h5>
      </div>
    </div>
    <div style={container}>
      <div style={topper}>
        <div style={traffic}>
          <div style={red}></div>
          <div style={yellow}></div>
          <div style={green}></div>
        </div>
        
      </div>
      <div style={text}>
        <h5>PS E:\&#x003E; <span style={cd}>cd</span>Skills</h5>
        <h5>PS E:\Skills\&#x003E; <span style={cd}>ls</span></h5>
        <h5>• HTML    • CSS    • Javascript</h5>
        <h5> • React JS    • Node JS    • XML(epsilon)</h5>
        <h5>• Microsoft word    • Microsoft excel</h5>
        <h5>• Communication    • Leadership    • Team management</h5>
      </div>
    </div>

    </div>
  )
}