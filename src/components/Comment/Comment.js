import css from './Comment.module.css'
import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const {id, postId, name, email,body} = comment;

    const navigate = useNavigate();
    console.log(postId);
    return (
        <div className={css.Comment} onClick={()=> navigate(postId.toString())}>
            <div>PostId - {postId}</div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
        </div>
    );
};

export {Comment};