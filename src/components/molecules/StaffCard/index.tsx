import React from "react";
import Card from "../../atoms/Card";
import {StaffArrayType} from "../../../tsTypes";
import Heading from "../../atoms/Heading";
import './style.css'

const StaffCard: React.FC<StaffArrayType> = ({preview, post, name}) => {
    return (
        <Card
            className={'staffCard'}
            preview={<img className={'staffCard__img'} src={preview} alt={name}/>}
            content={
                <div className="staffCard__content">
                    <Heading className={'staffCard__header'} type={3}>{name}</Heading>
                    <div className="staffCard__post">{post}</div>
                </div>
            }
        />
    )
};

export default StaffCard
