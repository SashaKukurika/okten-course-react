import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import css from './Post.module.css'

const Post = () => {

    const {postId} = useParams();
    console.log(postId);

    const [post, setPost] = useState([]);



    useEffect(() => {
        if (postId) {
            postsService.getById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId]);

    return (
        <div className={css.Post}>
            <div>UserId - {post.userId}</div>
            <div>Id - {post.id}</div>
            <div>Title - {post.title}</div>
            <div>Body - {post.body}</div>
        </div>
    );
};

export {Post};