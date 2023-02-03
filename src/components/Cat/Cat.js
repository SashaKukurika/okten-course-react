const Cat = ({cat, dispatch}) => {
    const {idCat, catName} = cat;

    return (
        <div>
            {idCat} - {catName}
            <button onClick={() => dispatch({type: 'deleteCat', payload: idCat})}>Delete</button>
        </div>
    );
};

export {Cat};