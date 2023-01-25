import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carsService = {
    getAllCars: () => axiosService.get(urls.cars),
    createNewCar: (newCar) => axiosService.post(urls.cars, newCar),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)

};

export {
    carsService
}