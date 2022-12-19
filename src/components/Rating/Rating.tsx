import {useState} from "react";

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean;
    setSelectedValue: (v: number) => void
    value: number
}

export function Rating() {
    let [selectedValue, setSelectedValue] = useState(0)
    const starArray = [1, 2, 3, 4, 5]
    return <div>
        {starArray.map((el, i) => <Star setSelectedValue={setSelectedValue} value={el} selected={selectedValue > i}/>)}

    </div>

}

function Star(props: StarPropsType) {
    const selectedStarted = () => {
        props.setSelectedValue(props.value)
    }
    {
        props.selected ? <span onClick={selectedStarted}>
        <b>star </b>

      </span> : <span onClick={selectedStarted}>
        <b>star </b>

      </span>
    }
    // props.selected ? <span onClick={selectedStarted}><b>star </b></span>
    //     : <span onClick={selectedStarted}><b>star </b></span>

    // props.selected && <span onClick={selectedStarted}><b>star </b></span>
    // props.selected && <span onClick={selectedStarted}>star </span>

    if (props.selected) {
        return <span onClick={selectedStarted}><b>star </b></span> ;}
    else {
        return <span onClick={selectedStarted}>star </span>
    }
}

export default Rating;
