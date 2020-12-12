export type LinkItemType = {
    title: string,
    abbreviation?: string,
    link?: string
}

export type ProductArrayType = {
    id: number,
    preview: string,
    name: string,
    type: string,
    cardTags: LinkItemType[]
}
export type StaffArrayType = {
    preview: string,
    name: string,
    post: string
}

export interface ItemIdTypes {
    type: string,
    id: number | string
}

export interface InfoArrayType {
    preview: string,
    title: string,
    subTitle: string,
    type: string,
    list: string[],
    slug: string
}

export type ReviewsArrayType = {
    name: string,
    date: string,
    text: string,
    preview: string,
    mark: number,
    link: string
}
export type PriceArrayType = {
    preview: string
    title: string[] | string,
    subTitle: string | JSX.Element | object,
    type: string,
    list: string[]
}
