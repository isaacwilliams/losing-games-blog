import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import reset from './styles/reset';
import { fontImport, fontBody } from './styles/fonts';
import * as colors from './styles/colors';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontImport}

    body {
        ${fontBody}
        font-size: 18px;
        line-height: 1.33;
        color: ${colors.body};
    }

    a {
        color: ${colors.highlight};

        &:hover {
            color: ${colors.highlightAlt};
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
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                </Helmet>
                <GlobalStyle />
                {children({ data })}
            </>
        )}
    />
);

export default SiteContainer;
