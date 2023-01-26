import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostsPage, TodosPage} from "./pages";
import {urls} from "./configs";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={urls.albums} element={<AlbumsPage/>}/>
                    <Route path={urls.comments} element={<CommentsPage/>}/>
                    <Route path={urls.posts} element={<PostsPage/>}/>
                    <Route path={urls.todos} element={<TodosPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};