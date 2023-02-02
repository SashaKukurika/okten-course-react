import {Component} from "react";

import {ClassComponentComment} from "../ClassComponentComment/ClassComponentComment";
import {commentsServices} from "../../services";

class ClassComponentComments extends Component {

    constructor(props) {
        super(props);
        this.state = {arr: []};
    }

    componentDidMount() {
        commentsServices.getAll().then(({data}) => this.setState({arr: [...data]}));
    }

    render() {
        return (
            <div>
                {this.state.arr.map(comment => <ClassComponentComment key={comment.id} comment={comment}/>)}
            </div>
        );
    }

}

export {ClassComponentComments};