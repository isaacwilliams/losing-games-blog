import React, { Component } from 'react';
import styled from 'styled-components';
import { toPairs } from 'lodash';
import droll from 'droll';

import parseTable from './parseTable';
import Button from '../../components/shared/Button';

const findTable = (markerId) => {
    const tableMarker = document.querySelector('*[data-table-marker]');
    return tableMarker.nextElementSibling;
};

const StyledTableRoller = styled.div`
    margin: 2rem 0;
    border: 1px solid lightgrey;
`

const StyledButtonsContainer = styled.div`
    padding: 0.5rem;
`

const RollerButton = styled(Button)`
    margin-right: 0.5rem;
`

const StyledResult = styled.div`
    padding: 0.5rem;

    border-top: 1px solid lightgrey;
    background: #eee;
`

const StyledResultValue = styled.div`
    margin-bottom: 0.25rem;
`

const StyledResultTitle = styled.span`
    font-weight: 600;
    margin-right: 0.5rem;
`

const TableRollerButtons = ({ buttons, rollResult }) => (
    <StyledButtonsContainer>
        {buttons.map(([title, dice], i) => (
            <RollerButton key={i} onClick={() => rollResult(dice)}>{title}</RollerButton>
        ))}
    </StyledButtonsContainer>
);

const TableRollerResult = ({ result, filterKeys = [] }) => (
    <StyledResult>
        {toPairs(result)
            .filter(([key]) => filterKeys.indexOf(key))
            .map(([key, value], i) => (
            <StyledResultValue key={i}>
                <StyledResultTitle>{key}: </StyledResultTitle>
                <span>{value}</span>
            </StyledResultValue>
        ))}
    </StyledResult>
);

class TableRoller extends Component {
    state = {};

    componentDidMount() {
        const table = findTable(this.props.table);
        const tableData = parseTable(table);

        this.setState({ tableData });
    }

    rollResult(dice) {
        const { tableData } = this.state;

        const diceRoll = droll.roll(dice);

        this.setState({
            result: tableData[diceRoll.total - 1],
        });
    }

    render() {
        const { filter, buttons } = this.props;
        const { tableData, result } = this.state;

        if (!tableData) return null;

        const filterKeyArray = filter && filter.split(',');
        const buttonsArray = buttons && JSON.parse(buttons) || ['Roll', `d${tableData.length}`];

        return (
            <StyledTableRoller>
                <TableRollerButtons buttons={buttonsArray} rollResult={(dice) => this.rollResult(dice)} />
                {result && <TableRollerResult result={result} filterKeys={filterKeyArray} />}

            </StyledTableRoller>
        );
    }
}

export default TableRoller;
