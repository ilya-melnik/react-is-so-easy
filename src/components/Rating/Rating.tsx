import {useState} from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean;
    setSelectedValue:(v:number)=>void
    value:number
}

export function Rating() {
    let [selectedValue, setSelectedValue] = useState(0)
    const starArray=[1,2,3,4,5]
    return<div>
        {starArray.map((el,i)=> <Star setSelectedValue={setSelectedValue} value={el} selected={selectedValue > i}/>)}
        {/*<Star setSelectedValue={setSelectedValue} value={1} selected={selectedValue > 0}/>*/}
        {/*<Star setSelectedValue={setSelectedValue} value={2} selected={selectedValue > 1}/>*/}
        {/*<Star setSelectedValue={setSelectedValue} value={3} selected={selectedValue > 2}/>*/}
        {/*<Star setSelectedValue={setSelectedValue} value={4} selected={selectedValue > 3}/>*/}
        {/*<Star setSelectedValue={setSelectedValue} value={5} selected={selectedValue > 4}/>*/}

    </div>

}

function Star(props: StarPropsType) {
    const selectedStarted = () => {

        props.setSelectedValue(props.value)
    }

    if (props.selected === true) {
        return (
            <span onClick={selectedStarted}>
        <b>star </b>

      </span>

        );
    } else {
        return (
            <span onClick={selectedStarted}>star </span>
        )
    }
}

export default Rating;
