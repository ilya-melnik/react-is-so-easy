import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import * as buffer from "buffer";
import UncontrolledAccordion from "./components/UnconrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App() {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [valueAccordion, setValueAccordion] = useState(true)
    return (
        <div className={'App'} >

            <Accordion titleValue={'Menu 1'} collapsed={valueAccordion} onClick={setValueAccordion}/>
            {/*<Rating  value={ratingValue}  onClick={setRatingValue}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'React JS'}/>*/}
            {/*<PageTitle title={' chapter 456'}/>*/}
            {/*<div>Article 1</div>*/}
            {/*<Rating value={1}/>*/}


            {/*<Accordion titleValue={'Menu 2'} collapsed={false}/>*/}

            {/*<Rating value={1}/>*/}

            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

             {/*<UncontrolledRating />*/}
            {/*<UncontrolledAccordion titleValue={'Menue 1'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menue 2'}/>*/}

            {/*<div>Article 2</div>*/}


        </div>
    );
}

// type PageTitlePropsType = {
//     title: string;
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <h1>{props.title} </h1>
// }

export default App;
