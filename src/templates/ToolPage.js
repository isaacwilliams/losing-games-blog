import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import ToolPageTitle from '../components/page/ToolPageTitle';
import PageHeader from '../components/page/PageHeader';

const ToolDescription = styled.div`
    color: grey;
    text-align: center;
    margin-top: 0.25rem;
`;

export default ({ data: { title, description }, children }) => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>{title}</ToolPageTitle>
            <ToolDescription>{description}</ToolDescription>
        </PageHeader>
        {children}
    </PageLayout>
);
