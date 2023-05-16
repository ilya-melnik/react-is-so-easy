import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UnconrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [valueAccordion, setValueAccordion] = useState(true)
    let [on, setOn] = useState(true)

    const onClickItem = () => {}
    // const onChangeSelect = () => {}
    // let [select, setSelect] = useState<boolean>(false)
    // const onClick = () => {
    //     setSelect(!select)
    // }
    return (
        <div className={'App'}>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

            <Accordion titleValue={'Menu 1'} collapsed={valueAccordion} onClick={(e) => {

                setValueAccordion(!valueAccordion)
            }} item={[{title: 'Illia', value: 1}, {title: 'Nina', value: 2}, {
                title: 'Evelina',
                value: 3
            }, {title: 'Vova', value: 4}]} onClickItem={onClickItem}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledAccordion titleValue={'Menu 1'}/>

            <OnOff on={on} callback={() => {
                setOn(!on)
            }}/>


            {/*<Select select={select}  onClick={onClick} value={1} onChange={onChangeSelect} item={[*/}
            {/*    {title: 'Illia', value: 1},*/}
            {/*    {title: 'Nina', value: 2},*/}
            {/*    {title: 'Evelina', value: 3},*/}
            {/*    {title: 'Vova', value: 4}]}*/}

            {/*/>*/}

        </div>
    );
}

export default App;
