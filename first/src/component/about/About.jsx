import React from 'react'
import Nav from '../navigation/nav'
import './about.css'
import { Link } from 'react-router-dom';
import { FaLinkedin  } from "react-icons/fa";
import {FaSquareFacebook , FaSquareXTwitter } from "react-icons/fa6";
import Footer from '../footer/footer';

function About() {

  return (
    <>
      <div className='navigation'>
        <Nav/>
      </div>
      <div className='about'>
        <img src="/images/teams.jpg"/>
        <h1>Her's your LOGO story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos pariatur nisi illum veritatis, unde illo architecto earum nulla! Animi fugit accusamus molestiae tempora! Sequi illum assumenda sint error eveniet?</p>
      </div>
      <div className='aboutValues'>
        <h1>Our Values</h1>

      </div>
      <div className='aboutWork'>
        <h1>How to work</h1>

      </div>
      <div className='aboutTeam'>
        <h1>Our Team</h1>

      </div>
      <Footer/>


    </>
  )
}

export default About
