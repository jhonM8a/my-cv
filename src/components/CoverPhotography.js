import React from 'react'

function CoverPhotography(props){
    return(
        <div>
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <img src={process.env.PUBLIC_URL + '/photo.jpg'} className="rounded-circle" alt="potho" width="190" height="190"></img>
                            <h1 className="font-weight-light">Software Developer</h1>
                            <p className="lead">Hi welcome. I here to show you my CV web.</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CoverPhotography