import {axiosServise} from "./axiosServise";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosServise.get(urls.posts),
    getById: (id) => axiosServise.get(`${urls.posts}/${id}`),

}

export {postsService}