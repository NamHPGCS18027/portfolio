import { React, useRef, useEffect, useState } from "react";
import "./Intro.css";
import BackGroundIntro from "../../img/Los diseños y animaciones de Laurent Batel.gif";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {Link} from 'react-scroll'

function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["Front-End Developer"];
  const [text, settext] = useState("");
  const [delta, setdelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    settext(updatedText);

    if (isDeleting) {
      setdelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true);
      setdelta(period);
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setdelta(300);
    }
  };

  return (
    <div className="Introcontainer" id="Intro">
      <div ref={ref}
        className="information"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="beginintro">Hi I'm Phuong Nam</h1>
        <h3 className="beginintro1">I'm The {text}</h3>
        <h4 className="beginintro3">
          I’m a hardworking and ambitious individual with a great passion for
          the Technology Industry. Being a Final Year Student of Information
          Technology at University of Greenwich Vietnam with great communication
          skills enabling me to effectively communicate with a wide range of
          people. I’m looking for a Fresher Frontend Developer position which I
          can put into practice my knowledge and experience, ultimately
          benefiting the operations of the organization that I work for.
        </h4>
        {/* <button className="connectbtn">Let's connect</button> */}
        <motion.div className="connectbtn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><Link to="Contacts" spy={true} smooth={true} offset={-100} duration={500}>Let's connect</Link></motion.div>
      </div>
      <div className="imgcontainer">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={BackGroundIntro}
            alt="background"
            className="backgrroundintro"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
