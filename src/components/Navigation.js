import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";

export default function Navigation() {

    const [value, setValue] = useState("Тут будет мебель");

    const list = (numder) =>{
        if (numder === 1){
            setValue("Тут будет мебель")
        }
        if (numder === 2){
            setValue("Тут будет свет")
        }
        if (numder === 3){
            setValue("Тут будет декор")
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

                <button className="nav-but" onClick={() => list(1)} >Мебель</button>
                <button className="nav-but" onClick={() => list(2)}>Освещение</button>
                <button className="nav-but" onClick={() => list(3)}>Декорации</button>

                <Popup trigger={<button className="reg"></button>} position="bottom right">
                    <div className="basket">
                        <h2 className="basket">Регистрация</h2>
                    </div>
                </Popup>

            </div>

            <div className="mainShop">
                <div>{value}</div>
            </div>


        </div>
    )

}