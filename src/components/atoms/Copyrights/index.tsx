import React from "react"
import cn from 'classnames'
import './style.css'

const Copyrights: React.FC<{ classNames?: string }> = ({classNames}) => {
    const copyrightsClassnames = cn({
        'copyrights': true,
        [`${classNames}`]: classNames
    });
    return (
        <div className={copyrightsClassnames}>Bunny studio
            <span className="copyrights__greyText"> / </span>Все права
            защищены <span className="copyrights__greyText">2020</span>
        </div>
    )
};

export default Copyrights
