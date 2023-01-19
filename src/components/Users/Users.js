import {useEffect, useState} from "react";

import {User} from "../User/User";
import {axiosService} from "../../services/axiosService";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        axiosService.get('/users').then(value => value.data).then(value => setUsers([...value]));
    }, []);

    return (
        <div>

            <h2>User Details:</h2>
            {userDetails && <UserDetails userDetails={userDetails}/> }
            <hr/>

            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}

        </div>
    );
};

export {Users};