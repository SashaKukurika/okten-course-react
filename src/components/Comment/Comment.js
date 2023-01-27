import {useNavigate} from "react-router-dom";

import css from './Comment.module.css'

const Comment = ({comment}) => {

    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(postId.toString())} className={css.Comment}>
            <div>PostId - {postId}</div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
        </div>
    );
};

export {Comment};