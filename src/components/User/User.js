import {useDispatch} from "react-redux";

import {userAction} from "../../redux";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <button onClick={() => dispatch(userAction.setSelectedUser(user))}>Select</button>
            <button onClick={() => dispatch(userAction.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {User};