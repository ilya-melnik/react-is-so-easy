type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;

}

type AccordionTitleComponentType = {
    title: string

}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            < AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitleComponentType) {
    return <h3>{props.title}</h3>;
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
