import React, {useState} from "react";
import {string} from "prop-types";
import {FormControl, InputLabel, MenuItem} from "@mui/material";

type ItemType = {
    title: string
    value: any

}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: Array<ItemType>
    select:boolean
    onClick: ()=> void
}

export function Select(props: SelectPropsType) {


    return (


        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            {/*<div onClick={props.onClick}  onChange={()=>{}}>{props.item.find(t=> t === t.value)}</div>*/}
            {/* {!props.select && props.item.map((i, index) => <li key={index} value={i.value}>{i.title}</li>)}*/}
        </div>
    )

}

export default Select;
