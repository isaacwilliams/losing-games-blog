import React from 'react';
import styled from 'styled-components';

import TagLink from '../shared/TagLink';

const TagsContainer = styled.div`
    display: flex;
    padding-top: 4rem;
    font-size: 0.9rem;
`

const TagsLi = styled.li`
    display: inline-block;
    margin-left: 1rem;

    &:before {
        content: '⨳';
        margin-right: 0.1rem;
        color: grey;
    }
`

const StyledLink = styled(TagLink)`
    color: grey;
`

const BlogPostTagsList = ({ tags }) => (
    <TagsContainer>
        Tags:

        <ul>
            {tags.sort().map(tag => (
                <TagsLi key={tag}>
                    <StyledLink tag={tag} />
                </TagsLi>
            ))}
        </ul>
    </TagsContainer>
);

export default BlogPostTagsList;
