import {useReducer, useRef} from "react";

import {Dogs} from "../Dogs/Dogs";
import {Cats} from "../Cats/Cats";

const reducer = (state, action) => {
    switch (action.type) {

        case 'addCat':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.id + 1 : 1;
            return {...state, cats: [...state.cats, {idCat, catName: action.payload}]};

        case 'deleteCat':
            const numberCat = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(numberCat, 1);
            return {...state};

        case 'addDog':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.id + 1 : 1;
            return {...state, dogs: [...state.dogs, {idDog, dogName: action.payload}]};

        case 'deleteDog':
            const numberDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(numberDog, 1);
            return {...state};

        default :
            return {...state}
    }
};

const CatsAndDogsForm = () => {

    const catRef = useRef();
    const dogRef = useRef();

    const createCat = () => {
        dispatch({type: 'addCat', payload: catRef.current.value});
        catRef.current.value = '';
    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogRef.current.value});
        dogRef.current.value = '';
    }

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    return (
        <div>
            <div>
                <input type="text" placeholder={'Cat name'} ref={catRef}/>
                <button onClick={createCat}>Add Cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <input type="text" placeholder={'Dog name'} ref={dogRef}/>
                <button onClick={createDog}>Add dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch()}/>
            </div>
        </div>
    );
};

export {CatsAndDogsForm};