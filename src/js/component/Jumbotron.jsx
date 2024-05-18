import React from "react";

export const Jumbotron = () => {
    return (

        <React.Fragment>
            <div className="container jumbotron bg-light p-5">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead"></p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat enim harum fugit exercitationem. Cum ad ab sit optio dicta eos numquam deleniti harum. Maiores mollitia molestiae esse facilis laudantium?</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </React.Fragment>
    )
};

