import React from "react"
import './style.css'

const Article: React.FC<{ id: number }> = ({id}) => {
    return (
        <article className={'article'}>
            <div className="article__mainImage" style={{backgroundImage: 'url("/images/banner.png")'}}/>
            <div className="container container_alt">
                <h2>Содержание</h2>
                <ul>
                    <li>Заголовок</li>
                    <li>Заголовок</li>
                    <li>Заголовок</li>
                    <li>Заголовок</li>
                    <li>Заголовок</li>
                    <li>Заголовок</li>
                </ul>
                <h2>Заголовок</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
            </div>
            <div className={'article__container'}>
                <img className={'img_left'} src="/images/banner.png" alt=""/>
                <img className={'img_right'} src="/images/banner.png" alt=""/>
                <img className={'img_right'} src="/images/banner.png" alt=""/>
            </div>
            <div className={'container_alt'}>
                <h2>Заголовок</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                    montes, eu ut massa, sed. Et, eu elit auctor sed leo. Nullam malesuada in molestie vulputate enim
                    non quis.
                    Gravida phasellus massa turpis elit consequat turpis aliquam. Et massa aliquam et a.
                    Mus interdum at vitae nisl amet, vel. Sit facilisi volutpat, in vestibulum, cras.
                    Cras scelerisque morbi nullam viverra phasellus donec erat. Id suspendisse amet laoreet
                    tempus blandit quis feugiat hendrerit velit. Mi, ut condimentum eget feugiat. Velit lacus
                    sit ut vel et consequat sed. Dui, elementum mattis eget in tristique morbi faucibus. Vestibulum
                    quam odio sagittis proin sed ornare pulvinar commodo.
                </p>
            </div>
            <div className={'article__container'}>
                <img className={'img_left'} src="/images/banner.png" alt=""/>
                <img className={'img_right'} src="/images/banner.png" alt=""/>
                <img className={'img_right'} src="/images/banner.png" alt=""/>
            </div>
        </article>
    )
};
export default Article
