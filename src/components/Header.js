import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import otherbook from "../imgBooks/bookOpen.png";
function Header(){

	const stylishHeader = {
		color: "black",
		fontSize: '150pt',
		fontFamily: "KiTestRings OutliNe",
		backgroundColor: 'transparent',

	}

	return ( 
		<header>
<div className="header" style={stylishHeader}>
Book Marked
{/* <h1>Book Sharing</h1> */}
</div>
<img src={otherbook} alt=" book" width="50%"></img>
</header>
	);

}

export default Header;