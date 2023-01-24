import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    create: (newUser) => axiosService.post(urls.users, newUser),
    getAll: () => axiosService.get(urls.users)
};

export {
    usersService
}