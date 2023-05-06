export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            < AccordionTitle title={props.titleValue}  onClick={props.onClick}  />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}


type AccordionTitleComponentType = {
    title: string
    onClick: ( ) => void
}

function AccordionTitle(props: AccordionTitleComponentType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;
