import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';

import styles from './Comment.css';

const Comment = ({ body, className, rating, userName }) => (
  <div className={`${styles.root} ${className}`}>
    <h3>{userName}</h3>
    <StarRating starCount={5} value={rating} disabled />
    <p>{body}</p>
  </div>
);

Comment.defaultProps = {
  className: ''
};

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  rating: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
};

export default Comment;