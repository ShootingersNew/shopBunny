import React, {useEffect} from "react"
import withRESTConnect, {RESTProps} from "../../hoc/withRestConnect";
import {ItemIdTypes} from "../../../tsTypes";
import {useHistory, useParams} from 'react-router-dom'
import './style.css'
import Container from "../../atoms/Container";
import WebViewer from "../WebViewer";

type ArticlePropTypes = {
    getId: (p: ItemIdTypes) => void,
    catalogPagePath: string,
    curId: string | number
}
const Article: React.FC<RESTProps & ArticlePropTypes> = ({getId, data: {item}, catalogPagePath, curId}) => {
    const {id} = useParams();
    const type = catalogPagePath.substring(1);
    //pass id to mother element
    useEffect(() => {
        getId({type: catalogPagePath.substring(1), id: Number(id)});
    }, [id, getId, catalogPagePath]);
    return (
        <>
            {
                type === 'portfolio' ?
                    <>
                        <WebViewer url={item.url} sizes={item.sizes}/>
                    </>
                    :
                    <>
                        {
                            item !== null ?
                                <article className={'article'}>
                                    <div className="article__mainImage"
                                         style={{backgroundImage: 'url("/images/banner.png")'}}/>
                                    <div className="container container_alt">
                                        <h2>Содержание</h2>
                                        <ul>
                                            {
                                                item && item.contents && item.contents.map((li: string) => {
                                                    return (
                                                        <li><a href={'#a1'}>{li}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div dangerouslySetInnerHTML={{__html: item && item.html}}/>
                                    </div>
                                </article>
                                :
                                <>
                                    <Redirector id={id} item={item} catalogPagePath={catalogPagePath}/>
                                </>
                        }
                    </>
            }
        </>
    )
};
const Redirector: React.FC<{ item: object, id: number, catalogPagePath: string }> = ({item, catalogPagePath}) => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => (history.push(catalogPagePath)), 3000);
    }, [history, catalogPagePath]);
    return (
        <>
            {
                <Container>Запись, вероятно, не существует. Вы будете направлены на страницу каталога</Container>
            }
        </>
    )
};
export default withRESTConnect<RESTProps & ArticlePropTypes>(Article)
