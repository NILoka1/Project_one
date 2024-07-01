import React from "react";
import Date from "../Furniture.json"
import sort from "../Tabs/Sort.js"
import Popup from "reactjs-popup";


export default function Furn(type) {

    Date = sort(Date, type)




    let ListItem = Date.map((d) =>
        <div className="ShopItem" key={d.ID}>
            <img className="FurIMG" alt="Фотка не подгрузилась" src={d.ImgUrl}></img>
            <div className="ShopItemText">
                <p className="ItemName" >{d.Name}</p>
                <div className="row">
                    <p className="ItemPrice" >{d.Price} ₽</p>
                    <Popup trigger={<div className="MoreButton"> Подробнее</div>} position="right">
                        <div className="More">
                            <p className="ItemPrice" >Размеры: {d.Size}</p>
                            <p className="ItemPrice" >Кол-во спальных мест: {d.SleepingPlaces}</p>
                        </div>
                    </Popup>
                </div>
                <button className="ShopButton">Добавить в корзину</button>
            </div>
        </div>);



    return (
        <div>
            <div className="ShopItems">
                {ListItem}
            </div>
        </div>

    )


}











