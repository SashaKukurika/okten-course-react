import {Component} from "react";

import {postsServices} from "../../services";
import {ClassComponentPost} from "../ClassComponentPost/ClassComponentPost";

class ClassComponentPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {arr: []};
    }

    componentDidMount() {
        postsServices.getAll().then(({data}) => this.setState({arr: [...data]}));
    }

    render() {
        return (
            <div>
                {this.state.arr.map(post => <ClassComponentPost key={post.id} post={post}/>)}
                posts
            </div>
        )
    }

}

export {ClassComponentPosts};