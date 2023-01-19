import {useEffect, useState} from "react";

import {User} from "../User/User";
import {UserPosts} from "../UserPosts/UserPosts";
import {axiosService} from "../../Services/axiosService";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        axiosService.get('/users').then(value => value.data).then(value => setUsers([...value]))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserPosts={setUserPosts}/>)}
            <h2>Posts:</h2>
            {userPosts && <UserPosts userPosts={userPosts}/>}
        </div>
    );
};

export {Users};