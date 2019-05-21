import React from 'react';

export default ({children, visible = true, hidden = false, ...otherProps}) => {
    if(!visible || !!hidden) return null;
    return(
        <div {...otherProps}>
            {children}
        </div>
    );
}