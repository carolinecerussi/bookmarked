import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditBookForm (props) { 
	const { book } = props;
	
	function handleEditBookFormSubmission(event) {
		event.preventDefault();
		props.onEditBook({
			title: event.target.title.value, 
			author : event.target.author.value,
			genre: event.target.author.value,
			review : event.target.review.value,
			star: event.target.rating.value,
			id: book.id,
			
		});
	};
	return (
			<React.Fragment>
			<ReusableForm 
			formSubmissionHandler= {handleEditBookFormSubmission}
				buttonText="Update" />
				</React.Fragment>
		);
}

EditBookForm.propTypes ={
	book: PropTypes.object,
	onEditBook: PropTypes.func
};

export default EditBookForm;