import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducer = {
    cars: carReducer
};

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
