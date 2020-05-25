import React from "react";

function ContentAbount() {
  return (
    <div>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-left">
              <section className="py-5">
                <h2 className="font-weight-light text-left font-weight-bold">
                  Resumen
                </h2>
                <div className="container">
                  <h5 className="font-weight-light">
                    Ingeniero de sistemas con más de 2 años de experiencia en el
                    desarrollo de software con habilidades en lenguages de
                    programación en back-end. Con trabajo colaborativo en grupos
                    de desarrollo, respetuoso y decidido en el continuo
                    aprendizaje en la industria de la tecnologia.
                  </h5>
                </div>
                <h2 className="font-weight-light text-left font-weight-bold">
                  Educación
                </h2>
                <ul>
                  <li>
                    {" "}
                    <h5 className="font-weight-light">
                      Bachiller Tecnico(2013)
                    </h5>{" "}
                    Colegio Capitan Miguel Lara - Colombia(Puerto Lopez-Meta)
                  </li>
                  <li>
                    {" "}
                    <h5 className="font-weight-light">
                      Ingenireo de sistemas(2018)
                    </h5>{" "}
                    Universidad de los Llanos - Colombia(Villavicencio-Meta)
                  </li>
                </ul>
                <h2 className="font-weight-light text-left font-weight-bold">
                  Competencias
                </h2>
                <ul>
                  <li>
                    <h5 className="font-weight-light">
                      Desarrollo enfocado al Back-end
                    </h5>
                    <ul>
                      <div className="row">
                        <div className="col-xs-12 col-md-8">
                          <li>
                            Java: Spring-Context, Spring-Data, Spring-Security
                          </li>
                          <li>Node: Express</li>
                          <li>Git</li>
                          <li>GitLab</li>
                        </div>
                        <div className="col-xs-12 col-md-4">
                          <li>Docker</li>
                          <li>Unix</li>
                          <li>Manejo de BD relacioanles</li>
                          <li>CI/CD</li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li>
                    <h5 className="font-weight-light">
                      Conocimientos en desarrollo Front(React, JavaScript, CSS)
                    </h5>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ContentAbount;
