import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";
import Furn from "../Products/Tabs/Furniture";
import Decor from "../Products/Tabs/Decorations";
import Light from "../Products/Tabs/Light";
import Menu from "../Account/Menu";
import LogAcc from "../Account/LoginAccount.json";


export default function Navigation() {

    const [val, setValue] = useState(Furn("Name"));
    const [numd, setnumd] = useState(1);
    const [type, settype] = useState("Name");
    const [autor,setautor] = useState(LogAcc)

    const rend = (num, t) => {
        settype(t)  
        list(num, t)
    }

    const list = (numder, type) => {
        setnumd(numder)
        if (numder === 1) {
            setValue(Furn(type))
        }
        if (numder === 2) {
            setValue(Light(type))
        }
        if (numder === 3) {
            setValue(Decor(type))
        }
    }




    return (
        <div>
            <div className="nav">
                <Popup trigger={<button className="basket"></button>} position="bottom left">
                    <div className="basket">
                        <h2 className="basket">Корзина</h2>
                    </div>
                </Popup>

                <button className="nav-but" onClick={() => list(1, type)} >Мебель</button>
                <button className="nav-but" onClick={() => list(2, type)}>Освещение</button>
                <button className="nav-but" onClick={() => list(3, type)}>Декорации</button>

                <Popup trigger={<button className="reg"></button>} position="bottom right">
                    <div className="basket">
                        <h2 className="basket">Регистрация</h2>
                        {Menu(autor,setautor)}
                    </div>
                </Popup>

            </div>

            <div className="SortAling">
                <div className="Sort">
                    <p className="SortText">Сортировка по:</p>
                    <select className="SortList" id="SortList">
                        <option className="SortListOption" value={"Name"}>Имени</option>
                        <option className="SortListOption" value={"Price"}>Цене</option>
                    </select>
                    <button className="SortListButton" onClick={() => rend(numd, document.getElementById("SortList").value)} > Применить</button>

                </div>
            </div>

            <div className="mainShop">
                <div>{val}</div>
            </div>


        </div>
    )

}