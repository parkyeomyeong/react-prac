import {React, useState} from 'react';

const P2State = ({title}) => {
    const [message, setMessage] = useState('')
    const [color, setColore] = useState('black')

    const onCLickEnter = () => {setMessage('state Message')}

    const btnStyle = {
        color : 'red',
        test : 'bold'
    }
    return (
        <div>
            <h1>{title}</h1>
            <div style={{color}}>{message}</div>
            <button onClick={onCLickEnter}>확인</button>

            <button style={btnStyle} onClick={() => {setColore('red')}}>빨강</button>
            <button style={btnStyle} onClick={() => {setColore('blue')}}>파랑</button>
            <button style={btnStyle} onClick={() => {setColore('black')}}>검정</button>
        </div>
    );
};

export default P2State;