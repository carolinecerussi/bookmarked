import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditBookForm (props) { 
	const { book } = props;
	
	function handleEditBookFormSubmission(event) {
		event.preventDefault();
		props.onEditBook({
			name: event.target.name.value, 
			origin : event.target.origin.value,
			roast: event.target.origin.value,
			price: event.target.price.value,
			description : event.target.description.value,
			quantity: event.target.quantity.value,
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