import React, { useState } from "react";
import List from "./List";

const Input = (props) => {

    const [inputVal, setInputVal] = useState("");
    const [items, setItems] = useState(props.names)
    
    const onSubmitClick = (e) => {
        e.preventDefault();       
        setItems(() => [...items, inputVal])
        console.log(items);
        setInputVal('')
        
    }
    const onChangeVal = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <>
            <form onSubmit={onSubmitClick}>
                <input type="text" onChange={onChangeVal} value={inputVal}/>
                <button>Submit</button>

            </form>
             <List name={items}   /> 
            
        </>
    )

}

export default Input