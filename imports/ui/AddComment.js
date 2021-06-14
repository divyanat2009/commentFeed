import React, {Component} from 'react';
import {Comments} from '../api/comments';

class AddComment extends Component{
    constructor(props){
        super(props);
        this.state= {
            comment: "",
            email: "",
            date: ""
        }
    }

    handleChange = (e) => {
        const field = e.target.name;
        this.setState({
            [field] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { comment, email, date } = this.state;
        Comments.insert({
            comment,
            email,
            date
          });
    
          // clears input fields onSubmit
          this.setState({
            comment: "",
            email: "",
            date: ""
          });
    }

    render(){
        return(
            <div>
                <div className="text-center">
                    <h3>Comment Feed</h3>
                </div>
                <div className= "jumbotron" style={{margin:"0 500px "}}>
                    <form onSubmit={this.handleSubmit}>
                        <div classname="form-group">
                            <label>Comment:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your comments"
                              name="comments"
                              value={this.state.comment}
                              onChange={this.handleChange}
                            />  
                        </div>
                        <div classname="form-group">
                            <label>Email:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your e-mail"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />  
                        </div>
                        <div className="form-group">
                            <label>Comment Date:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter date in mm.dd.yyyy"
                              name="date"
                              value={this.state.date}
                              onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Comment</button>
                    </form>

                </div>
            </div>
            
        );
    }
}

export default AddComment;