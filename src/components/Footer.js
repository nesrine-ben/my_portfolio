import React from 'react'
import InstagraIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Link } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <p>Contacts: </p>
        <p>+21627289532-Manouba Tunisie</p>
        <p>nesssrina2019@gmail.com</p>
        <p> &copy; 2022 nesbenmed.tn</p>
    </div>
  );
}

export default Footer