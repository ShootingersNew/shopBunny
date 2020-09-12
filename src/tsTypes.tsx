export type LinkItemType = {
    title: string,
    link?: string,
    abbreviation?: string
}

export type ProductArrayType = {
    preview: string,
    name: string,
    type: string,
    cardTags: LinkItemType[],
    filterTags: string[]
}
export type StaffArrayType = {
    preview: string,
    name: string,
    post: string
}
export type InfoArrayType = {
    title: string,
    price: string,
    shortDesc: string,
    definition: string,
    purpose: string[]
}
export type PriceArrayType = {
    preview: string
    title: string[] | string,
    subTitle: string | JSX.Element | object,
    type: string,
    list: string[]
}
