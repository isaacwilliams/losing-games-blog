import React from 'react';
import SiteContainer from './SiteContainer';
import Header from './Header';
import Footer from './Footer';
import ContentContainer from './ContentContainer';

const PageLayout = ({ children, isIndexPage }) => (
    <SiteContainer>
        {({ data }) => {
            return (
                <>
                    <Header siteTitle={data.site.siteMetadata.title} isIndexPage={isIndexPage} />
                    <ContentContainer>
                        {children}
                    </ContentContainer>
                    <Footer />
                </>
            );
        }}
    </SiteContainer>
);

export default PageLayout;
