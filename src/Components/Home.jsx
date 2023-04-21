import React from 'react';
import MyImg from '../images/unnamed.jpg';
import '../App.css';
export const Home = () => {

    const card={
        boxSizing:"box",
        height: "550px",
        color:"white",
        border:"2px solid black",
        borderRadius:"15px",
        textAling:"center",
        margin:"5px 5px",
        backgroundColor:"#065783",
    }
    const cardDesc={
           fontSize:"20px", 
           color:"white",
            padding:"20px",
        paddingLeft:"70px",

        }
        const center={
            justifyContent:"center",
            alignItem:"center",
    
            display:"flex",
            padding:"150px "
        }
        const socialink={
        }
        const link={
            padding:"15px",
            // border:"2px solid green",
            borderRadius:"50%",
    
        }
            const links={
                display:"flex",
                flexDirection:"row",
                listStyleType:"none",
            }
            const descriptions={
                listStyleType:"none",
            }
            const name={
                color:"yellow",
                fontSize:"30px",
            }
            // const photo={
            //     border:"2px solid red",
            //     borderRadius:"50%",
            //     height:"300px",
            //     paddingRight:"20px",
            //     width:"250px",
            // }
            const a={
                textDecoration:"none",
                color:"yellow"

    
            }
            const img={
                width:"310px",
                height:"300px",
                border:"2px solid black",
                borderRadius:"15px",
            }
            const centers={
                justifyContent:"center",
                alignItem:"center",
                display:"flex",
                padding:"10px"
            }
            
    
        // const button={
        //     fontSize: "15px",
        //     border:"2px solid black",
        //     borderRadius:"5px",
        //     backgroundColor:"white",
        //     padding:"3px 3px"
        // }

  return (
    <div>
    <div style={card}>
            <div style={center}>
            <div><img src={MyImg} alt='react img' style={img}/></div>
            <div style={cardDesc}>
                <b>Hi,</b> i'm <span style={name}>Sathish A</span><br></br>
                I'm a <b>Full Stack Developer</b>
            <div>
                <ul style={descriptions}>
                    <li>daily Learner</li>
                    <li>based in the india</li>
                    <li>Fresher in Web Development</li>
                    <li>sathishsurya462000@gmail.com</li>
                </ul>
            </div>
            <div style={socialink}>
                <ul style={links}>
                    <li style={link}><a href='https://github.com/sathishjarvis' target='blank' style={a}>github</a></li>
                    <li style={link}><a href='https://www.linkedin.com/in/sathish-surya-8715b01a3/' target='blank' style={a}>instagram</a></li>
                    <li style={link}><a href='https://www.linkedin.com/in/sathish-surya-8715b01a3/' target='blank' style={a}>linkedin</a></li>
                    <li style={link}><a href='https://github.com/sathishjarvis' target='blank' style={a}>Facebook</a></li>
                </ul>
            </div>
            </div>
            </div>            
        </div>
        <div style={centers}>
        this is my frist React Project
        </div>
        <div>

        </div>
        <div style={centers}>
            <h4>© Copyright sathish. All right reserved.</h4>
            <h4>Freelancer.</h4>
            <h4>mostly speed and accuracy</h4>
        </div>
        </div>        
  )
}
