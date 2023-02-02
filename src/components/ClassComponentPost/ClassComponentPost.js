import {Component} from "react";

class ClassComponentPost extends Component{

    constructor({post}) {
        super(post);
        const {id, userId, body, title} = post;
    }

    render() {
        return(
            <div>
                <div>UserId: {userId}</div>
                <div>PostId: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }

}

export {ClassComponentPost}