import React from "react";
import Card from "../../atoms/Card";
import {StaffArrayType} from "../../../tsTypes";
import Heading from "../../atoms/Heading";
import './style.css'

const StaffCard: React.FC<StaffArrayType> = () => {
    return (
        <Card
            className={'staffCard'}
            preview={<div className={'staffCard__img'}/>}

            content={
                <div className="staffCard staffCard__content">
                    <Heading className={'staffCard__header'} type={3}>Алина Красильникова</Heading>
                    <div className="staffCard__post">Арт-директор</div>
                </div>
            }
        />
    )
};

export default StaffCard
