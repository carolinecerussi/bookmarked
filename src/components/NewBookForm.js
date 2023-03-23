import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';


  function NewBookForm (props) {
  function handleNewBookFormSubmission (event) {
    event.preventDefault ();
    props.onNewBookCreation ({
      title: event.target.title.value,
      author: event.target.author.value,
      genre: event.target.genre.value,
      price: event.target.price.value,
      review: event.target.review.value,
      stars: event.target.stars.value,
      id: v4 (),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBookFormSubmission}
        buttonText="Add Book"
      />
    </React.Fragment>
  );
}


NewBookForm.propTypes = {
  onNewBookCreation: PropTypes.func,
};



export default NewBookForm;
