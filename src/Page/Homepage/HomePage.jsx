import React from 'react'
import Edu from '../../body/edu/Edu'
import Intro from '../../body/intro/Intro'
import Project from '../../body/project/Project'
import Skill from '../../body/skill/Skill'
import Footer from '../../footer/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homepagecontainer'>
        <Intro/>
        <Skill/>
        <Edu/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default HomePage