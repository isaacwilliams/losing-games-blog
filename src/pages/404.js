import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import PageLayout from '../components/layout/PageLayout'
import PageTitle from '../components/page/PageTitle';
import RichContent from '../components/shared/RichContent';

const CenterAlign = styled.p`
    margin-top: 2rem;
    text-align: center;
`

const ErrorWrapper = styled.div`
    padding: 6rem 0;
`

const ErrorTitle = styled(PageTitle)`
    &:before,
    &:after {
        content: '✕ ✕ ✕';
    }
`

const NotFoundPage = () => (
    <PageLayout>
        <ErrorWrapper>
            <ErrorTitle>
                Page not found
            </ErrorTitle>
            <CenterAlign>Please <Link to="/">return home</Link> before something even worse happens.</CenterAlign>
        </ErrorWrapper>
    </PageLayout>
)

export default NotFoundPage
