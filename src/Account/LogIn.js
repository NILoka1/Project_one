import React from "react";
import LogAcc from "../Account/LoginAccount.json";



export default function LogIn(autor,setAutor) {

    let email = React.createRef();
    let password = React.createRef();

    const onSubmit = () => {
        LogAcc.login = email.current.value
        LogAcc.Password = password.current.value
        setAutor(LogAcc)
    }

    return (
        <div>
            <input type="email" ref={email} ></input>
            <input type="password" ref={password} ></input>
            <button onClick={()=>{onSubmit()}}>Регистрация</button>
        </div>
    )

}