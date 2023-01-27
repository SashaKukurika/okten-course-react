import {axiosServise} from "./axiosServise";

import {urls} from "../configs";

const albumsService = {
    getAll: () => axiosServise.get(urls.albums)
}

export {albumsService}