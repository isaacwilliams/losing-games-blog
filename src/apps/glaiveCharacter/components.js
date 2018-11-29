import styled from 'styled-components';
import Button from '../../components/shared/Button';
import media from '../../components/styles/media';

export const CharacterAppWrapper = styled.div`
    p {
        margin: 1em 0;
    }

    ul {
        li {
            margin: 0.25em 0;
        }
    }

    strong {
        font-weight: 600;
    }
`

export const CharacterDetails = styled.div`
    margin-bottom: 2em;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;

    ${media.phone`
        flex-direction: column;
        align-items: flex-start;
    `}
`

export const Name = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    flex-shrink: 1;
`

export const Controls = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-top: 0.25em;
    height: 1.5em;
    flex-shrink: 0;
`

export const RerollButton = styled(Button)`
    font-size: 0.8em;
`

export const SwitchStatsButton = styled(Button)`
    font-size: 0.8em;
    background: white;
    text-decoration: underline;
    color: grey;

    &:hover {
        background: white;
        color: black;
    }
`

export const ColumnContainer = styled.div`
    display: flex;

    ${media.phone`
        display: block;
    `}
`

export const Column = styled.div`
    width: 50%;
    padding-right: 1rem;

    ${media.phone`
        width: auto;
        margin-bottom: 2em;
        padding-right: 0;
    `}
`

export const ColumnTitle = styled.h3`
    font-weight: 600;
    border-bottom: 1px solid black;
    margin-bottom: 1em;
`
