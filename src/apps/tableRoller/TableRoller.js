import React, { Component } from 'react';
import styled from 'styled-components';
import { toPairs, omit, mapKeys, mapValues, sample, reduce } from 'lodash/fp';
import droll from 'droll';

import parseTable from './parseTable';

import {
    StyledTableRoller,
    StyledButtonsContainer,
    RollerButton,
    StyledResult,
    StyledResultValue,
    StyledResultTitle,
} from './components';

const TableRollerButtons = ({ buttons, rollResult }) => (
    <StyledButtonsContainer>
        {buttons.map(([title, fields], i) => (
            <RollerButton key={i} onClick={() => rollResult(fields)}>{title}</RollerButton>
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

const hasPipe = (string) => string.indexOf('|') > 0;
const splitPipe = (string) => string.split('|');

const hasColon = (string) => string.indexOf(':') > 0;
const splitColon = (string) => string.split(':');

const findTable = (markerId) => {
    const tableMarker = document.querySelector(`*[data-table-marker="${markerId}"]`);
    return tableMarker.nextElementSibling;
};

const rollField = (defaultResult, tableData) => (value) => {
    if (defaultResult[value]) return defaultResult[value];

    if (hasColon(value)) {
        const [dice, key] = splitColon(value);
        const roll = droll.roll(dice).total - 1;
        return tableData[roll][key];
    }

    if (hasPipe(value)) {
        return sample(splitPipe(value));
    }

    return droll.roll(value).total;
};

const getResult = ({ tableData, fields }) => {
    return mapValues(rollField(sample(tableData), tableData))(fields);
};

class TableRoller extends Component {
    state = {};

    componentDidMount() {
        const table = findTable(this.props.table);
        const { headers, tableData } = parseTable(table);

        this.setState({ headers, tableData });
    }

    rollResult(fields) {
        const { filter } = this.props;
        const { tableData, headers } = this.state;
        const fieldsWithDefault = fields || headers.reduce((acc, header) => ({ ...acc, [header]: header }), {});

        const result = getResult({ tableData, fields: fieldsWithDefault });

        this.setState({
            result: result,
        });
    }

    render() {
        const { buttons } = this.props;
        const { tableData, result } = this.state;

        if (!tableData) return null;

        const buttonsArray = buttons && JSON.parse(buttons) || ['Roll', `d${tableData.length}`];

        return (
            <StyledTableRoller>
                <TableRollerButtons buttons={buttonsArray} rollResult={(fields) => this.rollResult(fields)} />
                {result && <TableRollerResult result={result} />}

            </StyledTableRoller>
        );
    }
}

export default TableRoller;
