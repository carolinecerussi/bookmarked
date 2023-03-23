import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';



  function NewBookForm (props) {
  function handleNewBookFormSubmission (event) {
    event.preventDefault ();
    props.onNewBookCreation ({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      description: event.target.description.value,
      id: v4 (),
      quantity: event.target.quantity.value,
      // weight: parseInt(event.target.weight.value),
      //  quantity: parseInt(event.target.quantity.value),
      //  totalPounds: parseInt(event.target.quantity.value) * 130,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBookFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}


NewBookForm.propTypes = {
  onNewBookCreation: PropTypes.func,
};



export default NewBookForm;
