import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import otherbook from "../imgBooks/bookOpen.png";
function Header(){

	const stylishHeader = {
		color: "black",
		fontFamily: "KiTestRings OutliNe",
		fontSize:'90pt',
		backgroundColor: 'transparent'
	}
	return ( 
<header>
	<div className="header" style={stylishHeader}>
Book Marked
<h1>social book-sharing</h1>
<img src={otherbook} alt=" book" width="50%"></img>
</div>
</header>	
	);

}

	export default Header;