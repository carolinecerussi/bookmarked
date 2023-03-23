import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditBookForm (props) { 
	const { book } = props;
	
	function handleEditBookFormSubmission(event) {
		event.preventDefault();
		props.onEditBook({
			name: event.target.name.value, 
			author : event.target.author.value,
			genre: event.target.author.value,
			price: event.target.price.value,
			description : event.target.description.value,
			stars: event.target.stars.value,
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