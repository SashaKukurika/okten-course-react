import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postsService}