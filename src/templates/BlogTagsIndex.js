import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { kebabCase, capitalize } from 'lodash';

import PageLayout from '../components/layout/PageLayout';

import ListingTitle from '../components/listing/ListingItemTitle';
import ListingItem from '../components/listing/ListingItem';
import ListingContainer from '../components/listing/ListingContainer';

const TagTitle = styled(ListingTitle)`
    &:before {
        content: '✠';
    }
`

const BlogTagsIndex = ({ data }) => {
    const tags = data.allMarkdownRemark.group.sort((a, b) => b.totalCount - a.totalCount);

    return (
        <PageLayout isIndexPage>
            <ListingContainer>
                {tags.map(({ fieldValue, totalCount }) => (
                    <ListingItem key={fieldValue}>
                        <TagTitle>
                            <Link to={`/tags/${kebabCase(fieldValue)}/`}>
                                {capitalize(fieldValue)}
                            </Link>
                            {' '}
                            ({totalCount})
                        </TagTitle>
                    </ListingItem>
                ))}
            </ListingContainer>
        </PageLayout>
    );
}

export default BlogTagsIndex;
