import React from 'react';
// Imports
import FBIcon from '../../assets/icons/facebook-icon.svg';
import YTIcon from '../../assets/icons/youtube-icon.svg';

const Footer = () => ( 
    <footer>
        <div class="btn-container">
            <a href="#info-contact" class="contact-btn">Contact Us Today!</a>
        </div>

        <div class="social-container">
            <img src={FBIcon} height="30px"/>
            <img src={YTIcon} height="30px"/>
        </div>

        <span>Extreme Rage Park</span>
        <span>Copyright &copy; 2020</span>

    </footer>
);

export default Footer;