import React from 'react'

let category={
    name: 'Presentacion personal',
    items: [ {name:'maquillaje',score:5},
            {name:'vestuario',score: 4},
            {name:'Apariencia fisica',score:5},
            {name:'Peinado',score:5} ]  
    }
export default function TableGenerator(){
    return( <div style={{display:'flex', alignItems:'center'}}>
           <div>{category.name}</div>
    <div> {category.items.map((item)=>
        <div style={{ padding: '0.7rem'}}>

        <div style={{ display: 'flex', gap: '5rem'}}>
            <div>{item.name}</div>
            <div>{item.score}</div>
        </div>      
        </div>)}
        </div>
        

    </div>)
     
}