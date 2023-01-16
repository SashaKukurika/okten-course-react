import React from 'react';

export const RickAndMorty = ({id, name, status, species, gender, image}) => {
    return (
        <div className={'personSanchez'}>
            <h2>Name: {name} - {id}</h2>
            <ul>
                <li>Status - {status}</li>
                <li>Species - {species}</li>
                <li>Gender - {gender}</li>
            </ul>
            <img src={image} alt={name}/>
        </div>
    );
};