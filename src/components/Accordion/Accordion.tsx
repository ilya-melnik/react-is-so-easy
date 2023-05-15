export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onClick: (e: any) => void
    item: string[]
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            < AccordionTitle title={props.titleValue}  onClick={props.onClick}   />
            {!props.collapsed && <AccordionBody item={props.item} />}
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

    item: string[]
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.item.map( (i, index)=> <li key={index}>{i}</li>)}
        </ul>
    );
}

export default Accordion;
