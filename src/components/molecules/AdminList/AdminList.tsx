import React, {useEffect} from "react"
import './style.css'
import ChangeUI from "../ChangeUI";

const AdminList: React.FC<{ items: any[] }> = ({items}) => {
    useEffect(() => {

    });
    const renderItems = () => {
        return items.map((item) => {
            return (
                <li className="adminList__item">
                    <div style={{backgroundImage: `url(${item.preview})`}} className="adminList__img"/>
                    <div>{item.name} <ChangeUI placeholder={item.name}/></div>
                    <div>{item.type} <ChangeUI placeholder={item.type}/></div>
                    <div className="adminList__tags">
                        <ul className="adminList__tagList">
                            Тэги
                            {
                                item.filterTags.map((item: string, idx: number) => {
                                    return <li key={idx} className={'adminList__tagListItem'}>{item} {<ChangeUI
                                        placeholder={item}/>}</li>
                                })}
                        </ul>
                        <ChangeUI placeholder={''} addButton={true}/>
                    </div>
                </li>
            )
        })
    };


    return (
        <ul className={'adminList'}>
            {items && renderItems()}
        </ul>
    )
};
export default AdminList
