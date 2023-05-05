import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnOff from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const onMode = () => <OnOff on={true} callback={callback}/>
export const offMode = () => <OnOff on={false} callback={callback}/>

export const ModeChanging = () => {
    let [value, setValue]=useState<boolean>(true)
    return <>

        <OnOff on={value} callback={()=>setValue(!value)}/>

    </>
}
