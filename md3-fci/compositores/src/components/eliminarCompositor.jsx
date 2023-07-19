import {useState} from 'react';

function EliminarCompositor(props){

    const [text,setText]=useState("");

    function manageChange(e){
        setText(e.target.value);
    };

    function borrar(){
        props.borrarCompositor(text);
    };
    
    return(
        <>
            <input type="text" value={text} onChange={manageChange}></input>
            <button onClick={borrar}>Borrar</button>
        </>
    );
};


export default EliminarCompositor;