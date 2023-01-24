import {useForm} from "react-hook-form";

import {commentsService} from "../../services";

const CommentsForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all"});

    const submit = async (data) => {
        await commentsService.create(data).then(({data}) => setComments(prev => [...prev, data]));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="number" placeholder={'postId'} {...register('postId', {
                min: {value: 101, massage: 'Min 101'},
                pattern: /^[0-9]/,
                valueAsNumber: true,
            })}/>
            {errors.postId && <span>{errors.postId.message}</span>}

            <input type="text" placeholder={'name'} {...register('name', {
                required: {value: true, message: 'Can\'t be empty'}
            })}/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>

            <button disabled={!isValid}>Add comment</button>
        </form>
    );
};

export {CommentsForm};