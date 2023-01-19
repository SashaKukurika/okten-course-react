import {useEffect, useState} from "react";

import {UserPost} from "../UserPost/UserPost";
import {axiosService} from "../../Services/axiosService";

const UserPosts = ({userPosts}) => {

    const {id} = userPosts;
    const [userPost, setUserPost] = useState([]);

    useEffect(() => {
        axiosService.get('/users/' + id + '/posts').then(value => value.data).then(value => setUserPost([...value]))
    }, [id]);

    return (
        <div>
            {userPost.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};