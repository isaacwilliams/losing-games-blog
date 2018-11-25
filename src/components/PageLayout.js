import React from 'react';
import SiteContainer from './SiteContainer';
import Header from './Header';
import Footer from './Footer';
import ContentContainer from './ContentContainer';

const PageLayout = ({ children }) => (
    <SiteContainer>
        {({ data }) => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <ContentContainer>
                    {children}
                </ContentContainer>
                <Footer />
            </>
        )}
    </SiteContainer>
);

export default PageLayout;
