import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaSteam} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#top" className='footer__logo'>Nick Fortis</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/nick.fortis/"><FiInstagram/></a>
        <a href="https://twitter.com/nick_fortis"><IoLogoTwitter/></a>
        <a href="https://steamcommunity.com/id/BladeGalladeFTW/"><FaSteam/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nick Fortis. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer