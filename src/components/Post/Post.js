import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services";
import css from './Post.module.css'

const Post = () => {

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            postsService.getById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId]);

    if (!post) return null;

    return (
        <div className={css.Post}>
            <div>UserId - {postId}</div>
            <div>Id - {post.id}</div>
            <div>Title - {post.title}</div>
            <div>Body - {post.body}</div>
        </div>
    );
};

export {Post};