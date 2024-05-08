import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<Footer />
		</React.Fragment>
	)

};

export default Home;
