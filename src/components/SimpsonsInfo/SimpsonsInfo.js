// 1. Описати всю сім'ю сімпсонів (5 персонажів)
import React from 'react';

export const SimpsonsInfo = ({personName, picture, description}) => {
    return (
        <div className={'person'}>
            <h2>{personName}</h2>
            <img src={picture} alt={personName}/>
            <p>{description}</p>
        </div>
    );
};

