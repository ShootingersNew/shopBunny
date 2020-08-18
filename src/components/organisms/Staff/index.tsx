import React from "react";
import Subheader from "../../molecules/Subheader";
import ColumnsWrapper from "../../molecules/ColumnsWrapper";
import {StaffArrayType} from "../../../tsTypes";
import StaffCard from "../../molecules/StaffCard";

const Staff: React.FC = () => {
    const staffArray: StaffArrayType[] = [
        {
            name: 'Алина Красильникова',
            preview: '#',
            post: 'Арт-директор'
        },
        {
            name: 'Алина Красильникова',
            preview: '#',
            post: 'Арт-директор'
        },
        {
            name: 'Алина Красильникова',
            preview: '#',
            post: 'Арт-директор'
        },

    ];

    return (
        <section className="staff">
            <Subheader>Ответственные за результат</Subheader>
            <ColumnsWrapper
                items={staffArray as StaffArrayType[]}
                type={"staff"}
                card={(item) => <StaffCard {...item as StaffArrayType}/>}>

            </ColumnsWrapper>
        </section>
    )
};

export default Staff
