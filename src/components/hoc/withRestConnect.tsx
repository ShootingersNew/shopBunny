import React from "react"
import api from "../../api/graphql/app";
import {Subtract} from 'utility-types'
import {ItemIdTypes, ReviewsArrayType} from "../../tsTypes";

export interface RESTProps extends StateDataInterface {
}

export interface compProps {
    getItems?: string | { url: 'projects' | 'staff' | 'blog' | string, tag: string }
    getGlobalInfo?: boolean,
    getAll?: boolean,
    getItem?: ItemIdTypes,
    getReviews?: boolean,
    getFilters?: 'projects' | 'blog',
    getArticleId?: (p: ItemIdTypes) => number
}

interface StateDataInterface {
    data: {
        items?: any,
        base?: any,
        item?: any,
        filters?: { title: string, slug: string, abbreviation: string }[],
        reviews?: ReviewsArrayType[]
    },
}

interface CompStateTypes extends StateDataInterface {
    itemId: ItemIdTypes
}

const withRESTConnect = <T extends RESTProps>(Component: React.ComponentType<T>) => {
    //RESTProps - props injected by hoc
    class WithRESTConnect extends React.Component<Subtract<T, RESTProps> & compProps, CompStateTypes> {
        static displayName = `withOnChangeString(${Component.displayName || Component.name})`;

        state: CompStateTypes = {
            data: {
                item: {}
            },
            itemId: {type: 'projects', id: 1},
        };
        updateStateItems: (getAllItemsFun: () => void, getFilteredFun: () => void) => void = (getAllItemsFun, getFilteredFun) => {

        };
        //get items from bd
        getItems: () => void = () => {
            const type = () => {
                return typeof this.props.getItems === 'string' ? this.props.getItems : this.props.getItems?.url
            };
            switch (type()) {
                case "projects":
                    if (typeof this.props.getItems === 'string') {
                        //get without filters
                        api(`getProjects { id, preview, name, type, cardTags{title, slug, abbreviation} }`)
                            .then((res: any) => {
                                this.setState({data: {...this.state.data, items: res.getProjects}})
                            });
                    } else {
                        //get with filters
                        api(`filterProjects(tag:"${this.props.getItems?.tag}") {id, preview, name, type, filterTags,cardTags {title, abbreviation} }`)
                            .then((res: any) => {
                                this.setState({data: {...this.state.data, items: res.filterProjects}})
                            })
                    }
                    break;
                case "staff":
                    api(`getStaff { name, preview, post} `)
                        .then((res: any) => {
                            this.setState({data: {...this.state.data, items: res.getStaff}})
                        });
                    break;
                case 'blog':
                    if (typeof this.props.getItems === 'string') {
                        //get without filters
                        api(`getBlogEntries {id, html, contents, preview, name, type, cardTags{ title, slug, abbreviation}}`)
                            .then((res: any) => {
                                this.setState({data: {...this.state.data, items: res.getBlogEntries}})
                            })
                    } else {
                        //get with filters
                        api(`filterBlogEntries(tag:"${this.props.getItems?.tag}") {id,  html, preview, name, type, filterTags,cardTags {title, abbreviation},  contents }`)
                            .then((res: any) => {
                                this.setState({data: {...this.state.data, items: res.filterBlogEntries}})
                            })
                    }
                    break;
                case "info":
                    api(`getInfo { preview, title, subTitle, list, type}`)
                        .then((res: any) => {
                            this.setState({data: {...this.state.data, items: res.getInfo}})
                        })

            }
        };
        getGlobal: () => void = () => {
            api(`global { socials {youtube,vk}, phone }`)
                .then((res: any) => {
                    this.setState({data: {...this.state.data, base: res.global}})
                })
        };
        getItem: () => void = () => {
            switch (this.props.getItem?.type) {
                case 'blog':
                    api(`getBlogEntry(payload:${this.props.getItem?.id}) {id, html, contents, preview, name, type, cardTags{title,slug,abbreviation}}`)
                        .then((res) => {
                            this.setState({data: {...this.state.data, item: res.getBlogEntry}})
                        });
                    break;
                case 'info':
                    api(`getSingleInfo(payload:"${this.props.getItem?.id}") { preview, title, subTitle, type, list, slug }`)
                        .then((res) => {
                            console.log(res);
                            this.setState({data: {...this.state.data, item: res.getSingleInfo}})
                        });
                    break;
                case 'portfolio':
                    api(`getProject(id:${this.props.getItem?.id}) {id, preview, name, type, cardTags{ title, slug, abbreviation},sizes{res, title,id,slug}, url}`)
                        .then((res) => {
                            this.setState({data: {...this.state.data, item: res.getProject}})
                        });
                    break;
            }
        };
        getReviews: () => void = () => {
            api(`getReviews {name, date, text, preview, mark, link}`)
                .then((res) => {
                    this.setState({data: {...this.state.data, reviews: res.getReviews}})
                });
        };
        getData: () => void = () => {
            if (this.props.getItems) {
                this.getItems()
            }
            if (this.props.getGlobalInfo) {
                this.getGlobal()
            }
            if (this.props.getItem) {
                this.getItem()
            }
            if (this.props.getReviews) {
                this.getReviews()
            }
            if (this.props.getFilters) {
                this.getFilters();
            }
        };
        getFilters: () => void = () => {
            if (this.props.getFilters && this.props.getFilters === 'projects') {
                api(`getInfo {title, preview, subTitle, type, list,slug}`).then((res: any) => {
                    this.setState({data: {...this.state.data, filters: res.getInfo}})
                })
            } else {
                api(`getBlogTags {title,slug}`).then((res: any) => {
                    this.setState({data: {...this.state.data, filters: res.getBlogTags}})
                })
            }
        };
        getArticleId: (p: ItemIdTypes) => void = (p) => {
            this.setState({itemId: p})
        };

        componentDidUpdate(prevProps: Readonly<Subtract<T, RESTProps> & compProps>, prevState: Readonly<CompStateTypes>, snapshot?: any): void {
            if (prevProps !== this.props) {
                this.getData()
            }
        }

        componentDidMount() {
            this.getData()
        }


        render() {
            return (
                <React.Fragment>
                    <Component
                        {...this.props as T}
                        data={this.state.data}
                        getArticle={this.getArticleId}
                    />
                </React.Fragment>
            )
        }
    }

    return WithRESTConnect
};

export default withRESTConnect
