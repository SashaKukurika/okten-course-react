import {NavLink} from "react-router-dom";

import {urls} from "../../configs";
import css from './Header.module.css'

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