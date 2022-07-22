import React from 'react'
import InstagraIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagraIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2022 nesbenmed.tn</p>
    </div>
  );
}

export default Footer