const Dog = ({dog, dispatch}) => {

    const {idDog, dogName} = dog;

    return (
        <div>
            {idDog} - {dogName}
            <button onClick={() => dispatch({type: 'deleteDog', payload: idDog})}>Delete</button>
        </div>
    );
};

export {Dog};