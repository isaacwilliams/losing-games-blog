import React, { Suspense } from 'react';

const LazyPortraitGenerator = React.lazy(() => import('./PortraitGenerator'));
const PortraitLoader = () => (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyPortraitGenerator />
        </Suspense>
    </div>
);

export default PortraitLoader;
