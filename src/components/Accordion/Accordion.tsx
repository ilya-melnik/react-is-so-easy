type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}

type AccordionTitleComponentType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    if(props.collapsed === true){
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    );} else {
        return (
            <AccordionTitle title={props.titleValue}/>
        )
    }
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
