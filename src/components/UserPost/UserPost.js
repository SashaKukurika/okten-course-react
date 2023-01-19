const UserPost = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div>
            <div>userId: {userId}, postId: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {UserPost};