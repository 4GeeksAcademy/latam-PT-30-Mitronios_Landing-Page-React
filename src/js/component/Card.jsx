import React from "react";

export const Card = () => {
    return (
        <React.Fragment>

            <div className="col card text-center my-4 mx-1" style={{ width: "320px", height: "400px" }}>
                <img src="..." className="card-img-top img-fluid" alt="..." style={{ width: "320px", height: "400px" }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </React.Fragment>
    )
};