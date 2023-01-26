import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]))
    }, []);

    return (
        <div className={css.Todos}>
            {todos.map(todo=> <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};