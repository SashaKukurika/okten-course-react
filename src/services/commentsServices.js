import {urls} from "../configs";
import {axiosServices} from "./axiosServices";

const commentsServices = {
    getAll: () => axiosServices.get(urls.comments)
}

export {
    commentsServices
}