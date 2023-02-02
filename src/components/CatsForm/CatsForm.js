import {useForm} from "react-hook-form";

import {useReducer, useRef, useState} from "react";
import {Cat} from "../Cat/Cat";
import {Cats} from "../Cats/Cats";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            const [last] = state.cats.slice(-1);
            const id = last ? last.id + 1 : 1;
            return {...state, cats: [...state.cats, {id, catName: action.payload}]};
        case 'deleteCat':
            const number = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(number, 1);
            return {...state};
        default :
            return {...state}

    }
};

const CatsForm = () => {

    // const {register, handleSubmit, reset} = useForm({mode: "all"});
    // const [cats, setCats] = useState([]);
    //
    // const submit = (cat) => {
    //     console.log(cat);
    //     setCats(prevState => [...prevState, cat]);
    //     reset();
    //
    // };
    const catRef = useRef();

    const createCat = () => {
        dispatch({type: 'addCat', payload: catRef.current.value});
        catRef.current.value = '';
    }


    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    return (
        <div>
            <input type="text" placeholder={'Cat name'} ref={catRef}/>
            <button onClick={createCat}>Add Cat</button>
            <Cats cats={state.cats} dispatch={dispatch}/>
        </div>
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type={"text"} placeholder={'cat'} {...register('cat')}/>
        //     <button>Add Cat</button>
        //     <Cat cats={cats}/>
        // </form>
    );
};

export {CatsForm};