import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select
};


export const WithValue = () => {
    const [value, setValue] = useState('1')
    return <>
        <Select onChange={setValue}
                value={value}
                item={[
                    {value: '1', title: 'Kiev'},
                    {value: '2', title: 'Seattle'},
                    {value: '3', title: 'Sacramento'},
                ]}

        />

    </>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
return <>
    <Select onChange={setValue}
            value={value}
            item={[
                {value: '1', title: 'Kiev'},
                {value: '2', title: 'Seattle'},
                {value: '3', title: 'Sacramento'},
            ]}
    />
</>
}

