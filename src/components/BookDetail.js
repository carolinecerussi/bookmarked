import React from "react";
import PropTypes from "prop-types";


function BookDetail(props) {
	const{ book, onClickingDelete } = props;

	const styledSubmit = {
	fontFamily: 'KiTestRings',
    fontSize: '30pt',
	color: 'red',
	textAlign: '',
	}

	const bookDetailStyle = {
		fontFamily: 'KiTestRings',
		fontSize: '30pt',
		textAlign: 'left',
		backgroundColor: "white",
		paddingTop: '2%',
		paddingBottom: '2%'

	}

	return(
		
		<React.Fragment 
		 key={book.id} >
			<div class="bookDetail"id="bookSummary" style={bookDetailStyle}>
			<h1>{book.title} </h1>
			<h1 >{book.star}</h1>
			<h2 >Author: {book.author}</h2>
			<h2 >Genre: {book.genre}</h2>
			<h2 >Review: {book.review }</h2>
			<div id="optionButtons">
			{/* <button onClick={ props.onClickingSell }>Sell A Bag</button> */}
			<br />
			<button  style= {styledSubmit} onClick={ props.onClickingEdit } >Edit </button>
			<br />
			<button style= {styledSubmit} onClick={()=> onClickingDelete(book.id)}>Delete</button>
			</div>
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

 