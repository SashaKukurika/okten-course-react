import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {urls} from "./configs";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={urls.index} element={<MainLayout/>}>
                    <Route path={urls.index} index element={<HomePage/>}/>
                    <Route path={urls.albums} element={<AlbumsPage/>}/>
                    <Route path={urls.comments} element={<CommentsPage/>}>
                        <Route path={urls.postsId} element={<PostPage/>}/>
                    </Route>
                    <Route path={urls.todos} element={<TodosPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};