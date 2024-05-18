import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";
import { Card } from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<div className="row row-cols-auto justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</React.Fragment >
	)

};

export default Home;
