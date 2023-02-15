import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayouts, MainLayout} from "./layouths";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayouts/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};