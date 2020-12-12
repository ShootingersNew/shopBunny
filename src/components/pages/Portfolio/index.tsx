import React, {useState} from "react"
//comps
import DefaultTemplate from "../../templates/Default"
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"
import Article from "../../organisms/Article";

const Portfolio = () => {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
    return (
        <DefaultTemplate
            button={
                {
                    name: 'Фильтры',
                    fun: () => {
                        setIsSidebarActive(true)
                    },
                    altName: 'Закрыть',
                    altFun: () => {
                        setIsSidebarActive(false)
                    }
                }
            }
            isActive={isSidebarActive}
        >
            <ItemsWithFilter
                isMobileSidebarActive={isSidebarActive}
                showArticleWithFilters={false}
                isFiltersWithDesc={true}
                breadcrumbs={
                    <Breadcrumbs
                        items={
                            [
                                {title: 'Главная', path: '/'},
                                {title: 'Портфолио'},
                            ]
                        }
                    />
                }
                article={
                    (getIdFun, id, catalogPagePath) => {
                        return (
                            <Article
                                getItem={id}
                                getId={getIdFun}
                                curId={id.id}
                                catalogPagePath={catalogPagePath}
                            />
                        )
                    }}
                url={'projects'}
                isWithSwitch={true}
                isWithSearch={false}

            />
        </DefaultTemplate>
    )
};

export default Portfolio
