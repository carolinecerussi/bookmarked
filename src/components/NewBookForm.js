import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';



  function NewBookForm (props) {
  function handleNewBookFormSubmission (event) {
    event.preventDefault ();
    props.onNewBookCreation ({
      name: event.target.name.value,
      author: event.target.author.value,
      genre: event.target.genre.value,
      price: event.target.price.value,
      description: event.target.description.value,
      id: v4 (),
      stars: event.target.stars.value,
      // weight: parseInt(event.target.weight.value),
      //  stars: parseInt(event.target.stars.value),
      //  totalPounds: parseInt(event.target.stars.value) * 130,
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
