import {Outlet} from "react-router-dom";

const AuthRequireLayouts = () => {
    return (
        <div>
            AuthRequireLayouts
            <Outlet/>
        </div>
    );
};

export {AuthRequireLayouts};