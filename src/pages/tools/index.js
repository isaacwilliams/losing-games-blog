import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { get, map, flow } from 'lodash/fp';
import styled from 'styled-components';
import * as colors from '../../components/styles/colors';
import { fontDisplay } from '../../components/styles/fonts';
import PageLayout from '../../components/layout/PageLayout';

import ListingTitle from '../../components/listing/ListingItemTitle';
import ListingItem from '../../components/listing/ListingItem';
import ListingContainer from '../../components/listing/ListingContainer';

const ToolListingTitle = styled(ListingTitle)`
    &:before {
        content: '✧';
    }
`

const toolsQuery = graphql`{
  allJavascriptFrontmatter(sort:{ order: DESC, fields: [frontmatter___date] }) {
    edges {
      node{
        frontmatter {
          error
          title
          path
          date
          description
        }
      }
    }
  }
}`

const getTools = flow(
    get('allJavascriptFrontmatter.edges'),
    map(get('node.frontmatter'))
)

const ToolsIndex = (props) => (
    <PageLayout>
        <Helmet title={`Losing Games - Tools`} />

        <StaticQuery
            query={toolsQuery}
            render={data => {
                const tools = getTools(data);

                return (
                    <ListingContainer>
                        {tools.map(({ title, path, date, description }, i) => (
                            <ListingItem key={i}>
                                <ToolListingTitle><Link to={path}>{title}</Link></ToolListingTitle>
                                {description}
                            </ListingItem>
                        ))}
                    </ListingContainer  >
                );
            }}
        />
    </PageLayout>
);

export default ToolsIndex;
