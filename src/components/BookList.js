import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookList(props) {
	const bookListStyles = {
		color: 'white',
		backgroundColor: 'brown',
		fontFamily: 'Andale Mono',
		textAlign: 'center',
		padding: '15px',
		margin: 'auto',
		marginRight: '800'		
	}
	return (
<React.Fragment>
		{props.bookList.map(book => (
			<div id="bookListContainer" style={bookListStyles}>
			<Book 
			whenBookClicked = {props.onBookSelection}
			name = {book.name}
			origin = {book.origin}
			roast = {book.roast}
			price = {book.price}
			description = {book.description}
			quantity = {book.quantity}
			id = {book.id}
			key = {book.id}/>
			</div>
		))}
</React.Fragment>
	)
}

BookList.propTypes = {
	bookList : PropTypes.array,
	onBookSelection: PropTypes.func
};

export default BookList;








