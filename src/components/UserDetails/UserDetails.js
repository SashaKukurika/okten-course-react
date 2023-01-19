const UserDetails = ({userDetails}) => {

    const {username, email, address} = userDetails;
    const {city, street} = address;

    return (
        <div>
            <div>Username - {username}</div>
            <div>email - {email}</div>
            <div>address: city - {city}, street {street}</div>
        </div>
    );
};

export {UserDetails};