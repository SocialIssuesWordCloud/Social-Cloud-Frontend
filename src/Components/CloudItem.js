import React from 'react';

const CloudItem = props => (
  <div {...props} className="tag-item-wrapper">
      <a href={props.href}>{props.text}</a>
  </div>
);

export default CloudItem;
