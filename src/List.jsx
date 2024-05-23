import React from 'react'


const List = (props) => {
    const name = props.name;
    return (
        <>
            <ul>
               
               {name?.map((item, index) => { 
               
               return <li key={index}>{item}</li>
               })}
            </ul>
        </>
    )
}

export default List;