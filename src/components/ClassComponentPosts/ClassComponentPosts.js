import {Component} from "react";

import {ClassComponentPost} from "../ClassComponentPost/ClassComponentPost";
import {postsServices} from "../../services";

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
            </div>
        );
    }

}

export {ClassComponentPosts};