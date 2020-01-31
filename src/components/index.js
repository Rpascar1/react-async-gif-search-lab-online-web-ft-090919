import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './commentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4> Warning: </h4>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Time Yesterday at 4:45 PM" avatar={faker.image.avatar()}
          commentContent="Good One"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Time Today at 2:00 AM"
          avatar={faker.image.avatar()}
          commentContent="Cool!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Dick"
          timeAgo="Time Yesterday at 5:56 PM" avatar={faker.image.avatar()}
          commentContent="NOICE!"
        />
      </ApprovalCard>
      </div>

      )

      }

      ReactDOM.render(<App />, document.querySelector('#root'))
