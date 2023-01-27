import {axiosServise} from "./axiosServise";

import {urls} from "../configs";

const postsService = {
    getById: (id) => axiosServise.get(urls.postById(id)),

}

export {postsService}