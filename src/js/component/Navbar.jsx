import React from "react";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="container-fluid navbar fixed-top navbar-expand-lg bg-dark">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-secondary " href="#">About</a>
                        <a className="nav-link text-secondary" href="#">Services</a>
                        <a className="nav-link text-secondary" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
