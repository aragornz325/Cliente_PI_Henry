import React from 'react';
import '../assets/styles/Footer.scss'

import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { FaFire } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer-container'>
     <div className="iconosSocial">
     <FaFacebook
     className='iconmedia'
     color='white' />

     <FaInstagram
     className='iconmedia'
     color='white' />

     <FaYoutube
     className='iconmedia'
     color='white' />

     <FaTwitter
     className='iconmedia'
     color='white' />
     
     <FaLinkedin
     className='iconmedia'
     color='white' />


      

     </div>
    </div>
  );
}

export default Footer;
