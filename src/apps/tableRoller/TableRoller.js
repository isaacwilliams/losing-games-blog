import React, { Component } from 'react';
import styled from 'styled-components';
import {
    toPairs,
    omit,
    mapKeys,
    mapValues,
    sample,
    reduce,
    omitBy,
    startsWith,
    min,
    max,
} from 'lodash/fp';

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

import AppErrorBoundary, { ErrorContainer } from '../AppErrorBoundry';

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

const contains = (value) => (array) => array.indexOf(value) > -1;

const hasPipe = contains('|');
const splitPipe = (string) => string.split('|');

const hasColon = contains(':')
const splitColon = (string) => string.split(':');

const hasCurlyBrace = contains('{');

const omitMetaValues = omitBy((_, key) => startsWith('~~', key));

const findTable = (markerId) => {
    const tableMarker = document.querySelector(`*[data-table-marker="${markerId}"]`);
    return tableMarker.nextElementSibling;
};

const rollDice = (dice, directive) => {
    const roll = droll.roll(dice);

    switch (directive) {
        case 'lowest':
            return min(roll.rolls);
        case 'highest':
            return max(roll.rolls);
        default:
            return roll.total;
    }
}

const rollFieldValue = ({ defaultResult, tableData, headers }) => (value) => {
    if (contains(value)(headers)) {
        return tableData[value][defaultResult];
    }

    if (hasColon(value)) {
        const [dice, val1, val2] = splitColon(value);
        const key = val2 || val1;
        const directive = val2 ? val1 : undefined;

        const roll = rollDice(dice, directive) - 1;
        return tableData[key][roll];
    }

    const diceRoll = droll.roll(value).total;
    if (diceRoll) return diceRoll.toString();
};

const iterpolateField = ({ defaultResult, tableData, fields, headers }) => (value) => {
    const parts = value.split(/{([^}]+)}/g).filter((s) => !!s);

    return parts.map(part => {
        if (!contains(part)(headers)) return `${part}`;

        const fieldArray = tableData[part];
        if (!fieldArray) return part;

        const rolledValue = rollField({ defaultResult, tableData, headers })(`d${fieldArray.length}:${part}`);

        return rolledValue || part;
    })
    .join('');
};

const rollField = ({ defaultResult, tableData, fields, headers }) => (value) => {
    const fieldValue = rollFieldValue({ defaultResult, tableData, headers })(value);

    if (fieldValue && hasCurlyBrace(fieldValue)) {
        return iterpolateField({ defaultResult, tableData, fields, headers })(fieldValue);
    }

    return fieldValue;
};

const getResult = ({ tableData, fields, headers }) => {
    const defultRoll = fields['~~roll'] || `d${tableData[headers[0]].length}`;
    const defaultResult = droll.roll(defultRoll).total - 1;

    return mapValues(rollField({ defaultResult, tableData, fields, headers }))(omitMetaValues(fields));
};

class TableRoller extends Component {
    state = { results: [] };

    componentDidMount() {
        const { table = '', data } = this.props;

        let allHeaders = [];
        let allData = {};

        const tablesIds = table.split(',');
        tablesIds.forEach((tableId) => {
            const tableDom = findTable(tableId);
            const { headers, tableData } = parseTable(tableDom);

            allHeaders = [...allHeaders, ...headers];
            allData = {...allData, ...tableData};
        })

        const additionalData = data && JSON.parse(data) || {};

        allHeaders = [...allHeaders, ...Object.keys(additionalData)];
        allData = {...allData, ...additionalData};

        this.setState({
            headers: allHeaders,
            tableData: allData,
        });
    }

    rollResult(fields) {
        try {
            const { tableData = {}, headers = [], results } = this.state;

            const fieldsWithDefault = fields || headers.reduce((acc, header) => ({ ...acc, [header]: header }), {});

            const resultType = fields['~~resultType'] || 'replace';
            const result = getResult({ tableData, headers, fields: fieldsWithDefault });

            this.setState({
                results: resultType === 'append' ?
                    [...results, result] :
                    [result],
            });
        } catch (error) {
            console.error(error);
            this.setState({ error });
        }
    }

    render() {
        const { buttons } = this.props;
        const { tableData, results, error } = this.state;

        if (error) return <ErrorContainer>{error.toString()}</ErrorContainer>;

        const buttonsArray = buttons && JSON.parse(buttons);

        return (
            <StyledTableRoller>
                <TableRollerButtons buttons={buttonsArray} rollResult={(fields) => this.rollResult(fields)} />
                {results.map((result, i) => (
                    <TableRollerResult key={i} result={result} />
                ))}
            </StyledTableRoller>
        );
    }
}

export default (props) => <AppErrorBoundary><TableRoller {...props} /></AppErrorBoundary>;
