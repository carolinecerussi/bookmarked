import React from "react";
import coffeebag from "../components/coffeebag.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../src/Navigation/Navbar";
import people from "../img/people.png";
function Header(){

	const stylishHeader = {
		width: '100%',
		color: "black",
		fontFamily: "Aretha Bridge",
		fontSize: "90pt",

		backgroundImage: {coffeebag}
	}
	return ( 
	<header>
	<h1 style={stylishHeader}>Coffee Dreams
</h1>
<Navbar />
<img src={people} />
</header>	

	);
}

	export default Header;