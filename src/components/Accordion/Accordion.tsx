import {string} from "prop-types";

export type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onClick: (e: any) => void
    item: Array<ItemType>
    onClickItem: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            < AccordionTitle title={props.titleValue}  onClick={props.onClick}   />
            {!props.collapsed && <AccordionBody item={props.item}  onClickItem={props.onClickItem}/>}
        </div>
    );
}


type AccordionTitleComponentType = {
    title: string
    onClick: ( e: any) => void
}

function AccordionTitle(props: AccordionTitleComponentType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}


export type AccordionBodyPropsType = {
    item: Array<ItemType>
    onClickItem: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.item.map( (i, index)=> <li key={index} onClick={()=>props.onClickItem(i.value)}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;
