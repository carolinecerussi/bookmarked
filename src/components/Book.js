import React from 'react';
import PropTypes from 'prop-types';
import newBag from "../img/newBag.png";

function Book (props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBookClicked (props.id)}>
        <img  width="20%" src={newBag} alt="bag of coffee" />
          <h1>{props.name}</h1>
          <h3>Stock status WIP</h3>
      </div>
    </React.Fragment>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  whenBookClicked: PropTypes.func,
};

export default Book;
