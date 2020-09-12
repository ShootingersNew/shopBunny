import React from "react"
//comps
import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"
import DefaultTemplate from "../../templates/Default"

const Blog = () => {
    return (
        <DefaultTemplate
            header={<Header scrollTo={111}/>}
            footer={<Footer/>}
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
