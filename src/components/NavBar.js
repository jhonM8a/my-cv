import React from 'react'

function NavBar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Jhon M. Ochoa L.</a>
                    <button className="navbar-toggler" type="button" onClick={props.handleOnclick} data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={(props.showCollpase ? 'show' : '') + ' collapse navbar-collapse'} id="navbarResponsive" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <span className="sr-only">
                                        (Current)
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About me</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar