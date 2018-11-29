import styled from 'styled-components';
import media from '../styles/media';

const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 41rem;

    ${media.phone`padding: 0 2rem;`}
`;

export default ContentContainer;
