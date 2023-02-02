import {axiosServices} from "./axiosServices";
import {urls} from "../configs";

const commentsServices = {
    getAll: () => axiosServices.get(urls.comments)
}

export {
    commentsServices
}