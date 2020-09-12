import React from "react";
import Subheader from "../../molecules/Subheader";
import ColumnsWrapper from "../../molecules/ColumnsWrapper";
import {StaffArrayType} from "../../../tsTypes";
import StaffCard from "../../molecules/StaffCard";
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect";

const Staff: React.FC<compProps & RESTProps> = ({data}) => {
    return (
        <section className="staff">
            <Subheader>Ответственные за результат</Subheader>
            <ColumnsWrapper
                items={data.items as StaffArrayType[]}
                type={"staff"}
                card={(item) => <StaffCard {...item as StaffArrayType}/>}>

            </ColumnsWrapper>
        </section>
    )
};

export default withRESTConnect(Staff)
