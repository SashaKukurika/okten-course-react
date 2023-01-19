const User = ({user, setUserPosts}) => {

    const {id, name} = user;

    return (
        <div>
            {id} - {name}
            <button onClick={() => setUserPosts(user)}>Show posts</button>
        </div>
    );
};

export {User};