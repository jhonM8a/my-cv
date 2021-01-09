import React from "react";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContentTrayectory(proops) {
  return (
    <div>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">Open International</h1>
              <p className="lead">Software Developer Standar Full time</p>
              <p className="small">2018 - Present</p>
              <div className="arrow">
                <a href="#sectionTwo">
                  <FontAwesomeIcon icon={faArrowAltCircleDown} size={"6x"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-100" id="sectionTwo">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">
                EAAV ESP Villavicencio - Meta, Colombia
              </h1>
              <p className="lead">Inter Software Developer</p>
              <p className="small">2017 - 2018</p>
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowAltCircleDown} size={"6x"} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ContentTrayectory;
