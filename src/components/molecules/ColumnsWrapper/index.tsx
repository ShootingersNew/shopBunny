import React from "react";
import cn from 'classnames'
import {PriceArrayType, ProductArrayType, StaffArrayType} from "../../../tsTypes";
import './style.css'

type ColumnsWrapperTypes = {
    items: (ProductArrayType | StaffArrayType | PriceArrayType) [],
    card: (item: ProductArrayType | StaffArrayType | PriceArrayType) => JSX.Element,
    type: 'showcase' | 'info' | 'staff' | 'price'
}
const ColumnsWrapper: React.FC<ColumnsWrapperTypes> = ({items, card, type}) => {
    const classNames = cn(
        [`columnsWrapper columnsWrapper_${type}`]
    );
    const mapItems = items.map((item) => {
        return card(item)
    });
    return (
        <div>
            <section className={classNames}>
                {mapItems}
            </section>
        </div>
    )
};
export default ColumnsWrapper
