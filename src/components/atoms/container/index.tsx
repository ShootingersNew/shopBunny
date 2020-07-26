import React from "react"
import cn from "classnames"
//styles
import './style.css'
//types
type ContainerPropTypes = {
    className?: string
}

const Container: React.FC<ContainerPropTypes> = ({children, className}) => {
    let containerClassName = cn({
        container: true,
        [`${className}`]: className
    });
    return (
        <div className={containerClassName}>
            {children}
        </div>
    )
};
export default Container
