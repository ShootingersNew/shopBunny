import React, {useState} from "react"
//comps
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"
import DefaultTemplate from "../../templates/Default"
import {RouteComponentProps, useRouteMatch} from "react-router-dom"
import Article from "../../organisms/Article";
import img from './img/img.jpg'

const Blog: React.FC<RouteComponentProps> = (props) => {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
    const [isMobileSidebarTouched, setIsMobileSidebarTouched] = useState<boolean>(false);
    const path = useRouteMatch().path;
    return (
        <DefaultTemplate
            button={
                {
                    name: 'Фильтры',
                    fun: () => {
                        setIsSidebarActive(true);
                        setIsMobileSidebarTouched(true);
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
                breadcrumbs={
                    <Breadcrumbs
                        items={
                            [
                                {title: 'Главная', path: '/'},
                                {title: 'Блог'},
                            ]
                        }
                    />
                }
                isWithSwitch={false}
                url={'blog'}
                isWithClearButton={false}
                isWithSearch={true}
                article={(getIdFun, id, typeUrl) => {
                    return (
                        <Article curId={id.id} getItem={id} getId={getIdFun} catalogPagePath={path}/>
                    )
                }}
                isMobileSidebarActive={isSidebarActive}
                isMobileSidebarTouched={isMobileSidebarTouched}
                mobileHashTags={true}
                mobileFilterImage={img}
                type={'blog'}
            />
        </DefaultTemplate>
    )
};

export default Blog
