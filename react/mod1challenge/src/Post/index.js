import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import PostHeader from '../PostHeader';

const Post = (props) => {
  const {
    item,
    item: { content },
  } = props;

  return (
    <div className="post">
      <PostHeader item={item} />
      <div className="postContent">{content}</div>
    </div>
  );
};

Post.propTypes = {
  item: PropTypes.shape().isRequired,
};
export default Post;
