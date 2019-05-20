import * as React from 'react';
const Suspense = React.Suspense;

export default ( componentLoadFunction, fallback = <div>Loading...</div> )=> {
    if(!componentLoadFunction) return null;
    const Component =  React.lazy(componentLoadFunction);
    return props => (
        <Suspense fallback={fallback}>
            <Component {...props}/>
        </Suspense>
    )
};