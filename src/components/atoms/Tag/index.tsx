import React, {RefObject, useEffect, useLayoutEffect, useRef, useState} from "react"
import Input from "../Input"
import cn from 'classnames'
import './style.css'
import {Link} from "react-router-dom";
import {isMobileOnly} from "react-device-detect";
import {useIframeRes} from "../../_settings/_utils";

type TagPropTypes = {
    changeHandler?: (val: string) => void,
    className?: string,
    link?: string,
    name?: string,
    defaultChecked?: boolean,
    type?: 'radio' | 'checkbox',
    mobileHashTag?: boolean,
    content?:
        (
            align: string,
            isHovered: boolean,
            width: { left: number, width: number, descWidth: number, top: number, height: number },
            descRef: RefObject<HTMLDivElement>
        )
            => JSX.Element,
    isFiltersOpened?: boolean
}
const Tag: React.FC<TagPropTypes> =
    ({
         changeHandler,
         children,
         link,
         className,
         name = 'default',
         defaultChecked = false,
         type = 'radio',
         mobileHashTag,
         content,
         isFiltersOpened
     }) => {
        const [descAlign, setDescAlign] = useState<string>('right');
        const [isHovered, setIsHovered] = useState<boolean>(false);
        const [width, setWidth] = useState({left: 0, top: 0, width: 0, descWidth: 0, height: 0});

        const tagRef = useRef<HTMLSpanElement>(null);
        const descRef = useRef<HTMLDivElement>(null);
        const classNames = cn({
            tag: true,
            [`${className}`]: className
        });

        const tagChangeHandler: (e: React.FormEvent) => void = (e) => {
            const filter = (e.target as HTMLElement).getAttribute('data-id');
            if (changeHandler) {
                changeHandler(filter as string)
            }
        };

        const getTagParams = () => {
            const target = tagRef.current;
            const coords = target?.getBoundingClientRect();
            if (coords && descRef && descRef.current) {
                setWidth({
                    left: coords.left,
                    top: coords.top + window.pageYOffset,
                    width: coords.width,
                    height: coords.height,
                    descWidth: descRef.current.getBoundingClientRect().width
                })
            }
        };
        useEffect(() => {
            window.addEventListener('resize', getTagParams);
            getTagParams();
            return (() => {
                window.removeEventListener('resize', getTagParams);
            })
        }, [tagRef, descRef, isHovered]);

        const isMobileRes = useIframeRes() === 'mobile';

        useLayoutEffect(() => {
            //set align of desc card onmount & resize & open filters
            const setAlign = () => {
                setDescAlign(tagRef.current && tagRef.current.getBoundingClientRect().left + tagRef.current.offsetWidth < 800 ? 'left' : 'right')
            };
            setAlign();

            window.addEventListener('resize', () => {
                setAlign();
            });
            return () => window.removeEventListener('resize', setAlign)
        }, [isFiltersOpened, isHovered]);

        return (
            <React.Fragment>
                {
                    link ?
                        <label onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Input
                                type={type}
                                onChange={tagChangeHandler}
                                name={name}
                                id={link}
                                data-tag={children}
                                className={classNames}
                                defaultChecked={defaultChecked}
                                defaultValue={children as string}
                            >
                                <span className="tag__text" ref={tagRef}>
                                 {
                                     (isMobileOnly || isMobileRes) && !mobileHashTag ?
                                         <Link className={'tag__mobileLink'} to={'/'}>
                                             ?
                                         </Link>
                                         :
                                         <span className="tag__sharp">#</span>

                                 }

                                    {
                                        content ?
                                            content(descAlign, isHovered, width, descRef)
                                            : children
                                    }
                                </span>
                            </Input>
                        </label>
                        :
                        <span className={classNames}>{mobileHashTag !== false && '#'}{children}</span>
                }
            </React.Fragment>
        )
    };
export default Tag
