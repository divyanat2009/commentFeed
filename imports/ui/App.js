import React, { Component } from 'react';
import AddComment from './AddComment';
// we import withTracker and Comments into our app file
import { withTracker } from 'meteor/react-meteor-data';
import { Comments } from '../api/comments';
import ListComments from './ListComments';

// Create a new React Component `CommentApp`
class CommentApp extends Component {
  render() {
    return (
      <div>
        <AddComment />
      
        <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
        <ListComments {...this.props}/>
      </div>
    );
  }
}

// Wrap `CommentApp` with the HOC withTracker and call the new component we get `App`
const App = withTracker(() => {
  return {
    comments: Comments.find({}). fetch()
  }
})(CommentApp);

// export the component `App`
export default App;