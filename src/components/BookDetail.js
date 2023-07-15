import React from "react";
import PropTypes from "prop-types";


function BookDetail(props) {
	const{ book, onClickingDelete } = props;

	const styledSubmit = {
	fontFamily: 'KiTestRings',
    fontSize: '25pt',
	color: 'red',
	
	}

	const bookDetailStyle = {
		fontFamily: 'KiTestRings',
		fontSize: '25pt',
		textAlign: 'left',
		paddingTop: '2%',
		paddingBottom: '2%',
		justifyContent:'center',
		display:'block',
		margin:'5%',
		backgroundColor:'white',
		padding:'3%',
		borderRadius:'5pt',


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

 