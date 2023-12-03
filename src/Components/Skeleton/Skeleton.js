import React from 'react';
import '../../assets/skeleton.css';

function Skeleton({classes}) {
    const classNames = `skeleton ${classes} animate-pulse`
    return <div className={classNames}></div>
}

export default Skeleton;