import React from "react";
//styles
import cn from 'classnames'
import './style.css'
import f from './../montserratBlack/style.module.css'
//types
type HeadingPropTypes = {
    type: number,
    className?: string
};

const Heading: React.FC<HeadingPropTypes> = ({type, className, children}) => {
    let headingClassname = cn({
        [`heading heading_${type}`]: true,
        [`${className}`]: className,
        [`${f.fontMontserratBlack}`]: type !== 4 && type !== 3

    });
    let h;
    switch (type) {
        case 1:
            h = <h1 className={headingClassname}>{children}</h1>;
            break;
        case 2:
            h = <h2 className={headingClassname}>{children}</h2>;
            break;
        case 3:
            h = <h3 className={headingClassname}>{children}</h3>;
            break;
        default :
            h = <h4 className={headingClassname}>{children}</h4>
    }
    return h
};
export default Heading
