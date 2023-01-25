import {useForm} from "react-hook-form";
import {carsService} from "../../services";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});

    const submit = (data) => {
        console.log(data);
        // await carsService.createNewCar(data);
        // reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Only letters from 1 to 20 symbols'},
                    required: {value: true, message: 'Can\'t be empty'}
                })}/>

                {errors.brand && <span>{errors.brand.message}</span>}

                <input type="number" placeholder={'price'} {...register('price',
                    {
                        valueAsNumber: true,
                        min: {value: 0, message: 'Can\'t be lees than 0'},
                        max: {value: 1_000_000, message: 'Can\'t be more than 1 000 000'}
                    })}/>

                { }
                <input type="number" placeholder={'year'} {...register('year')}/>

                <button disabled={!isValid}>Create new car</button>
            </form>
        </div>
    );
};

export {CarForm};