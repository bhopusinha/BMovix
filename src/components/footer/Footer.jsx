import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon" onClick={()=>{
                        window.location='https://www.facebook.com/bhupendra.sinha.3363';
                    }}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={()=>{
                        window.location='https://instagram.com/bhupendra_sinha_002?igshid=OTJhZDVkZWE=';
                    }}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={()=>{
                        window.location='https://twitter.com/Bhupend48804052';
                    }}>
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={()=>{
                        window.location='https://www.linkedin.com/in/bhupendra-sinha-151109239';
                    }}>
                        <FaLinkedin/>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
