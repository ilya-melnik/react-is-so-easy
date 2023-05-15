import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnOff from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        variant: {
            options: ['On', 'Off'],
            control: { type: 'radio' },
        },
    },
}

const callback = action('on or off clicked')

export const onMode = () => <OnOff on={true} callback={callback}/>
export const offMode = () => <OnOff on={false} callback={callback}/>

export const ModeChanging = () => {
    let [value, setValue]=useState<boolean>(true)
    return <>

        <OnOff on={value} callback={()=>setValue(!value)}/>
    {/*    'on or off clicked')  ---  как отображать в режиме mode*/}

    </>
}
