import {axiosServise} from "./axiosServise";
import {urls} from "../configs";

const todosService ={
    getAll: () => axiosServise.get(urls.todos)
}

export {todosService}