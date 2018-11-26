import React from 'react';
import PageLayout from '../../../components/PageLayout';
import PortraitGenerator from '../../../components/portraitGenerator/PortraitGenerator';
import PageTitleGenerator from '../../../components/PageTitleGenerator';
import PageHeader from '../../../components/PageHeader';

export default () => (
    <PageLayout>
        <PageHeader>
            <PageTitleGenerator>Portrait generator</PageTitleGenerator>
        </PageHeader>
        <PortraitGenerator />
    </PageLayout>
);
