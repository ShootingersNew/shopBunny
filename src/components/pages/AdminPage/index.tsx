import React from "react"
import DefaultTemplate from "../../templates/Default"
import Breadcrumbs from "../../organisms/Breadcrumbs"
import Heading from "../../atoms/Heading"
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect"
import AdminList from "../../molecules/AdminList/AdminList"
import EditPanel from "../../organisms/EditPanel";
//styles
import './style.css'

class AdminPage extends React.Component<RESTProps & compProps> {

    componentDidMount(): void {
        console.log(this.props.data)
    }

    componentDidUpdate(prevProps: Readonly<RESTProps & compProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {base, items} = this.props.data;
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
                }>
                <Heading type={2}>Админка</Heading>
                <tr/>
                <Heading type={3}>Портфолио</Heading>
                <AdminList items={items?.allProjects}/>
                <div className="adminPanel">
                    <Heading className={"adminPanel__header"} type={3}>Блог</Heading>
                    <AdminList items={items?.blog}/>

                </div>
                <Heading type={3}>Глобальная инфа</Heading>
                {
                    this.props.data.base &&
                    <div>
                        <Heading type={4}>Телефон</Heading>
                        <div>
                            <div>Форматированный - <span>{base.phone.formatted}</span></div>
                            <div>Неформатированный - <span>{base.phone.notFormatted}</span></div>
                        </div>
                        <Heading type={4}>СоциалОчка</Heading>
                        <div>
                            <div>Ютуб - <span>{base.socials.youtube}</span></div>
                            <div>ВК - <span>{base.socials.vk}</span></div>
                        </div>
                    </div>
                }
                <EditPanel
                    tags={items?.tags}
                    categories={items?.categories}
                    types={items?.types}
                />
            </DefaultTemplate>
        )
    }
}

export default withRESTConnect<RESTProps & compProps>(AdminPage)
