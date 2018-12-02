import React, { Component } from 'react';
import styled from 'styled-components';
import { toPairs } from 'lodash';

import parseTable from './parseTable';
import Button from '../../components/shared/Button';

const r = (max) => Math.floor(Math.random() * max);
const pick = (array) => array[r(array.length)];

const findTable = (markerId) => {
    const tableMarker = document.querySelector('*[data-table-marker]');
    return tableMarker.nextElementSibling;
};

const StyledTableRoller = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0.5rem;
    border: 1px solid lightgrey;
`


const StyledResult = styled.div`
    margin-left: 0.5rem;
    padding-left: 0.5rem;

    border-left: 1px solid lightgrey;
`

const StyledResultValue = styled.div`
    margin-bottom: 0.25rem;
`

const StyledResultTitle = styled.span`
    font-weight: 600;
`

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

    rollResult() {
        const { tableData } = this.state;

        this.setState({
            result: pick(tableData),
        });
    }

    render() {
        const { filter, title = 'Roll' } = this.props;
        const { tableData, result } = this.state;

        if (!tableData) return null;

        const filterKeyArray = filter && filter.split(',');

        return (
            <StyledTableRoller>
                <Button onClick={() => this.rollResult()}>{title}</Button>
                {result && <TableRollerResult result={result} filterKeys={filterKeyArray} />}

            </StyledTableRoller>
        );
    }
}

export default TableRoller;
