import React from "react";
import PropTypes from "prop-types";
import newBag from "../img/newBag.png";

function BookDetail(props) {
	const{ book, onClickingDelete } = props;

	const styledSubmit = {
	fontFamily: 'Andale Mono',
    fontSize: '15pt',
	textAlign: 'left',
	marginLeft: '10%'
	}

	const orderDetailStyle = {
		fontFamily: 'Andale Mono',
		fontSize : '20pt',
		marginTop: '50pt',
		textAlign: 'left',
		width: '60%'

	}
const imageStyle = {
	float:'left',
	marginTop: '25pt'
}
	return(
		
		<React.Fragment 
		 key={book.id} >
			<div style={imageStyle}id="orderImage">
			<img width='75%' src={newBag} />
			</div>
			<div id="orderSummary" style={orderDetailStyle}>
			<h1 >{book.name}: </h1>
			<h2 >ORIGIN: {book.origin}</h2>
			<h2 >ROAST: {book.roast}</h2>
			<h2>COST: {book.price}</h2>
			<h2 >TASTE NOTES: {book.description }</h2>
			<h2 >Quantity: {book.quantity}</h2>
			</div>
			<div style= {styledSubmit} id="optionButtons">
			<button onClick={ props.onClickingSell }>Sell A Bag</button>
			<br />
			<button  onClick={ props.onClickingEdit } >Edit </button>
			<br />
			<button onClick={()=> onClickingDelete(book.id)}>Delete</button>
			</div>
		</React.Fragment>
	);
	}
BookDetail.propTypes = {
	book: PropTypes.object,
	onClickingDelete:PropTypes.func,
	onClickingEdit : PropTypes.func,
	onClickingSell: PropTypes.func
};

export default BookDetail;

 