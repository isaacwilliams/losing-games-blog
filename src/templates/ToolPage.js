import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import ToolPageTitle from '../components/page/ToolPageTitle';
import PageHeader from '../components/page/PageHeader';

const PostDate = styled.div`
    color: grey;
    text-align: center;
    margin-top: 1rem;
`;

export default ({ data: { title, description }, children }) => (
    <PageLayout>
        <PageHeader>
            <ToolPageTitle>{title}</ToolPageTitle>
            <PostDate>{description}</PostDate>
        </PageHeader>
        {children}
    </PageLayout>
);
