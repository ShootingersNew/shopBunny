import React from "react"
import {api} from "../../api/api"
import {PriceArrayType, ProductArrayType, StaffArrayType} from "../../tsTypes"
import {Subtract} from 'utility-types'

export interface RESTProps {
    data: {
        items?: (PriceArrayType | ProductArrayType | StaffArrayType)[],
        base?: any
    }
}

export interface compProps {
    getItems?: string | { url: string, tag: string }
    getGlobalInfo?: boolean,
}

interface CompStateTypes extends RESTProps {
}

const withRESTConnect = <T extends RESTProps>(Component: React.ComponentType<T>) => {

    //RESTProps - props injected by hoc
    class WithRESTConnect extends React.Component<Subtract<T, RESTProps> & compProps, CompStateTypes> {
        static displayName = `withOnChangeString(${Component.displayName || Component.name})`;

        state: CompStateTypes = {
            data: {}
        };
        //get items from bd

        getItems: () => void = () => {
            if (typeof this.props.getItems === 'string') {
                //get without filters
                api.get(this.props.getItems)
                    .then((res: any) => {
                        this.setState({data: {...this.state.data, items: res}})
                    });
            } else {
                //get with filters
                api.filterByTags(this.props.getItems?.url, this.props.getItems?.tag)
                    .then((res: any) => {
                        this.setState({data: {...this.state.data, items: res}})
                    })
            }

        };
        getData: () => void = () => {
            let newData = {};
            if (this.props.getItems) {
                newData = {...newData, items: this.getItems()}
            }
            if (this.props.getGlobalInfo) {
                newData = {...newData, globalInfo: api.get('globalInfo')}
            }
            this.setState({data: newData})
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
                    <Component {...this.props as T} data={this.state.data}/>
                </React.Fragment>
            )
        }
    }

    return WithRESTConnect
};

export default withRESTConnect
