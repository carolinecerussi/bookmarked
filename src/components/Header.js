import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../src/Navigation/Navbar";
import otherbook from "../imgBooks/bookOpen.png";
function Header(){

	const stylishHeader = {
		color: "black",
		fontSize: '150pt',
		fontFamily: "KiTestRings OutliNe",
		width:'100%',
		display:'inlineBLock',
		justifyContent: 'center',
		lineHeight: '125pt',
		marginTop:'5%',
		backgroundColor:'transparent'
	}

	return ( 
		<header  style={stylishHeader}><img src={otherbook} alt=" book" width="20%" />
Book Marked
</header>
	);

}

export default Header;