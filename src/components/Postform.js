import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
       e.preventDefault();
    
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        
    this.props.createPosts(post);
    toast.success("Post Added")
    }

    render() {

        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.Title} placeholder="Enter post title...."/>
                    </div>
                    <br />

                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.Body} placeholder="Enter post body...."/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <ToastContainer autoClose={2000} />
            </div>
        )
    }
}

Postform.protoTypes = {
    createPosts: PropTypes.func.isRequired
};

export default connect(null, {createPosts})(Postform);

