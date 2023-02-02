import {Component} from "react";

import {postsServices} from "../../services";

class ClassComponentPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {...[]};
    }

    componentDidMount() {
        postsServices.getAll.then(({data}) => this.setState([...data]));
    }

    render() {
        return (
            <div>
                {this.state.map(({post}) => {
                    const {id, userId, body, title} = post
                    return (
                        <div key={id}>
                            <div>UserId: {userId}</div>
                            ;
                            <div>PostId: {id}</div>;
                            <div>Title: {title}</div>;
                            <div>Body: {body}</div>;
                        </div>
                    )

                })}
            </div>
        )
    }

}

export {ClassComponentPosts};