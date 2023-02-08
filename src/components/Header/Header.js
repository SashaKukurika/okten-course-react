import {useSelector} from "react-redux";

const Header = () => {

    const {selectedUser} = useSelector(state => state.users);
    const {selected, apiSelected, loading} = useSelector(state => state.posts);

    return (
        <div>
            <b>Selected user:</b> {selectedUser && selectedUser.name}
            <hr/>
            <b>Selected post:</b> {selected && selected.title}
            <hr/>
            <b>Selected post from API:</b> {apiSelected && apiSelected.title} {loading && <h2>loading...</h2>}
            <hr/>
        </div>
    );
};

export {Header};