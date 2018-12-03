import React, { Component } from 'react';
import styled from 'styled-components';
import { toPairs, omit, mapKeys, sample, reduce } from 'lodash/fp';
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
    position: relative;
    padding: 0.5rem;

    &:after {
        position: absolute;
        top: -0.12rem;
        right: 0.8rem;
        content: '⚄';
        font-size: 2rem;
    }
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
        {buttons.map(([title, dice, additionalFields], i) => (
            <RollerButton key={i} onClick={() => rollResult(dice, additionalFields)}>{title}</RollerButton>
        ))}
    </StyledButtonsContainer>
);

const TableRollerResult = ({ result }) => (
    <StyledResult>
        {toPairs(result)
            .map(([key, value], i) => (
            <StyledResultValue key={i}>
                <StyledResultTitle>{key}: </StyledResultTitle>
                <span>{value}</span>
            </StyledResultValue>
        ))}
    </StyledResult>
);

const reduceFields = reduce((acc, [key, fieldValue]) => ({
    ...acc,
    [key]: parseAdditionalValue(fieldValue),
}))

const parseAdditionalValue = (value) => {
    if (value.indexOf('|') > 0) {
        return sample(value.split('|'));
    }

    return droll.roll(value).total;
}

class TableRoller extends Component {
    state = {};

    componentDidMount() {
        const table = findTable(this.props.table);
        const { headers, tableData } = parseTable(table);

        this.setState({ headers, tableData });
    }

    getResultLinked(dice) {
        const { tableData } = this.state;

        const result = tableData[droll.roll(dice) - 1];

        return result;
    }

    getResultUnlinked(dice) {
        const { headers, tableData } = this.state;

        const result = headers.reduce((acc, key) => ({
            ...acc,
            [key]: tableData[droll.roll(dice) - 1][key]
        }), {});

        return result;
    }

    rollResult(dice, additionalFields = []) {
        const { type = 'linked', filter } = this.props;
        const { tableData } = this.state;

        const filterKeyArray = filter && filter.split(',') || [];
        const result = type === 'linked' ? this.getResultLinked(dice) : this.getResultUnlinked(dice);

        const filteredResult = omit(filterKeyArray, result);

        const beforeFields = reduceFields({}, additionalFields.filter(([_a, _b, placement]) => placement === 'before'));
        const afterFields = reduceFields({}, additionalFields.filter(([_a, _b, placement]) => placement !== 'before'));

        this.setState({
            result: {
                ...beforeFields,
                ...filteredResult,
                ...afterFields
            },
        });
    }

    render() {
        const { buttons } = this.props;
        const { tableData, result } = this.state;

        if (!tableData) return null;

        const buttonsArray = buttons && JSON.parse(buttons) || ['Roll', `d${tableData.length}`];

        return (
            <StyledTableRoller>
                <TableRollerButtons buttons={buttonsArray} rollResult={(dice, additionalFields) => this.rollResult(dice, additionalFields)} />
                {result && <TableRollerResult result={result} />}

            </StyledTableRoller>
        );
    }
}

export default TableRoller;
