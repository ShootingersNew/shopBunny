import React from "react"
import ColumnsWrapper from "../ColumnsWrapper"
import CardProduct from "../CardProduct"
import {ProductArrayType} from "../../../tsTypes"
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect"
import Container from "../../atoms/Container";

interface ShowCaseType extends compProps {
    onClick: (item: any) => void
}

const Showcase: React.FC<RESTProps & ShowCaseType> = ({data, getItems, onClick}) => {
    return (
        <Container>
            <ColumnsWrapper
                type={"showcase"}
                items={data.items as ProductArrayType[]}
                card={(item) => <CardProduct onClick={onClick} item={item as ProductArrayType}/>}
            />
        </Container>
    )
};
export default withRESTConnect<RESTProps & ShowCaseType>(Showcase)
