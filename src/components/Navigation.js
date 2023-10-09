import React from "react";
import Popup from "reactjs-popup";
  

export default function Navigation() {
    let val = 1
    function mybutton(name){
        val = name
    }

    
    return (
    <div className="nav">
        <Popup trigger={<button className="basket"></button>} position="bottom left">
            <div className="basket">
                <h2 className="basket">Корзина</h2>
            </div>
        </Popup>
    

    
    
    <button name="NavButton1" onClick={() => mybutton(1)}>Мебель</button>
    <button name="NavButton2" onClick={() => mybutton(2)}>Освещение</button>
    <button name="NavButton3" onClick={() => mybutton(3)}>Декорации</button>
    <div>{val}</div>

    <div>
    {val === 1 && 
    <div>
    Один
    </div>}
    {val === 2 && 
    <div>
    Два
    </div>}
    {val === 3 && 
    <div>
    Три
    </div>}
    </div>

    </div>
    )
}