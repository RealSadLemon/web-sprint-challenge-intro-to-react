// Write your Character component here
import React, {useState} from 'react';

const Character = props =>{
    const {name, height, mass, gender, birth_year, hair_color, skin_color, eye_color} = props;
    console.log(props);

    return(
        <div className='char-container'>
            <div className='name'>{name}</div>
            <div className='info'>
                <p>Height:{height}</p>
                <p>Mass:{mass}</p>
                <p>Gender:{gender}</p>
                <p>Birth Year:{birth_year}</p>
                <p>Hair Colour:{hair_color}</p>
                <p>Eye Colour:{eye_color}</p>
                <p>Skin Colour:{skin_color}</p>
            </div>
        </div>
    )
}

export default Character;