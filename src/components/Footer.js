import React from "react";

function Footer(props) {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light text-center font-weight-bold">
            Información de contacto
          </h2>
          <div className="row">
            <div className="col-xs-12 col-md-8 center-block">
              <li>Email: jhon.mario.8a@gmail.com</li>
              <li>Ubicación: Bogotá - Colombia</li>
              <li>Tel: (+57) 3116192217</li>
            </div>
            <div className="col-xs-12 col-md-4 center-block">
              <li>
                Linkedin:{" "}
                <a href="https://www.linkedin.com/in/jhon-mario-ochoa-lemus-3132b716a">
                  Jhon Mario Ochoa
                </a>
              </li>
              <li>
                Github: <a href="https://github.com/jhonM8a/">JhonM8a</a>
              </li>
              <li>
                Twitter:{" "}
                <a href="https://twitter.com/Jhon83777065">@Jhon83777065</a>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
