import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import ToolPageTitle from '../components/page/ToolPageTitle';
import PageHeader from '../components/page/PageHeader';

const ToolDescription = styled.div`
    color: grey;
    text-align: center;
    margin-top: 0.25rem;
`;

export default ({ data: { title, description }, children }) => (
    <PageLayout>
        <Helmet title={`Losing Games - ${title}`} />

        <PageHeader>
            <ToolPageTitle>{title}</ToolPageTitle>
            <ToolDescription>{description}</ToolDescription>
        </PageHeader>
        {children}
    </PageLayout>
);
