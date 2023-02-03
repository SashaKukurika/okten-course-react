import {Component} from "react";

class ClassComponentComment extends Component {

    render() {
        return (
            <div>
                <div>PostId: {this.props.comment.postId}</div>
                <div>Id: {this.props.comment.id}</div>
                <div>Name: {this.props.comment.name}</div>
                <div>Email: {this.props.comment.email}</div>
                <div>Body: {this.props.comment.body}</div>
                <hr/>
            </div>
        )
    }

}

export {ClassComponentComment}