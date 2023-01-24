const User = ({user}) => {

    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>
                address:
                <div>street - {street}</div>
                <div>suite - {suite}</div>
                <div>city - {city}</div>
                <div>zipcode - {zipcode}</div>
                <div>geo:</div>
                <div>lat - {lat}</div>
                <div>lng - {lng}</div>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>
                company:
                <div>companyName - {companyName}</div>
                <div>catchPhrase - {catchPhrase}</div>
                <div>bs - {bs}</div>
            </div>
            <hr/>
        </div>
    );
};

export {User};