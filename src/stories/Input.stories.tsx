import React, {MouseEvent, useRef, useState} from 'react';



export default {
    title: 'input',


};

export const UncontrolledInput = () => < input/>
export const ControlledInput = () => < input value={'Hello'}/>
export const TrackValueUnControlledInput = () => {
    let [value, setValue] = useState('')
  return <>
      < input onChange={(e)=>{
      setValue(e.currentTarget.value)
      }
      } /> - {value }
  </>
}

//by ref
export const GetValueUnControlledInputByPressButton = () => {
    const [value, setValue] = useState('')
    const inpRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el  = inpRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        < input ref={inpRef} /> <button onClick={save}>save</button> - actual value: {value}
    </>

}





