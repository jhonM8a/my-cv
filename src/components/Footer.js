import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light text-center font-weight-bold">
            Info contact
          </h2>
          <div className="row">
            <div className="col-xs-12 col-md-8 center-block">
              <li>Email: jhon.mario.8a@gmail.com</li>
              <li>Ubicación: Cali - Colombia</li>
              <li>Tel: (+57) 3116192217</li>
            </div>
            <div className="col-xs-12 col-md-4 center-block">
              <li>
                Linkedin:{" "}
                <Link to="https://www.linkedin.com/in/jhon-mario-ochoa-lemus-3132b716a">
                  Jhon Mario Ochoa
                </Link>
              </li>
              <li>
                Github: <Link to="https://github.com/jhonM8a/">JhonM8a</Link>
              </li>
              <li>
                Twitter:{" "}
                <Link to="https://twitter.com/Jhon83777065">@Jhon83777065</Link>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
