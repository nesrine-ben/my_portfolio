import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'> 
          <h2>Hi My Name is Nesrine</h2>
          <div className='prompt'>
            <p>
              A front-end developper
            </p>
            <a href="https://www.linkedin.com/in/nesrine-ben-mohamed/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://github.com/nesrine-ben" target='_blank' rel="noreferrer"><GithubIcon /></a>
          </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS
              </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
            NodeJS, .NET, MySQL, Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#,  C++, TypeScript</span>
          </li>

        </ol>
         </div>
    </div>
  )
}

export default Home