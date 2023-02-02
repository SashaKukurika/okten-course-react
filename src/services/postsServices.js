import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const postsServices = {
    getAll: () => axiosServices.get(urls.posts)
}

export {
    postsServices
}