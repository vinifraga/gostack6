import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PostHeader = (props) => {
  const {
    item: { img, name, time },
  } = props;

  return (
    <ul className="postHeader">
      <li>
        <img src={`./${img}`} alt="avatar" className="avatar" />
        <div className="info">
          <strong>{name}</strong>
          <span>{time}</span>
        </div>
      </li>
    </ul>
  );
};

PostHeader.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
