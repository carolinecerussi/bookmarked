import React from "react";
import coffeebag from "../components/coffeebag.jpg";

function Header(){

	const stylishHeader = {
		width: '100%',
		color: "black",
		fontFamily: "Aretha Bridge",
		fontSize: "90pt",

		backgroundImage: {coffeebag}
	}
	return ( 
		<h1 style={stylishHeader} >Coffee World
</h1>
	);
}

	export default Header;