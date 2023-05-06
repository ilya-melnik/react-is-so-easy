import React, {useState} from 'react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={'menu'}  collapsed={true} onClick={callback}/>
export const MenuUnCollapsedMode = () => <Accordion titleValue={'menu'}  collapsed={false} onClick={callback}/>
export const MenuChangeMode = () => {
    let [value, setValue] = useState<boolean>(true)
const changeCollapsed = () => setValue(!value)
    return<>
        <Accordion titleValue={'menu'} collapsed={value} onClick={changeCollapsed}/>
    </>

}
