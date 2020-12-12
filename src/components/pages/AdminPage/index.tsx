import React from "react"
import DefaultTemplate from "../../templates/Default"
import Breadcrumbs from "../../organisms/Breadcrumbs"
import Heading from "../../atoms/Heading"
import withRESTConnect, {compProps, RESTProps} from "../../hoc/withRestConnect"
import AdminList from "../../molecules/AdminList/AdminList"
import EditPanel from "../../organisms/EditPanel"
import {Editor} from '@tinymce/tinymce-react'
import {Route, Switch,} from "react-router-dom"
//styles
import './style.css'

class AdminPage extends React.Component<RESTProps & compProps> {

    componentDidMount(): void {
        console.log(this.props.data)
    }

    componentDidUpdate(prevProps: Readonly<RESTProps & compProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(this.props)
    }

    handleEditorChange = (content: string, editor: any) => {
        console.log('Content was updated:', content);
        var stringToHTML = function (str: string) {
            var dom = document.createElement('div');
            dom.innerHTML = str;
            return dom;
        };
        const htmlArticle = stringToHTML(content);
        const articleObj = {
            _header: htmlArticle.getElementsByTagName('h2')[1]?.textContent,
            _contents: htmlArticle.getElementsByTagName('ul')[0]
        };
        console.log(articleObj)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {base, items} = this.props.data;
        let match = this.props;
        return (
            <DefaultTemplate>
                <Breadcrumbs
                    items={
                        [
                            {title: 'Главная', path: '/'},
                            {title: 'Блог'},
                        ]
                    }
                />
                <Switch>
                    <Route path={`/admin`} exact>
                        <AdminMain base={base} items={items}/>
                    </Route>
                    <Route path={`/admin/:id`}>
                        <Editor
                            initialValue="<p>This is the initial content of the editor</p>"
                            init={{
                                height: 900,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor importcss',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount template'
                                ],
                                content_css: '/editorStyle/style.css',
                                importcss_append: true,
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help | template',
                                style_formats: [
                                    {title: 'контейнер', selector: 'div', classes: 'container_alt'},
                                    {title: 'Image formats'},
                                    {title: 'Левая картиночка', selector: 'img', classes: 'img_left'},
                                    {title: 'Правая картиночка', selector: 'img', classes: 'img_right'},
                                ],
                                templates: [
                                    {
                                        title: 'Some title 2',
                                        description: 'Some desc 2',
                                        content: '   <div className="article__mainImage" style={{backgroundImage: \'url("/images/banner.png")\'}}/>\n' +
                                            '            <div className="container container_alt">\n' +
                                            '                <h2>Содержание</h2>\n' +
                                            '                <ul>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                    <li>Заголовок</li>\n' +
                                            '                </ul>\n' +
                                            '                <h2>Заголовок</h2>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'article__container\'}>\n' +
                                            '                <img className={\'img_left\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'container_alt\'}>\n' +
                                            '                <h2>Заголовок</h2>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'article__container\'}>\n' +
                                            '                <img className={\'img_left\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'container_alt\'}>\n' +
                                            '                <h2>Заголовок</h2>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'article__container\'}>\n' +
                                            '                <img className={\'img_left\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'container_alt\'}>\n' +
                                            '                <h2>Заголовок</h2>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'article__container\'}>\n' +
                                            '                <img className={\'img_left\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'container_alt\'}>\n' +
                                            '                <h2>Заголовок</h2>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '                <p>\n' +
                                            '                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur\n' +
                                            '                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim\n' +
                                            '                    non quis.\n' +
                                            '                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.\n' +
                                            '                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.\n' +
                                            '                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet\n' +
                                            '                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus\n' +
                                            '                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum\n' +
                                            '                    quam odio sagittis proin sed ornare pulvinar commodo.\n' +
                                            '                </p>\n' +
                                            '            </div>\n' +
                                            '            <div className={\'article__container\'}>\n' +
                                            '                <img className={\'img_left\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '                <img className={\'img_right\'} src="/images/banner.png" alt=""/>\n' +
                                            '            </div>'
                                    }
                                ]

                            }}
                            onEditorChange={this.handleEditorChange}
                        />
                    </Route>
                </Switch>
            </DefaultTemplate>
        )
    }
}

const AdminMain: React.FC<{ base: any, items: any }> = ({base, items}) => {
    return (
        <>
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
                base &&
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
        </>
    )

};

export default withRESTConnect<RESTProps & compProps>(AdminPage)
