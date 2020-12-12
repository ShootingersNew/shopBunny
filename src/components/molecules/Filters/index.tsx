import React, {useEffect, useLayoutEffect, useState} from "react"
import cn from 'classnames'

import Tag from "../../atoms/Tag"
import Input from "../../atoms/Input"
import withRESTConnect, {RESTProps} from "../../hoc/withRestConnect";
//styles
import './style.css'
import c from '../../atoms/mainColor/style.module.css'
//types
import Container from "../../atoms/Container";
import {isMobileOnly} from "react-device-detect";
import {useIframeRes} from "../../_settings/_utils";
import CardPrice from "../CardPrice";
import Modal from "../DropdownDesc";

type FiltersPropTypes = {
    changeHandler: (val: string) => void,
    clearFilter?: () => void,
    className?: string,
    type?: 'accentButton',
    isWithSwitch?: boolean,
    isWithClearButton?: boolean,
    search?: () => void,
    breadcrumbs?: JSX.Element,
    isFiltersActive?: boolean,
    mobileHashTags?: boolean,
    isFiltersInit?: boolean,
    mobileFilterImage?: string,
    isWithDesc?: boolean,
    getFiltersLength?: (filters: { title: string, slug: string, abbreviation: string }[]) => void,
}
const Filters: React.FC<FiltersPropTypes & RESTProps> =
    ({
         search,
         className,
         type,
         isWithSwitch,
         changeHandler,
         clearFilter,
         isWithClearButton,
         breadcrumbs,
         isFiltersActive,
         mobileHashTags,
         mobileFilterImage,
         getFiltersLength,
         data: {filters},
         isWithDesc
     }) => {
        const [isOpen, setIsOpen] = useState<boolean>(true);
        const [scrollHeight, setScrollHeight] = useState<number>(0);
        const scrollElem: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const classNames = cn({
            filters: true,
            [`${className}`]: className,
            'filters_withSearch': search,
            'filters_opened': isOpen,
            'filters_active': isFiltersActive,
            'filters_withImage': mobileFilterImage

        });
        const containerClassNames = cn({
            'container_mobile filters__container': true,
            'filters_withSwitch': isWithSwitch,
            [`filters__container_hashTags_${mobileHashTags}`]: mobileHashTags
        });
        const openClickHandler = () => {
            setIsOpen(true)
        };
        useEffect(() => {
            getFiltersLength && filters && getFiltersLength(filters);
        }, [filters, getFiltersLength]);

        const isMobile = useIframeRes() === 'mobile';

        useLayoutEffect(() => {
            const scrollHandler: (e: any) => void = (e: any) => {
                if (isWithSwitch) {
                    const scrollBreakPoint: number = 200;
                    let {scrollTop} = scrollElem;
                    if (scrollTop >= scrollHeight + scrollBreakPoint || scrollTop <= scrollHeight - scrollBreakPoint) {
                        const result = scrollTop >= scrollHeight + scrollBreakPoint;
                        setIsOpen(!result);
                        setScrollHeight(scrollTop)
                    }
                }
            };
            //we handle the event to hide or open filters
            scrollElem.addEventListener('scroll', scrollHandler);
            return () => scrollElem.removeEventListener('scroll', scrollHandler);
        }, [scrollElem, isWithSwitch, scrollHeight]);

        const mapFilters = () => {
            return (
                <>
                    {
                        filters && filters.map((linkItem, idx) => {

                            const classNames = cn({
                                filters__tag: true,
                                [`${c.mainColor}`]: idx === 0 && type === "accentButton"
                            });

                            return (
                                <Tag
                                    changeHandler={changeHandler}
                                    className={classNames}
                                    link={linkItem.slug}
                                    mobileHashTag={mobileHashTags}
                                    isFiltersOpened={isOpen}
                                    content={(align, isHovered, width, descRef) => (
                                        <>
                                            {linkItem.title}
                                            {
                                                isWithDesc && isHovered &&
                                                <Modal>
                                                    <div
                                                        ref={descRef}
                                                        style={{
                                                            left: align === 'left' ? `${width.left + 50}px` : `${width.left - width.descWidth + width.width - 50}px`,
                                                            top: `${width.top + width.height + 22}px`
                                                        }}
                                                        className={"filters__desc filters__desc_align_" + align}
                                                    >
                                                        <CardPrice
                                                            className={'filters__cardPrice cardPrice_align_' + align}
                                                            getItem={{id: linkItem.slug, type: 'info'}}
                                                            type={'tag'}
                                                            isHovered={isHovered}
                                                        />
                                                    </div>
                                                </Modal>
                                            }
                                        </>
                                    )}
                                />
                            )
                        })
                    }
                </>
            )
        };
        return (
            <div className={classNames}>
                <div className="filters__wrapper">
                    {
                        breadcrumbs ? breadcrumbs : false
                    }
                    {
                        isWithSwitch && !isOpen &&
                        <span className="filters__openButton" onClick={openClickHandler}>
                                <svg className={'filters__downArrow'} width="14" height="13" viewBox="0 0 14 13"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.69336L6.69367 11.387L12.3873 5.69336" stroke="black" stroke-width="2"/>
                                </svg>

                            Фильтры
                        </span>
                    }
                    {
                        mobileFilterImage && (isMobileOnly || isMobile) &&
                        <img src={mobileFilterImage} alt="бэкграунд"/>
                    }
                    <Container className={containerClassNames}>
                        {mapFilters()}
                        {
                            isWithClearButton !== false &&
                            <Tag mobileHashTag={false} changeHandler={clearFilter}>Смотреть все</Tag>
                        }
                    </Container>
                </div>
                {
                    search &&
                    <Container className={'container_mobile'}>
                        <Input
                            type={'search'}
                            className={'filters__search'}
                            name={'search'}
                            placeholder={isMobileOnly || isMobile ? 'Поиск по статьям' : 'Поиск по более чем 300 статьям'}
                        />
                    </Container>
                }
            </div>
        )
    }
;
export default withRESTConnect<FiltersPropTypes & RESTProps>(Filters)
