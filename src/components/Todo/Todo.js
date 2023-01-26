import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div className={css.Todo}>
            <div>UserId - {userId}</div>
            <div>Id - {id}</div>
            <div>Title - {title}</div>
            <div>Completed - {completed}</div>
        </div>
    );
};

export {Todo};