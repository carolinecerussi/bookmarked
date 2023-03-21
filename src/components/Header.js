import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import storeFront from "../img/simpleFront.png";
function Header(){

	const stylishHeader = {
		marginTop: "40pt",
		width: '100%',
		color: "black",
		fontFamily: "Aretha Bridge",
		fontSize: '60pt'
	}
	return ( 
<header>
<h1 style={stylishHeader}>Coffee Dreams</h1>
<img src={storeFront}></img>
</header>	
	);
}

	export default Header;