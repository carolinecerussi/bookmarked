import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookList(props) {
	const bookListStyles = {
		color: 'white',
		backgroundColor: 'light pink',
		fontFamily: 'KiTestRings',
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
			author = {book.author}
			genre = {book.genre}
			price = {book.price}
			description = {book.description}
			stars = {book.stars}
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








