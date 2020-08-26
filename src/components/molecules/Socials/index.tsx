import React from "react"
import cn from "classnames"

import './style.css'

type SocialsArrayTypes = {
    name: string,
    link: string
}

const Socials: React.FC<{ className?: string, arr: SocialsArrayTypes[] }> = ({className, arr}) => {
    let socialsClass = cn(
        {
            [`${className}`]: className,
            socials: true
        }
    );
    return (
        <div className={socialsClass}>
            {
                arr.map((item) => {
                    return (
                        <a className={'socials__link socials__link_' + item.name} href={item.link}>
                            <img
                                src={process.env.REACT_APP_IMAGES_PATH + '/socials/' + item.name + '.svg'}
                                alt={item.name}
                                className="socials__icon"/>
                        </a>
                    )
                })
            }
        </div>
    )
};

export default Socials
