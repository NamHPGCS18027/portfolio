import React from "react";
import "./Footer.css";
import avatar from "../img/5b99005c6deea2f7425e47ddde8b0bf5.gif";
import location from "../img/location.png";
import mail from "../img/mail.png";
import smartphone from "../img/smartphone.png";
import facebook from "../img/facebook.png";

function Footer() {
  return (
    <div className="footercontainer" id="Contacts">
      <div className="avatabackground">
        <img className="avataimg" src={avatar} alt="avatar" />
      </div>
      <div className="contackbackground">
        <div className="contactsinfo"> My Contacts : </div>
        <div className="contact">
          <div data-aos="fade-left"><img className="imgfooter" src={mail} alt="mail" /></div>
          <div data-aos="fade-left"><img className="imgfooter" src={smartphone} alt="smartphone" /></div>
          <div data-aos="fade-left"><img className="imgfooter" src={location} alt="location" /></div>
          <div ><img className="imgfooter" src={facebook} alt="facebook" /></div>
        </div>
        <div className="contact">
          <div className="contractdetail" data-aos="fade-left"><a className="fblink" href="mailto:namhophuong1@gmail.com">: namhophuong1@gmail.com</a></div>
          <div className="contractdetail" data-aos="fade-left"><a>: 0976750578</a></div>
          <div className="contractdetail" data-aos="fade-left"><a>: Ho Chi Minh</a></div>
          <div className="contractdetail" ><a className="fblink" target="_blank" href="https://www.facebook.com/nam.hophuong.12/">: /nam.hophuong.12</a></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
