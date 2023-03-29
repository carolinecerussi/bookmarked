import React from 'react';
import PropTypes from 'prop-types';

function Book (props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBookClicked (props.id)}>
          <h1>{props.title}</h1>
          <h3>Stock status WIP</h3>
      </div>
    </React.Fragment>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string,
  review: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  whenBookClicked: PropTypes.func,
};

export default Book;
