import {useForm} from "react-hook-form"
import {usersService} from "../../services";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all'});

    const submit = async (data) => {
        await usersService.create(data).then(({data}) => setUsers((prevState) => [...prevState, data]));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" placeholder={'name'} {...register('name', {
                required: {value: true, message: 'Can\'t be empty'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'address.street'} {...register('address.street')}/>
            <input type="text" placeholder={'address.suite'} {...register('address.suite')}/>
            <input type="text" placeholder={'address.city'} {...register('address.city')}/>
            <input type="text" placeholder={'address.zipcode'} {...register('address.zipcode')}/>
            <input type="text" placeholder={'address.geo.lat'} {...register('address.geo.lat')}/>
            <input type="text" placeholder={'address.geo.lng'} {...register('address.geo.lng')}/>
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            <input type="text" placeholder={'website'} {...register('website')}/>
            <input type="text" placeholder={'company.name'} {...register('company.name')}/>
            <input type="text" placeholder={'company.catchPhrase'} {...register('company.catchPhrase')}/>
            <input type="text" placeholder={'company.bs'} {...register('company.bs')}/>

            <button disabled={!isValid}>Create</button>

        </form>
    );
};

export {UserForm};