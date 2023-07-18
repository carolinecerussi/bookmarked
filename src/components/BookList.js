import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
function BookList(props) {
	const bookListStyles = {
		color: 'black',
		fontFamily: 'KiTestRings',
		textAlign: 'center',
		marginTop:'5%',
		width:'100vw',
float:'left'	}

const outside = {
	backgroundColor:'white',
	paddingTop:'2%',
			display:'grid',
width:'100%',



}

	return (
<React.Fragment>
		{props.bookList.map(book => (
	
			<div id="bookListContainer" style = {outside}
>
	<div id="book" style = {bookListStyles} >
			<Book 
			whenBookClicked = {props.onBookSelection}
			title = {book.title}
			author = {book.author}
			genre = {book.genre}
			review = {book.review}
			star = {book.star}
			id = {book.id}
			key = {book.id} />
			</div>
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








