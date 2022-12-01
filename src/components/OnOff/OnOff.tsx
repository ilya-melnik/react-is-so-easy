import React, {MouseEvent, useState} from 'react';

type PropsType = {
    // on: boolean
    // callback: (on: boolean) => void

}
const OnOff = (props: PropsType) => {
    let[on,setOn] =useState(true)

    const ChangeOnOff = (e: MouseEvent<HTMLDivElement>) => {
        setOn(!on)
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !on ? "red" : "white",
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? "green" : "red",
    }



    return (
        <div>
            <div onClick={ChangeOnOff} className={'on'} style={onStyle}>On</div>
            <div onClick={ChangeOnOff} className={'off'} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
