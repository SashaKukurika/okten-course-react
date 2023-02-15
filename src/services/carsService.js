import {axiosService} from "./axiosService";

import {urls} from "../configs";

const carsService = {
    getAll: (page= 1) => axiosService.get(urls.cars, {params:{page}}),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, updateCar) => axiosService.put(`${urls.cars}/${id}`, updateCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {carsService}