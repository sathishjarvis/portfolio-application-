import { NavLink } from 'react-router-dom';
import '../App.css';
import React from 'react';
// import { Home } from './Home';

const Routelinks = (props) => {

    const navbar = {
        display: "flex",
        backgroundColor: "#022c43",
        // margin:"15px 15px",
    }
    const logo = {
        paddingLeft: "25px",
        paddingRight: "250px",
        fontSize: "50px",
        cursor:"pointer",
        color:"white"
    }
    const navitem = {
        paddingRight: "150px",
        alingItem: "center",
        fontSize: "20px",
        textDecoration:"none",
        color:"white"

    }
    const navitems = {
        display: "flex",
        flexDirection: "row",
        listStyleType: "none",
        marginTop: "35px",
        justifyContent: "center",
    }
    return (
        <div style={navbar}>
            <div style={logo}>logo</div>
            <div>
                <ul style={navitems}>
                    <li><NavLink style={navitem} to='home'>Home</NavLink></li>
                    <li><NavLink style={navitem} to='about'>About</NavLink></li>
                    <li><NavLink style={navitem} to='jsproject'>Jsproject</NavLink></li>
                    <li><NavLink style={navitem} to='contact'>Contact</NavLink></li>
                    <li><NavLink style={navitem} to='darkmode'>Darkmode</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Routelinks;