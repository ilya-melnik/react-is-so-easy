import React, {MouseEvent, useState} from 'react';

type PropsOnOffType = {
    on: boolean
    callback: () => void

}
const OnOff = (props: PropsOnOffType) => {


    // const ChangeOnOff = (e: MouseEvent<HTMLDivElement>) => {
    //     props.callback(!props.on)
    // }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !props.on ? "red" : "white",
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? "green" : "red",
    }



    return (
        <div>
            <div onClick={props.callback} className={'on'} style={onStyle}>On</div>
            <div onClick={props.callback} className={'off'} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;
