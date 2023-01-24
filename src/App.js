import {Comments, CommentsForm, UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {commentsService, usersService} from "./services";

const App = () => {

    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            <h1>Task 1</h1>
            <h2>Create user:</h2>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

            <h1>Task 2</h1>
            <h2>Add comment:</h2>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {App};