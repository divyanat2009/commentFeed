import React, { Component } from 'react';

class ListComments extends Component {
  render() {
    return (
      <div>
        {this.props.comments.length ? this.props.comments.map((comment) => (
          <div className="list-group" key={comment._id} style={{ margin: "20px 100px" }}>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{comment.title}</h5>
                <small>{comment.date}</small>
              </div>
              <p className="mb-1">{comment.description}</p>
            </div>
          </div>
        )) : <div className="no-comments">OOOPSY: NO COMMENTS REGISTERED</div>}
      </div>
    );
  }
}

export default ListComments;