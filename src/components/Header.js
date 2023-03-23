import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import pinkBook from "../imgBooks/pinkBookIcon.jpg";
function Header(){

	const stylishHeader = {
		marginTop: "40pt",
		width: '100%',
		color: "black",
		fontFamily: "KiTestRings OutliNe",
		fontSize: '60pt'
	}
	return ( 
<header>
	<div className="header" style={stylishHeader}>
<h1 >Book Marked</h1>
<h2>social book-sharing</h2>
<img src={pinkBook}></img>
</div>
</header>	
	);
}

	export default Header;