import React, {useState} from "react"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import './style.css'
import Subheader from "../../molecules/Subheader"
import {LinkItemType} from "../../../tsTypes"
import Filters from "../../molecules/Filters"
import cn from 'classnames'
import Showcase from "../../molecules/Showcase"
import Container from "../../atoms/Container"


type ProjectPropTypes = {
    tags?: LinkItemType[],
    heading?: boolean,
    isWithSwitch?: boolean,
    url: string,
    isWithClearButton?: boolean,
    isWithSearch?: boolean,
    article?: (id: number) => JSX.Element,
    breadcrumbs?: JSX.Element

}

const ItemsWithFilter: React.FC<ProjectPropTypes>
    = ({
           isWithSearch,
           article,
           heading,
           isWithSwitch,
           url,
           tags,
           isWithClearButton,
           breadcrumbs
       }) => {
    const [activeFilter, setActiveFilter] = useState('');
    let match = useRouteMatch();
    console.log('match', match);
    const projectFiltersClassNames = cn({
        projects__filters: true,
        'projects__filters_heading_false': heading === undefined,
        'projects__filters_short': tags !== undefined && tags.length <= 4
    });
    const filterChangeHandler: (filterVal: string) => void
        = (filterVal) => {
        console.log(filterVal);
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
    return (

        <section className={'projects'}>
            {
                heading &&
                <Subheader
                    className={'projects__header'}
                    content={
                        <Filters
                            changeHandler={filterChangeHandler}
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
            <Container className={'projects__container'}>
                {
                    !heading &&
                    <React.Fragment>
                        {breadcrumbs}
                        <Filters
                            clearFilter={clearFilter}
                            changeHandler={filterChangeHandler}
                            className={projectFiltersClassNames}
                            arr={tags as LinkItemType[]}
                            isWithSwitch={isWithSwitch}
                            isWithClearButton={isWithClearButton}
                            search={isWithSearch ? search : undefined}
                        />
                    </React.Fragment>
                }
            </Container>
            <Switch>
                <Route path={`${match.path}`} exact>
                    <Showcase onClick={itemClickHandler} getItems={getItemsUrl()}/>
                </Route>
                <Route path={`${match.path}/:id`}>
                    {article && article(12)}
                </Route>
            </Switch>
        </section>
    )

};
export default ItemsWithFilter
