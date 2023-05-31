import React, {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css'
import {log} from "util";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    item: ItemType[]

}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.item.find(i => i.value === props.value)
    const hoveredItem = props.item.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(false)

    }
useEffect(()=>{
    setHoveredElementValue(props.value)
},[props.value])

    const keyUpHan = (e: KeyboardEvent<HTMLDivElement>)=> {
        for( let i = 0; i < props.item.length; i++){
            if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                if (props.item[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"? props.item[i + 1]:props.item[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(e.key === 'Enter' || e.key === 'Escape'){
                setActive(false)
            }
        }
        if(!hoveredItem) {
            props.onChange(props.item[0].value)
        }
    }



    return (
        <>
            <div className={styles.select}   onKeyUp={keyUpHan} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}
                    >
                        {props.item.map(i => <div
                            onMouseEnter={()=> setHoveredElementValue(i.value)}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                            onClick={() => onItemClick(i.value)}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>

        </>
    )
}



