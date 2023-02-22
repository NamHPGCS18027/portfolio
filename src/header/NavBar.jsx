import { React, useState } from "react";
import logo1 from "../img/atom.png";
import { Link } from "react-scroll";
import "./NavBar.css";
import iconBar from "../img/icons8-bar-67.png";

function NavBar() {
  const [openNav, setopenNav] = useState(false);

  return (
    <div className="Navbarcontainer">
      <div className="NavbarItem">
        <img src={logo1} alt="loading..." className="App-logo" />
        <Link
          to="Intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="NItem1"
        >
          N@m
        </Link>
        <Link
          to="Contacts"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="NItem"
        >
          Contacts
        </Link>
        <Link
          to="Project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="NItem"
        >
          Project
        </Link>
        <Link
          to="edu"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="NItem"
        >
          Edu
        </Link>
        <Link
          to="Technical_Skill"
          spy={true}
          smooth={true}
          offset={-180}
          duration={500}
          className="NItem"
        >
          Knowledge
        </Link>
        <img
          className="iconbar"
          src={iconBar}
          alt="icon"
          onClick={() => setopenNav(!openNav)}
        />
      </div>
      {openNav && (
        <div className="nvcontauner">
          <div>
            <Link
              to="Intro"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="NItemnv"
              onClick={() => setopenNav(!openNav)}
            >
              Intro
            </Link>
          </div>
          <div>
            <Link
              to="Technical_Skill"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="NItemnv1"
              onClick={() => setopenNav(!openNav)}
            >
              knowledge
            </Link>
          </div>
          <div>
            <Link
              to="edu"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="NItemnv2"
              onClick={() => setopenNav(!openNav)}
            >
              Edu
            </Link>
            <div>
              <Link
                to="Project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="NItemnv2"
                onClick={() => setopenNav(!openNav)}
              >
                Project
              </Link>
            </div>
            <div>
              <Link
                to="Contacts"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="NItemnv3"
                onClick={() => setopenNav(!openNav)}
              >
                Contacts
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
