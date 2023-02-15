import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux/slices";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, prev, next} = useSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carAction.getAll({page: query.get('page')}));
    }, [dispatch, query])

    return (
        <div>
            <div>
                <button disabled={!prev} onClick={() => setQuery(prev1 =>({page: +prev1.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={() => setQuery(prev1 =>({page: +prev1.get('page')+1}))}>next</button>
            </div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};