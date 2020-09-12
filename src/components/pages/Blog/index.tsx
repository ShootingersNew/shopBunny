import React from "react"
//comps
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"
import DefaultTemplate from "../../templates/Default"

const Blog = () => {
    return (
        <DefaultTemplate
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
        >
            <ItemsWithFilter
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
                openInArticles={true}
            />
        </DefaultTemplate>
    )
};

export default Blog
