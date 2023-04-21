import React from 'react';

export const Jsproject = () => {
  const containers = {
    backgroundColor: "#065783",
    height: "600px",
    width: "650px",
    marginLeft: "450px",
    borderRadius: "15px",
    marginBottom: "100px",
    boxShadow: " 5px 15px 15px 15px #888888",
    color: "white",
  }
  const text={
    paddingLeft:"30px"
  }
  return (
    <div style={containers}>
      <hr></hr>
      <div style={text}>
        <div>1. Portfolio Application | Project Explanation (LOOM) | Github</div>
        <ul>
          <li>Personal details, projects description and social media links etc...</li>
          <li>Designed and deployed the React.</li>
          <li>Incorporated Dark mode feature using React js.</li>
        </ul>

      </div>
      <div style={text}>
        <div>1. Student Quiz websites | Github link</div>
        <ul>
          <li>Created a webpage for student login by entering details in inputs.</li>
          <li>Designed and deployed the data and stores in local storage.</li>
          <li>Incorporated quiz feature using JavaScript</li>
        </ul>

      </div>

      <div style={text}>
        <div>1. Furniture sale | github link</div>
        <div>
          <ul>
            <li>Created a webpage for selling a furniture.</li>
            <li>Designed and deployed the photos with price</li>
            <li>Incorporated searching things to get similar things feature using JavaScript.</li>
          </ul>
        </div>
      </div>
      <div style={text}>
        <div>1. Photo Studio websites (responsible website)</div>
        <div>
          <ul>
            <li>Created a webpage for photo Studio</li>
            <li>Designed and deployed the photos with price</li>
            <li>Incorporated searching things to get similar things feature using JavaScript.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
