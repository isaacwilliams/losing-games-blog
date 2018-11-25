import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import reset from './reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');

    body {
        font-family: 'Fira Mono', monospace;
        font-size: 18px;
        line-height: 1.33;
    }

    a {
        color: red;

        &:hover {
            color: black;
        }
    }
`

const pageQuery = graphql`
query SiteTitleQuery {
    site {
        siteMetadata {
            title
        }
    }
}
`

const SiteContainer = ({ children }) => (
    <StaticQuery
        query={pageQuery}
        render={data => (
            <>
                <Helmet title={data.site.siteMetadata.title}
                        meta={[
                          { name: 'description', content: 'Sample' },
                          { name: 'keywords', content: 'sample, something' },
                        ]}>
                    <html lang="en" />
                </Helmet>
                <GlobalStyle />
                {children({ data })}
            </>
        )}
    />
);

export default SiteContainer;
