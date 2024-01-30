import React from "react";
import Popup from "reactjs-popup";
import { useState } from "react";

export default function Navigation() {

    function NavButton() {
        const [value, setValue] = useState(1);


        function click(numder) {
            setValue(numder);
        }
        return (<div>
            <div>
                <button className="nav-but" onClick={click(1)}>Мебель</button>
                <button className="nav-but" onClick={click(2)}>Освещение</button>
                <button className="nav-but" onClick={click(3)}>Декорации</button>
            </div>
            {value}
        </div>
        )

    }



    return (
        <div className="nav">
            <Popup trigger={<button className="basket"></button>} position="bottom left">
                <div className="basket">
                    <h2 className="basket">Корзина</h2>
                </div>
            </Popup>


            <NavButton/>


        </div>
    )

}