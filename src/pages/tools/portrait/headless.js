import React from 'react';
import SiteContainer from '../../../components/SiteContainer';
import PortraitGenerator from '../../../apps/portraitGenerator/PortraitGenerator';

export default () => (
    <SiteContainer>
        {() => <PortraitGenerator />}
    </SiteContainer>
);
