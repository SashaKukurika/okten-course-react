import {useDispatch} from "react-redux";
import {carAction} from "../../redux/slices";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> dispatch(carAction.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carAction.deleteById(car))}>Delete</button>
        </div>
    );
};

export {Car};