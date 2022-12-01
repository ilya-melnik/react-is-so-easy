import {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean;

}

type AccordionTitleComponentType = {
    title: string
    callback:(q: boolean)=>void
    collapsed:boolean

}

export function UncontrolledAccordion(props: AccordionPropsType) {
let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            < AccordionTitle title={props.titleValue} callback={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitleComponentType) {
    const unCollapsedAccordion = ()=> {
        return  props.callback(!props.collapsed)
    }
    return <h3 onClick={unCollapsedAccordion} >{props.title}</h3>;
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
export default UncontrolledAccordion;


//
