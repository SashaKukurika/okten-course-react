import css from './Header.module.css'
import {urls} from "../../configs";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home Page</NavLink>
            <NavLink to={urls.albums}>Album</NavLink>
            <NavLink to={urls.comments}>Comments</NavLink>
            <NavLink to={urls.todos}>Todos</NavLink>
        </div>
    );
};

export {Header};