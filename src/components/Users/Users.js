import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userAction} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        // usersService.getAll().then(({data}) => dispatch(userAction.getAll(data)))
        dispatch(userAction.getAll())
    }, [dispatch]);


    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>loading...</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};