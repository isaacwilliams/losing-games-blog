import styled from 'styled-components';
import Button from '../../components/shared/Button';

export const StyledTableRoller = styled.div`
    margin: 2rem 0;
    border: 1px solid lightgrey;
`
export const StyledButtonsContainer = styled.div`
    position: relative;
    padding: 0.5rem;

    &:after {
        position: absolute;
        top: -0.35rem;
        right: 0.8rem;
        content: '⚄';
        font-size: 2rem;
        color: grey;
    }
`
export const RollerButton = styled(Button)`
    margin-right: 0.5rem;

    &.secondary {
        background: grey;

        &:hover {
            background: red;
        }
    }
`

export const StyledResult = styled.div`
    padding: 0.5rem;

    border-top: 1px solid lightgrey;
    background: #eee;
`

export const StyledResultValue = styled.div`
    margin-bottom: 0.25rem;
`

export const StyledResultTitle = styled.span`
    font-weight: 600;
    margin-right: 0.25rem;
`
