import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";

function Home(props) {
  return (
    <div className="container">
      <h2 className="headers-home">ABOUT ME</h2>
      <p className="secciones">
        Hi everyone my name is Gonzalo, I am a 28-years-old IT student,
        currently working as a QA Engineer. I love rainy days, coffee, craft
        beer, going for strolls, and reading (not the documentation though
        haha).
      </p>
      <p className="secciones">
        I'm interested in everything related to creativity, things like music
        production, photography, videography and I'm specially interested in
        graphic design, which is why I would eventually like to work as a front
        end developer, I feel like that is where my two passions could merge
        into one.
      </p>
      <p className="secciones">
        I regard communication as one of my biggest strengths, which is why I
        consider myself to be very good at solving problems and working in
        teams.
      </p>

      <br></br>
      <h2 className="headers-home">WORK EXPERIENCE</h2>
      <div className="margin-bottom">
        <h3 className="subheader-home">QA ENGINEER</h3>
        <p className="extra-info">Blue Trail Software: Jun 2019 - Currently</p>
        <p className="sub-secciones">
          I currently work as a QA Engineer, designing and executing functional
          and performance tests.
        </p>
        <p className="sub-secciones">
          Despite my short time working in the industry, I have worked as a QA
          Lead in several projects, and have experience creating and making sure
          that the test plan is executed.
        </p>
        <br></br>

        <h3 className="subheader-home">CREATIVE COLLABORATOR</h3>
        <p className="extra-info">Noventaynueve°: May 2018 - Currently</p>
        <p className="sub-secciones">
          Noventaynueve° is a digital marketing agency, in where I help with the
          creation of audiovisual content during the weekends.
        </p>
        <br></br>

        <h3 className="subheader-home">
          ADMINISTRATIVE ASSISTANT AND SALES ADVISOR
        </h3>
        <p className="extra-info">Tejana: Dec 2009 - Jun 2019</p>
        <p className="sub-secciones">
          Tejana is a pharmacy in where my main rol was administrative, but, I
          also worked with tasks related to: stock control, analysis and control
          of expirations, customer service, and sales advisor.
        </p>
        <br></br>

        <h3 className="subheader-home">SALES ADVISOR</h3>
        <p className="extra-info">Secaspe Games: Nov 2012 - Dec 2013</p>
        <p className="sub-secciones">
          At Secaspe Games I worked as a sales advisor, selling videogames and
          computer supplies.
        </p>
      </div>
      <br></br>

      <h2 className="headers-home">STUDY</h2>
      <div className="margin-bottom">
        <h3 className="subheader-home">INFORMATION TECHNOLOGY ANALYST</h3>
        <p className="sub-secciones">ORT University - March 2019 - Present</p>
        <br></br>

        <h3 className="subheader-home">MARKETING ANALYST</h3>
        <p className="sub-secciones">UTU Prado - 2015 - 2016 (Pending exam) </p>
        <br></br>

        <h3 className="subheader-home">HIGH SCHOOL DIPLOMA (IN SCIENCE)</h3>
        <p className="sub-secciones">San Pablo school - 2014</p>
        <br></br>
      </div>

      <h2 className="headers-home">LANGUAGES</h2>
      <div className="margin-bottom">
        <h3 className="subheader-home">SPANISH</h3>
        <p className="sub-secciones">Native speaker.</p>
        <br></br>
        <h3 className="subheader-home">ENGLISH</h3>
        <p className="sub-secciones">Excelent level.</p>
        <p className="sub-secciones">
          Cambridge English: Proficiency (CPE) – 2018
        </p>
      </div>

      <div className="mi-contenedor-2 container margin-bottom">
        <div className="hijo1">
          <h2 className="headers-home">PESRONAL INFORMATION</h2>
          <table className="table secciones">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>28</td>
              </tr>
              <tr>
                <td>Nacionality:</td>
                <td>Uruguayan</td>
              </tr>
              <tr>
                <td>E-mail:</td>
                <td>gonzarocha21@gmail.com</td>
              </tr>
              <tr>
                <td>Linkedin:</td>
                <td>
                  <a href="https://www.linkedin.com/in/gonzarocha/">
                    Click here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
        </div>
        <div className="hijo2">
          <h2 className="headers-home">SOFTWARE SKILLS</h2>
          <ul className="secciones">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>ADO.NET</li>
            <li>SQL</li>
            <li>React.js (Basic)</li>
            <li>Java (Basic)</li>
          </ul>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Home;
