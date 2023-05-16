import React, {useState} from 'react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')
const onClickItem = action('item was clicked!')

export const MenuCollapsedMode = () => <Accordion titleValue={'menu'}  collapsed={true} onClick={callback} item={[]} onClickItem={onClickItem}/>
export const MenuUnCollapsedMode = () => <Accordion titleValue={'menu'}  collapsed={false} onClick={callback} item={[{title: 'Illia', value: 1},{title: 'Nina', value: 2},{title: 'Evelina', value: 3},{title: 'Vova', value: 4}]} onClickItem={onClickItem}/>
export const MenuChangeMode = () => {
    let [value, setValue] = useState<boolean>(true)
const changeCollapsed = () => setValue(!value)
    return<>
        <Accordion titleValue={'menu'} collapsed={value} onClick={changeCollapsed} item={[{title: 'Illia', value: 1},{title: 'Nina', value: 2},{title: 'Evelina', value: 3},{title: 'Vova', value: 4}]} onClickItem={onClickItem}/>
    </>

}
