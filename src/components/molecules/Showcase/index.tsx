import React from "react"
import ColumnsWrapper from "../ColumnsWrapper"
import CardProduct from "../CardProduct"
import {ProductArrayType} from "../../../tsTypes"
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect"
import Container from "../../atoms/Container";

interface ShowCaseType extends compProps {
    onClick: (item: any) => void,
    catalogPath: string
}

const Showcase: React.FC<RESTProps & ShowCaseType>
    = ({data, getItems, onClick, catalogPath}) => {
    return (
        <Container className={'container_desktop'}>
            <ColumnsWrapper
                type={"showcase"}
                items={data.items as ProductArrayType[]}
                card={
                    (item) => {
                        return (
                            <CardProduct
                                link={`${catalogPath + '/' + (item as ProductArrayType).id}`}
                                onClick={onClick}
                                item={item as ProductArrayType}
                            />
                        )
                    }

                }
            />
        </Container>
    )
};
export default withRESTConnect<RESTProps & ShowCaseType>(Showcase)
