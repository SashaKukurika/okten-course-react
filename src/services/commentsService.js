import {axiosServise} from "./axiosServise";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosServise.get(urls.comments)
}

export {commentsService}