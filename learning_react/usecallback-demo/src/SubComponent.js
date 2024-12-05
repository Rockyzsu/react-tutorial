import React, { useState, useCallback } from "react";

const MySubComponent = ({value}) => {
    console.log('render , ',value)
    const [values, setValues] = useState(value || {})
    console.log('values ',values)
    const setValue = useCallback(
        (field, v) => setValues((vs) =>({...vs,[field]: v })),
        [setValues]
    )
    const handleClick = () => {
        // 假设要更新名为'name'的字段，值为'John'
        setValue('name', 'John');
    };
    const getValue = ()=>{
        console.log(values)
    }
    return (
        
        <div>
            <button onClick={handleClick}>Update Value</button>
            <button onClick={getValue}>Get Value : </button>
        </div>
    );
};

export default MySubComponent;