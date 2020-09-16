import React from "react";
import './style.css'

const ChangeUI: React.FC<{ placeholder: string, addButton?: boolean }> = ({placeholder, addButton}) => {
    return (
        <div className={'changeUI'}>
            <input defaultValue={placeholder} type="text"/>
            <button>{addButton ? "Добавить" : "Изменить"}</button>

        </div>
    )
};
export default ChangeUI
