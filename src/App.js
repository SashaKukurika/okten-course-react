import {ClassComponentComments, ClassComponentPosts} from "./components";
import {CatsAndDogsForm} from "./components";

const App = () => {
    return (
        <div>
            <CatsAndDogsForm/>
            <ClassComponentPosts/>
            <ClassComponentComments/>
        </div>
    );
};

export {App};