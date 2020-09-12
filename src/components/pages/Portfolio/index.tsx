import React from "react"
//comps
import DefaultTemplate from "../../templates/Default"
import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import Breadcrumbs from "../../organisms/Breadcrumbs"
import ItemsWithFilter from "../../organisms/ItemsWithFilter"

const Portfolio = () => {
    return (
        <DefaultTemplate
            header={<Header scrollTo={111}/>}
            footer={<Footer/>}
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
        >
            <ItemsWithFilter tags={[
                {"title": "Избранные проекты", "link": "favorite"},
                {"title": "Многостраничная полиграфия", "link": "poligraph"},
                {"title": "Печатная продукция", "link": "product"},
                {"title": "Сложный web-проект", "link": "difficult"},
                {"title": "Компактный интернет-магазин", "link": "compactShop"},
                {"title": "Лендинг", "link": "landing"},
                {"title": "Сайт-визитка", "link": "visitCard"},
                {"title": "Социальные сети", "link": "socials"},
                {"title": "Интернет-магазин", "link": "shop"}
            ]}
                             url={'allProjects'}
                             isWithSwitch={true}
                             isWithSearch={false}

            />
        </DefaultTemplate>
    )
};

export default Portfolio
