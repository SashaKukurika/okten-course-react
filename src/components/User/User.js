import {useState} from "react";

const User = ({user,setUserDetails}) => {

    const {id, name} = user;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => setUserDetails(user)}>User details</button>
        </div>
    );
};

export {User};