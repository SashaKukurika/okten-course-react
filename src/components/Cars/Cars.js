import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {

    const [cars,setCars] = useState([]);

    useEffect(() => {
        carsService.getAllCars().then(({data}) => setCars([...data]))
    },[]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};