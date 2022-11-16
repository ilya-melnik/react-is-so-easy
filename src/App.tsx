import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

// function hello() {
//     debugger;
//     alert("Hello world");
// }

// hello();

function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'React JS'}/>*/}
            {/*<PageTitle title={' chapter 456'}/>*/}
            {/*<div>Article 1</div>*/}
            {/*<Rating value={1}/>*/}

            <Accordion titleValue={'Menue 1'} collapsed={true}/>
            <Accordion titleValue={'Menue 2'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>

            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>


            {/*<div>Article 2</div>*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
