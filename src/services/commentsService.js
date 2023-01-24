import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    create: (newComments) => axiosService.post(urls.comments, newComments),
    getAll: () => axiosService.get(urls.comments)

};

export {
    commentsService
}