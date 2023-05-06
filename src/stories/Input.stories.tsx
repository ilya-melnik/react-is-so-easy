import React, {ChangeEvent, MouseEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',


};

export const UncontrolledInput = () => < input/>

export const TrackValueUnControlledInput = () => {
    let [value, setValue] = useState('')
    return <>
        < input onChange={(e) => {
            setValue(e.currentTarget.value)
        }
        }/> - {value}
    </>
}

//by ref
export const GetValueUnControlledInputByPressButton = () => {
    const [value, setValue] = useState('')
    const inpRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inpRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        < input ref={inpRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>


}

export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <>
        <input value={parentValue} onChange={onChange}/>
    </>
}
export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState<boolean>(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <>
        <input  type={"checkbox"} checked={parentValue} onChange={onChange}/>
    </>
}
export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return <>
    <select value={parentValue}>
        <option value="0">none</option>
        <option value="1">WA</option>
        <option value="2">CA</option>
        <option value="3">SC</option>
    </select>
    </>

}





