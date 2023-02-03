import {Component} from "react";

class ClassComponentPost extends Component {

    render() {
        return (
            <div>
                <div>UserId: {this.props.post.userId}</div>
                <div>PostId: {this.props.post.id}</div>
                <div>Title: {this.props.post.title}</div>
                <div>Body: {this.props.post.body}</div>
                <hr/>
            </div>
        )
    }

}

export {ClassComponentPost}