import React from 'react';
import { Link } from 'gatsby';
import { kebabCase, capitalize } from 'lodash';

const TagLink = ({ tag, children, ...props }) => (
    <Link {...props} to={`/tags/${kebabCase(tag)}`}>
        {children || capitalize(tag)}
    </Link>
);

export default TagLink;
