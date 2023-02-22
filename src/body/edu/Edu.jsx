import React from "react";
import "./Edu.css";
import edu from "../../img/OIP.jpg";
import edu1 from "../../img/R.jpg";

function Edu() {
  return (
    <div className="backgroundedu" id="edu">
      <div className="skillstitle" data-aos="zoom-out" data-aos-duration="1200">
        Education
      </div>
      <div className="educontainer">
        <div className="value1edu" data-aos="fade-right">
          <div className="cardeducontainer">
            <img className="imgedu" src={edu} alt="" />
            <div className="cardtaitle">
              University of Greenwich Viet Nam <br />( 2018 - 2023 )
              <div className="btnview">
                <a
                  rel="noreferrer"
                  className="edulink"
                  target="_blank"
                  href="https://greenwich.edu.vn/en/english/"
                >
                  View my school
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="value2edu">
          <div className="informationedu" data-aos="fade-up-left">
          <div className="edu1">Greenwich Vietnam</div>
          <div>Study : (2018 - 2023)</div>
          <div>Final year student</div>
          <div className="edu1">Student Name : Ho PHuong Nam</div>
          <div className="edu1">Information Technology</div>
          <div>
            Greenwich Vietnam is an international alliance between the
            University of Greenwich, United Kingdom and FPT University, Vietnam.
            Established in 2009, it has had a global network of more than 15.000
            students and alumni from over 12 countries in the world. Its
            programs, academic teams and facilities are accredited by experts
            from the United Kingdom and from the University of Greenwich.{" "}
          </div>
          <div className="imgfootteredu"><img className="imgedu1" src={edu1} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edu;
