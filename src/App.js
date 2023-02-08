import {Header, Posts, Users} from "./components";
import css from './App.module.css'

const App = () => {
    return (
        <div className={css.App}>
            <div className={css.Header}>
                <Header/>
            </div>
            <div className={css.Users}>
                <Users/>
            </div>
            <div className={css.Posts}>
                <Posts/>
            </div>
        </div>
    );
};

export {App};