import React from "react";
import ColumnsWrapper from "../../molecules/ColumnsWrapper"
import Subheader from "../../molecules/Subheader"
import CardPrice from "../../molecules/CardPrice"
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect";
//styles
import './style.css'

import {PriceArrayType} from "../../../tsTypes"

const PriceList: React.FC<RESTProps & compProps & { scrollTo: number | undefined }> = ({scrollTo, data}) => {
    return (
        <section className="priceList">
            <Subheader>Стоимость и сроки</Subheader>
            <ColumnsWrapper
                items={data.items as PriceArrayType[]}
                type={'price'}
                card={(item) => (
                    <CardPrice className={'priceList__card'} scrollTo={scrollTo} {...item as PriceArrayType}/>)}
            />
        </section>
    )
};
export default withRESTConnect(PriceList)
