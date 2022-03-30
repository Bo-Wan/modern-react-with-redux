import React from 'react';
import ReactDOM from 'react-dom';

import faker from '@faker-js/faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail avatar={ faker.image.avatar() } author="Sam" timeAgo="Today 6" comment="ho" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail avatar={ faker.image.avatar() } author="Bella" timeAgo="Today 2" comment="ha" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail avatar={ faker.image.avatar() } author="John" timeAgo="Yesterday 4" comment="hey" />
      </ApprovalCard>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
