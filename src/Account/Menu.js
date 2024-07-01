import React from "react";
import LogIn from "./LogIn";


export default function Menu(Autor,setAutor){
    if(Autor.login === ""){


        return(
            <div>{LogIn(Autor,setAutor)}</div>
        )
    }

    else{
        return(
            <div>
            <div>Ваш аккаунт:{Autor.login}</div>
            <button onClick={()=>{setAutor({"login":"","Password":""})}}>Выйти из аккаунта</button>
            </div>
        )
    }

}