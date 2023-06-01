import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string;
}

type AccordionTitleComponentType = {
    title: string
    callback: any // ?????????????????????????????????????????????/
    collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {



    let [state, dispatch] = useReducer(reducer, {collapsed: true})

    return (
        <div>
            < AccordionTitle title={props.titleValue} callback={dispatch} collapsed={state.collapsed}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitleComponentType) {
    const unCollapsedAccordion = () => {
        return props.callback({type: TOGGLE_COLLAPSED})
    }
    return <h3 onClick={unCollapsedAccordion}>{props.title}</h3>;
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
