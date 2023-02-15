import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {registrationValidator} from "../../validators";
import {userService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {

    const {register, handleSubmit, formState: {isValid}} = useForm({
        mode: "onSubmit",
        resolver: joiResolver(registrationValidator)
    });
    const navigate = useNavigate();
const [error, setError] = useState(null);
    const registration = async (user) => {
        try {
            await userService.create(user);
            navigate('/login');
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data);
            }
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registration)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button disabled={!isValid}>Register</button>
                </form>
            </div>
            {error && <div>{JSON.stringify(error)}</div>}
        </div>
    );
};

export {RegisterPage};