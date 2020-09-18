import React from "react"
//comps
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"
import DefaultTemplate from "../../templates/Default"
import {RouteComponentProps} from "react-router-dom"
import Article from "../../organisms/Article";

const Blog: React.FC<RouteComponentProps> = (props) => {
    return (
        <DefaultTemplate
        >
            <ItemsWithFilter
                breadcrumbs={<Breadcrumbs
                    items={
                        [
                            {title: 'Главная', path: '/'},
                            {title: 'Блог'},
                        ]
                    }
                />}
                isWithSwitch={false}
                tags={[
                    {
                        "title": "Дизайн",
                        "link": "design"
                    }, {
                        "title": "Маркетинг",
                        "link": "Marketing"
                    }, {
                        "title": "Бизнес",
                        "link": "biznes"
                    },
                    {
                        "title": "Копирайтинг",
                        "link": "Сopywrighting"
                    }
                ]}
                url={'allProjects'}
                isWithClearButton={false}
                isWithSearch={true}
                article={(id: number) => (<Article id={id}/>)}
            />
        </DefaultTemplate>
    )
};

export default Blog
