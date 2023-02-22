import { React, useEffect, useState, useRef } from "react";
import "./Skill.css";
import { motion } from "framer-motion";
import reactlogo from "../../img/react.png";
import scss from "../../img/scss.jpg";
import reactnative from "../../img/reactnative.jpg";
import node from "../../img/node.png";
import mysql from "../../img/mysql.jpg";
import html from "../../img/html.jpg";
import css from "../../img/css.jpg";

function Skill() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="skillscontainer" id="Technical_Skill" data-aos="fade-up">
      <div className="skillstitle" data-aos="zoom-out" data-aos-duration="1200">
        Knowledge
      </div>
      <motion.div ref={carousel} className="backgroundtad">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={reactlogo} alt="" />
            <div className="tagname">Reactjs</div>
            <div className="value">
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library for building user
              interfaces based on components. It is maintained by Meta (formerly
              Facebook) and a community of individual developers and companies.
              React can be used as a base in the development of single-page,
              mobile, or server-rendered applications with frameworks like
              Next.js. However, React is only concerned with the user interface
              and rendering components to the DOM, so creating React
              applications usually requires the use of additional libraries for
              routing, as well as certain client-side functionality.
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={reactnative} alt="" />
            <div className="tagname">React Native</div>
            <div className="value">
              React Native is an open source JavaScript Mobile framework from
              Facebook specially designed to build native mobile apps for iOS
              and Android. React Native is based on ReactJS JavaScript library
              that helps to build the user interface for mobile platforms. React
              Native can be directly used inside an existing IOS or android app
              or you can build a native app right from scratch. At present React
              Native is used with some popular apps like Facebook mobile app,
              Instagram, Pinterest, Skype, etc. Some important features of React
              Native that makes it a very popular mobile development app today
              are − Cross Platform Support
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={node} alt="" />
            <div className="tagname">NodeJS</div>
            <div className="value">
              Node.js is a cross-platform, open-source server environment that
              can run on Windows, Linux, Unix, macOS, and more. Node.js is a
              back-end JavaScript runtime environment, that runs on the V8
              JavaScript Engine, and executes JavaScript code outside a web
              browser. Node.js lets developers use JavaScript to write command
              line tools and for server-side scripting. The functionality of
              running scripts server-side produces dynamic web page content
              before the page is sent to the user's web browser.
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={mysql} alt="" />
            <div className="tagname">MySQL</div>
            <div className="value">
              MySQL is the world’s most popular open source database. According
              to DB-Engines, MySQL ranks as the second-most-popular database,
              behind Oracle Database. MySQL powers many of the most accessed
              applications, including Facebook, Twitter, Netflix, Uber, Airbnb,
              Shopify, and Booking.com. Since MySQL is open source, it includes
              numerous features developed in close cooperation with users over
              more than 25 years. So it’s very likely that your favorite
              application or programming language is supported by MySQL
              Database.
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={html} alt="" />
            <div className="tagname">HTML</div>
            <div className="value">
              HTML (HyperText Markup Language) is the code that is used to
              structure a web page and its content. For example, content could
              be structured within a set of paragraphs, a list of bulleted
              points, or using images and data tables. As the title suggests,
              this article will give you a basic understanding of HTML and its
              functions.
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={css} alt="" />
            <div className="tagname">CSS</div>
            <div className="value">
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML or XML (including XML dialects such as SVG,
              MathML or XHTML). CSS is a cornerstone technology of the World
              Wide Web, alongside HTML and JavaScript. CSS is designed to enable
              the separation of content and presentation, including layout,
              colors, and fonts.This separation can improve content
              accessibility; provide more flexibility and control in the
              specification of presentation characteristics,...
            </div>
          </div>
          <div
            className="tagskill"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1200"
            data-aos-duration="1200"
          >
            <img className="imgskill" src={scss} alt="" />
            <div className="tagname">SCSS</div>
            <div className="value">
              Syntactically Awesome Style Sheet is the superset of CSS. SCSS is
              the more advanced version of CSS. SCSS was designed by Hampton
              Catlin and was developed by Chris Eppstein and Natalie Weizenbaum.
              Due to its advanced features it is often termed as Sassy CSS. SCSS
              have file extension of .scss.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skill;
