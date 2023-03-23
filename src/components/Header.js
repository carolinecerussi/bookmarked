import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import pinkBook from "../imgBooks/pinkBookIcon.png";
function Header(){

	const stylishHeader = {
		color: "black",
		fontFamily: "KiTestRings OutliNe",
		fontSize:'90pt'
	}
	return ( 
<header>
	<div className="header" style={stylishHeader}>
Book Marked
<h1>social book-sharing</h1>
</div>
<img src={pinkBook} alt="pink book"></img>
</header>	
	);
}

	export default Header;