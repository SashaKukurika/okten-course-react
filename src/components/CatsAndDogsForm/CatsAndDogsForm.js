import {useReducer, useRef} from "react";

import {Dogs} from "../Dogs/Dogs";
import {Cats} from "../Cats/Cats";
import css from './CatsAndDogs.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.idCat + 1 : 1;
            return {...state, cats: [...state.cats, {idCat, catName: action.payload}]}
        case 'deleteCat':
            const indexCat = state.cats.findIndex(cat => cat.idCat === action.payload);
            state.cats.splice(indexCat, 1)
            return {...state}
        case 'addDog':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.idDog + 1 : 1;
            return {...state, dogs: [...state.dogs, {idDog, dogName: action.payload}]}
        case 'deleteDog':
            const indexDog = state.dogs.findIndex(dog => dog.idDog === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }

}

const CatsAndDogsForm = () => {

    const catRef = useRef();
    const dogRef = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const createCat = () => {
        dispatch({type: 'addCat', payload: catRef.current.value})
        catRef.current.value = ''
    };

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogRef.current.value})
        dogRef.current.value = ''
    };

    return (
        <div>
            <div className={css.Form}>
                <div>Add cat:
                    <input type="text" ref={catRef} placeholder={'Cat name'}/>
                    <button onClick={createCat}>Add cat</button>
                </div>
                <div>Add dog:
                    <input type="text" ref={dogRef} placeholder={'Dog name'}/>
                    <button onClick={createDog}>Add dog</button>
                </div>
            </div>
            <div className={css.List}>
                <div><Cats cats={state.cats} dispatch={dispatch}/></div>
                <div><Dogs dogs={state.dogs} dispatch={dispatch}/></div>
            </div>
        </div>
    );
};

export {CatsAndDogsForm};