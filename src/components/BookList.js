import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
function BookList(props) {
	const bookListStyles = {
		color: 'black',
		fontFamily: 'KiTestRings',
		textAlign: 'left',
		marginLeft: '5%',
		display:'grid',
		marginTop:'5%',
float:'left'	}
	return (
<React.Fragment>
		{props.bookList.map(book => (
			<div id="bookListContainer" style={bookListStyles}>
			<Book 
			whenBookClicked = {props.onBookSelection}
			title = {book.title}
			author = {book.author}
			genre = {book.genre}
			review = {book.review}
			star = {book.star}
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








