import {Component} from "react";

import {postsServices} from "../../services";
import {ClassComponentPost} from "../ClassComponentPost/ClassComponentPost";

class ClassComponentPosts extends Component {

    constructor(props) {
        super(props);
        this.state = [];
    }

    componentDidMount() {
        postsServices.getAll.then(({data}) => this.setState([...data]));
    }

    render() {
        return (
            <div>
                {this.state.map(post => <ClassComponentPost key={post.id} post={post}/>)}
                {/*{console.log(this.setState)}*/}
                posts
            </div>
        )
    }

}

export {ClassComponentPosts};