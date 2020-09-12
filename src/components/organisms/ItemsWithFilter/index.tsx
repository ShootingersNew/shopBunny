import React, {useState} from "react"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import './style.css'
import Subheader from "../../molecules/Subheader"
import {LinkItemType} from "../../../tsTypes"
import Filters from "../../molecules/Filters"
import cn from 'classnames'
import Showcase from "../../molecules/Showcase";


type ProjectPropTypes = {
    tags?: LinkItemType[],
    heading?: boolean,
    isWithSwitch?: boolean,
    url: string,
    isWithClearButton?: boolean,
    isWithSearch?: boolean,
    openInArticles?: boolean
}

const ItemsWithFilter: React.FC<ProjectPropTypes>
    = ({isWithSearch, openInArticles, heading, isWithSwitch, url, tags, isWithClearButton}) => {
    const [activeFilter, setActiveFilter] = useState('');

    const projectFiltersClassNames = cn({
        projects__filters: true,
        'projects__filters_heading_false': heading === undefined,
        'projects__filters_short': tags !== undefined && tags.length <= 4
    });

    const filterClickHandler: (filterVal: string) => void
        = (filterVal) => {
        setActiveFilter(filterVal);
    };
    const itemClickHandler: (item: any) => void =
        (item) => {
            console.log(item)
        };

    const clearFilter: () => void
        = () => {
        setActiveFilter('')
    };
    const getItemsUrl = () => {
        let idUrl;
        if (activeFilter === '') {
            idUrl = url
        } else {
            idUrl = {url: url, tag: activeFilter}
        }
        return idUrl
    };
    const search: () => void = () => {
        console.log('poisk')
    };
    const SwitchArticles: React.FC = (props) => {
        let match = useRouteMatch();
        console.log(match.path);
        return (
            <Switch>
                <Route path={`${match.path}/:id`}>
                    {props.children}
                </Route>
                <Route path={match.path} exact>
                    <h3>Такой статьи нет</h3>
                </Route>
            </Switch>
        )
    };
    return (

        <section className={'projects'}>
            {
                heading &&
                <Subheader
                    className={'projects__header'}
                    content={
                        <Filters
                            filterClickHandler={filterClickHandler}
                            clearFilter={clearFilter}
                            className={projectFiltersClassNames}
                            arr={tags as LinkItemType[]}
                            isWithClearButton={isWithClearButton}
                            search={isWithSearch === true ? search : undefined}
                        />
                    }
                >
                    Проекты
                </Subheader>
            }
            {
                !heading &&
                <Filters
                    clearFilter={clearFilter}
                    filterClickHandler={filterClickHandler}
                    className={projectFiltersClassNames}
                    arr={tags as LinkItemType[]}
                    isWithSwitch={isWithSwitch}
                    isWithClearButton={isWithClearButton}
                    search={isWithSearch ? search : undefined}
                />
            }
            {
                openInArticles !== undefined && false ?
                    <SwitchArticles>
                        <div>eeeeee</div>
                    </SwitchArticles>
                    :
                    <Showcase onClick={itemClickHandler} getItems={getItemsUrl()}/>
            }
        </section>
    )

};
export default ItemsWithFilter
