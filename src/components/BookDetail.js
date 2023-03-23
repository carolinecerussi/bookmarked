import React from "react";
import PropTypes from "prop-types";
import bookIcon from "../imgBooks/bookIcon.jpg";

function BookDetail(props) {
	const{ book, onClickingDelete } = props;

	const styledSubmit = {
	fontFamily: 'KiTestRings',
    fontSize: '20pt',
	textAlign: 'left',
	marginLeft: '10%'
	}

	const bookDetailStyle = {
		fontFamily: 'KiTestRings',
		fontSize : '20pt',
		marginTop: '40pt',
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
			<div style={imageStyle}id="bookImage">
			<img width='75%' src={bookIcon} />
			</div>
			<div id="orderSummary" style={bookDetailStyle}>
			<h1 >{book.name}: </h1>
			<h2 >ORIGIN: {book.author}</h2>
			<h2 >ROAST: {book.genre}</h2>
			<h2>COST: {book.price}</h2>
			<h2 >TASTE NOTES: {book.description }</h2>
			<h2 >Quantity: {book.stars}</h2>
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
	//change onClickingSell to onClickingLike//
};

export default BookDetail;

 