import {useDispatch} from "react-redux";

import {postAction} from "../../redux";

const Post = ({post}) => {

    const dispatch = useDispatch();

    const {id, userId, title, body} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postAction.setSelectedPost(post))}>Select</button>
            <button onClick={() => dispatch(postAction.getById(post))}>apiSelect</button>
        </div>
    );
};

export {Post};