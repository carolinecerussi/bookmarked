import React from 'react';
import PropTypes from 'prop-types';
import bookIcon from "../imgBooks/bookIcon2.png";
function Book (props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBookClicked (props.id)}>
        <img src={bookIcon} alt="book icon"></img>
          <h1>{props.title}</h1>
          <h2>{props.author}</h2>
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
