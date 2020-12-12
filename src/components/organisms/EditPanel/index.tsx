import React, {useState} from "react";
import {LinkItemType, ProductArrayType} from "../../../tsTypes";
import Input from "../../atoms/Input";
import Tag from "../../atoms/Tag";

const EditPanel: React.FC<{ categories?: string[], types?: string[], tags?: LinkItemType[], }> =
    ({categories, types, tags}) => {
        interface EditPanelStateTypes extends ProductArrayType {
            category: string
        }

        const [formValue, setFormValue] = useState<any>({
            id: 1,
            preview: "#",
            name: "Janosy",
            category: 'Blog',
            type: "Compact online store",
            filterTags: [
                "Компактный интернет-магазин",
                "Фирменный стиль"
            ],
            cardTags: [
                {
                    "title": "Компактный интернет-магазин",
                    "abbreviation": "Компакт. интернет-магазин",
                },
                {
                    "title": "Фирменный стиль",
                    "abbreviation": "Фирм. стиль",
                }
            ]
        },);
        const changeHandler: (e: React.FormEvent<EventTarget>) => void = (e) => {
            let target = e.target as HTMLInputElement;
            let name = (target as HTMLElement).getAttribute('name');
            let id = (target as HTMLElement).getAttribute('data-id');
            let val = (target as HTMLInputElement).value;
            switch (name) {
                case 'name' :
                    setFormValue({...formValue, name: target.value});
                    break;
                case 'tags':
                    let isInArr = false;
                    //проверяем, есть ли в массиве уже тэг с таким линком. Если он есть, то сразу отсеивается
                    let newArr: LinkItemType[] = formValue.cardTags.filter((tag: any) => {
                        if (tag.title === id) {
                            isInArr = true;
                        }
                        return tag.title !== id
                    });
                    //если же его нет, то его нужно добавить
                    if (!isInArr) {
                        //берем из глобального массива тэгов тэг с таким линком
                        let newTagInArr = tags?.find((item) => {
                            console.log('this is', item.title, id);
                            return item.title === id
                        });
                        //добавляем его в новый массив
                        newArr = [...newArr, newTagInArr as LinkItemType]
                    }
                    //отправляем новый массив в стейт
                    setFormValue({...formValue, cardTags: newArr});
                    break;
                case "type":
                    setFormValue({...formValue, type: val});
                    break;
                case "categories":
                    setFormValue({...formValue, category: val});
                    break;
                default:
                    break;
            }
        };
        return (
            <form className={"editPanel"} onChange={changeHandler}>
                <fieldset>
                    <input type="file"/>
                    <legend>Добавить новый</legend>
                    <label className={'editPanel__label'}>
                        <Input
                            className={'editPanel__input'}
                            name={'name'}
                            placeholder={'Введи сюда название'}
                            defaultValue={formValue.name}
                        /> Название</label>
                    <label className={'editPanel__label'}>
                        {/*Категории*/}
                        <div className="editPanel__tags">
                            <div>Категории</div>

                            {categories?.map((category, idx) => {
                                let isActive = formValue.category === category;
                                return <Tag
                                    key={category}
                                    name={'categories'}
                                    defaultChecked={isActive}
                                    className={'editPanel__tag_isActive_' + isActive} link={category}
                                    changeHandler={(val) => {
                                        console.log(val)
                                    }}>{category}</Tag>
                            })}

                        </div>
                        <tr/>
                        {/*Типы*/}
                        <div className="editPanel__tags">
                            <div>Типы</div>

                            {types?.map((type) => {
                                let isActive = formValue.type === type;
                                return (
                                    <Tag
                                        key={type}
                                        name={'types'}
                                        defaultChecked={isActive}
                                        data-active={isActive}
                                        className={'editPanel__tag_isActive_' + isActive}
                                        link={type}
                                        changeHandler={(val) => {
                                            console.log(val)
                                        }}
                                    >
                                        {type}
                                    </Tag>
                                )
                            })}

                        </div>

                        <tr/>
                        {/*Тэги*/}
                        <div className="editPanel__tags">
                            <div>Тэги</div>
                            {tags?.map((tag) => {
                                let isActive = formValue.filterTags.includes(tag.title);
                                return (
                                    <Tag
                                        key={tag.title}
                                        type={"checkbox"}
                                        defaultChecked={isActive}
                                        name={'tags'}
                                        link={tag.title}
                                        className={'editPanel__tag_isActive_' + isActive}
                                        changeHandler={(val) => {
                                        }}
                                    >
                                        {tag.title}
                                    </Tag>
                                )
                            })}
                        </div>
                    </label>
                </fieldset>
            </form>
        )
    };
export default EditPanel
