import React from 'react';
import styled from 'styled-components';

import { kebabCase, capitalize } from 'lodash';

import TagLink from '../components/shared/TagLink';

import PageLayout from '../components/layout/PageLayout';

import ListingTitle from '../components/listing/ListingItemTitle';
import ListingItem from '../components/listing/ListingItem';
import ListingContainer from '../components/listing/ListingContainer';

const TagTitle = styled(ListingTitle)`
    &:before {
        content: '⨳';
    }
`

const BlogTagsIndex = ({ data }) => {
    const tags = data.allMarkdownRemark.group;

    return (
        <PageLayout>
            <ListingContainer>
                {tags.map(({ fieldValue, totalCount }) => (
                    <ListingItem key={fieldValue}>
                        <TagTitle>
                            <TagLink tag={fieldValue} />
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
