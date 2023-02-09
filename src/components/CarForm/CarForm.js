import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carAction} from "../../redux/slices";
import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarForm = () => {

    const dispatch = useDispatch();
    const {carUpdate} = useSelector(state => state.cars);

    const {register, handleSubmit, formState: {errors, isValid}, reset, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand);
            setValue('price', carUpdate.price);
            setValue('year', carUpdate.year);
        }
    }, [carUpdate]);

    const create = (car) => {
        dispatch(carAction.create(car));
        reset();
    };

    const update = (car) => {
        console.log(carUpdate)
        dispatch(carAction.updateById({id: carUpdate.id, car}));
        reset();
        // Як зробити щоб carUpdate змінився знову на null після апдейту даних кара?
        // тому що після апдейту кнопка залишається з назвою update,
        // адже carUpdate уже існує, а щоб повернути на назву create потрібно щоб carUpdate
        // був фолсового значення.
        // пробував різні варіанти та підходи але не виходить
    };

    return (
        //                                  ось тут
        <form onSubmit={handleSubmit(carUpdate ? update : create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
                                        {/*ось тут*/}
            <button disabled={!isValid}>{carUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {CarForm};