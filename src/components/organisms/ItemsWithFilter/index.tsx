import React, {useState} from "react"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import './style.css'
import Subheader from "../../molecules/Subheader"
import {ItemIdTypes} from "../../../tsTypes"
import Filters from "../../molecules/Filters"
import cn from 'classnames'
import Showcase from "../../molecules/Showcase"
import Container from "../../atoms/Container"
import * as b from './../../../api/graphql/bd.json'

type ProjectPropTypes = {
    heading?: boolean,
    isWithSwitch?: boolean,
    url: string,
    isWithClearButton?: boolean,
    isWithSearch?: boolean,
    article?: (getIdFun: (id: ItemIdTypes) => void, id: ItemIdTypes, catalogPagePath: string) => JSX.Element,
    breadcrumbs?: JSX.Element,
    isMobileSidebarActive?: boolean,
    type?: 'blog',
    isMobileSidebarTouched?: boolean,
    mobileHashTags?: boolean,
    mobileFilterImage?: string,
    showArticleWithFilters?: boolean,
    isFiltersWithDesc?: boolean
}

const ItemsWithFilter: React.FC<ProjectPropTypes> =
    ({
         isWithSearch,
         heading,
         isWithSwitch,
         url,
         isWithClearButton,
         breadcrumbs,
         isMobileSidebarActive,
         type,
         isMobileSidebarTouched,
         mobileHashTags,
         mobileFilterImage,
         article,
         showArticleWithFilters,
         isFiltersWithDesc
     }) => {
        const [activeFilter, setActiveFilter] = useState('');
        const [filtersLength, setFiltersLength] = useState(0);
        const [articleId, setArticleId] = useState<{ type: string, id: string | number }>({
            type: "blog",
            id: 1
        });
        let matchPath = useRouteMatch().path;
        let isExact = useRouteMatch().isExact;
        let linkUrl = matchPath === '/' ? '/portfolio' : matchPath;
        const projectFiltersClassNames = cn({
            projects__filters: true,
            'projects__filters_heading_false': heading === undefined,
            'projects__filters_short': filtersLength !== 0 && filtersLength <= 4
        });
        const getFiltersLength: (filters: { title: string }[]) => void = (filters) => {
            setFiltersLength(filters.length)
        };
        const filterChangeHandler: (filterVal: any) => void
            = (filterVal) => {
            const arr = b.portfolio.filter((item) => {
                const tags = item.cardTags;

                tags.forEach((tag) => {
                    for (let i = 0; i < tag.title.length; i++) {
                        console.log(tag.title, filterVal.replace(/\s+/g, ' ').trim()[i])
                    }
                    // console.log('сравнение ', tag === filterVal, tag.length, filterVal.replace(/\r?\n/g, "").length)
                });
                return tags.includes(filterVal.replace(/\r?\n/g, ""))
            });
            setActiveFilter(filterVal.replace(/\s+/g, ' ').trim());
        };
        const itemsUrl = activeFilter === '' ? url : {url: url, tag: activeFilter};
        const itemClickHandler: (item: any) => void =
            (item) => {

            };

        const clearFilter: () => void
            = () => {
            setActiveFilter('')
        };

        const search: () => void = () => {
            console.log('poisk')
        };
        const TopNav = () => {
            return (
                <>
                    {
                        heading ?
                            <Subheader
                                className={'projects__header'}
                                content={
                                    <Filters
                                        getFilters={type ? type : 'projects'}
                                        isFiltersActive={isMobileSidebarActive}
                                        changeHandler={filterChangeHandler}
                                        clearFilter={clearFilter}
                                        className={projectFiltersClassNames}
                                        isWithClearButton={isWithClearButton}
                                        search={isWithSearch === true ? search : undefined}
                                        mobileHashTags={mobileHashTags}
                                        isWithDesc={isFiltersWithDesc}
                                        mobileFilterImage={mobileFilterImage}
                                        getFiltersLength={getFiltersLength}
                                    />
                                }
                            >
                                Проекты
                            </Subheader>
                            :
                            <Container className={'container_desktop projects__head-wrapper'}>
                                <Container className={'projects__breadcrumbs container_mobile'}>
                                    {breadcrumbs}
                                </Container>
                                <Container className={animClassNames}>
                                    <Filters
                                        isWithDesc={isFiltersWithDesc}
                                        getFilters={type ? type : 'projects'}
                                        isFiltersActive={isMobileSidebarActive}
                                        clearFilter={clearFilter}
                                        changeHandler={filterChangeHandler}
                                        className={projectFiltersClassNames}
                                        isWithSwitch={isWithSwitch}
                                        isWithClearButton={isWithClearButton}
                                        search={isWithSearch ? search : undefined}
                                        mobileHashTags={mobileHashTags}
                                        mobileFilterImage={mobileFilterImage}
                                    />
                                </Container>
                            </Container>

                    }
                </>
            )
        };

        const animClassNames = cn({
            'projects__container projects__animWrapper': true,
            [`projects__animWrapper_active_${isMobileSidebarActive}`]: isMobileSidebarActive !== undefined,
            [`projects__animWrapper_isTouched_${isMobileSidebarTouched}`]: isMobileSidebarTouched !== undefined
        });
        return (
            <section className={'projects'}>
                {/*topNav area. area is not shown on a portfolio article*/}
                {
                    !(showArticleWithFilters === false && !isExact) && <TopNav/>
                }
                <Switch>
                    <Route path={`${matchPath}`} exact>
                        <Showcase
                            onClick={itemClickHandler}
                            getItems={itemsUrl}
                            catalogPath={linkUrl}
                        />
                    </Route>
                    {
                        article &&
                        <Route path={`${linkUrl}/:id`}>
                            <>
                                {
                                    article && article(setArticleId, articleId, linkUrl)
                                }
                            </>
                        </Route>
                    }
                </Switch>
            </section>
        )

    };
export default ItemsWithFilter
