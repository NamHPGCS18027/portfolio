import React from 'react'
import './Project.css'
import { motion } from "framer-motion";

function Project() {
  return (
    <div className='containerproject' id='Project'>
      <div className='titleproject' data-aos="flip-left">My Project</div>
      <div>
        <motion.div className='projectcard' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} data-aos="fade-right" data-aos-duration="600">
            <div>Project Name :  Collecting ideas from staff in a large University.</div>
            <div>
              Detail : <br/>
              - Font-End: HTML, CSS, JS, React Hooks, Fetch API.<br/>
              - Back-End: C#, .NET, SQLite.
            </div>
            <div>
              Time : 01/2022 – 04/2022
            </div>
            <a href="https://github.com/NamHPGCS18027/Enterprise-Web-HoNam-.git">
              GitHud : https://github.com/NamHPGCS18027/Enterprise-Web-HoNam-.git
            </a>
        </motion.div>
        <motion.div className='projectcard' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} data-aos="fade-left" data-aos-duration="600">
            <div>Project Name :  Resident Issue Management System (RIMS)</div>
            <div>
              Detail :<br/> 
              - Font-End: HTML, CSS, JS, React Hooks, Yarn, Fetch API.<br/>
              - Back-End: C#, .NET, SQLite.
            </div>
            <div>
              Time : 05/2022 – 11/2022
            </div>
            <a href='https://github.com/NamHPGCS18027/Osechill.git'>
              GitHud : https://github.com/NamHPGCS18027/Osechill.git
            </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Project