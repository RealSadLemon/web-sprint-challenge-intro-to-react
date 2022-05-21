// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const CustInfo = styled.div`
    background-color: #ffffff80;
    width: fit-content;
    padding: 0vh 5vw;
    font-family: 'Contrail One', cursive;
    border-radius: 1rem;
    font-size: 1.5rem;
    @keyframes fade-in {
        0% {opacity: 0;}
        25% {opacity: 0;}
        50% {opacity: 0.75;}
        100% {opacity: 1;}
    }
    animation-name: fade-in;
    animation-duration: .5s;
`

const CustName = styled.button`
    background-color: #443e3e50;
    border: solid 1px grey;
    border-radius: 10rem;
    padding: 5vh 0vw;
    margin: 2vh;
    font-size: 2rem;
    font-family: 'Megrim', sans-serif;
    color: white;
    width: 100%;
`

const Character = props =>{
    const [visible, setVisible] = useState('hidden');
    const {name, height, mass, gender, birth_year, hair_color, skin_color, eye_color} = props;
    
    const toggleVisible = ()=>{
        if(visible)setVisible(null);
        if(!visible)setVisible('hidden');
    }
    console.log(visible);

    return(
        <div className='char-container'>
            <CustName onClick={()=>toggleVisible()} className='name'>{name}</CustName>
            <CustInfo className={`info ${visible}`}>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <p>Gender: {gender}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Hair Colour: {hair_color}</p>
                <p>Eye Colour: {eye_color}</p>
                <p>Skin Colour: {skin_color}</p>
            </CustInfo>
        </div>
    )
}

export default Character;