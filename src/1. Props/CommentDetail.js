import React from 'react';

const CommentDetail = (props) => {
  return (
  <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="matadata">
            <span className="date">{props.timeago}</span>
          </div>
           <div className="text">{props.content}</div>
          </div>
      </div>
  </div>
  )
}

export default CommentDetail;