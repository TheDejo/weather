import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';




const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeago="Today at 5:00 PM" avatar={faker.image.avatar()} content="Nice blog post"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Anne" timeago="Today at 1:00 AM" avatar={faker.image.avatar()} content="This post is properly penned"/>
      </ApprovalCard>
      <ApprovalCard> 
        <CommentDetail author="Basil" timeago="Yesterday at 3:00 PM" avatar={faker.image.avatar()} content="Wonderful piece of writing"/>
      </ApprovalCard> 
    </div>
  ) 
};

ReactDom.render(
  <App />,
  document.querySelector('#root')
)