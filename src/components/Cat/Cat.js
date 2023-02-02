const Cat = ({cat, dispatch}) => {
    const {id, catName} = cat;

    return (
        <div>
            {id} - {catName}
            <button onClick={()=> dispatch({type: 'deleteCat', payload: id})}>Delete</button>
        </div>
    );
};

export {Cat};