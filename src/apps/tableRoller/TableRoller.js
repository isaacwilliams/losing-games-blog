import React, { Component } from 'react';
import styled from 'styled-components';
import { toPairs, omit, mapKeys, mapValues, sample, reduce, omitBy, startsWith } from 'lodash/fp';
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

const hasPipe = (string) => string.indexOf('|') > 0;
const splitPipe = (string) => string.split('|');

const hasColon = (string) => string.indexOf(':') > 0;
const splitColon = (string) => string.split(':');

const omitMetaValues = omitBy((_, key) => startsWith('~~', key));

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
    const defultRoll = fields['~~roll'] || `d${tableData.length}`;
    const defaultValue = tableData[droll.roll(defultRoll).total - 1];

    return mapValues(rollField(defaultValue, tableData))(fields);
};

class TableRoller extends Component {
    state = { results: [] };

    componentDidMount() {
        if (!this.props.table) return;

        const table = findTable(this.props.table);
        const { headers, tableData } = parseTable(table);

        this.setState({ headers, tableData });
    }

    rollResult(fields) {
        try {
            const { tableData = [{}], headers = [], results } = this.state;

            const fieldsWithDefault = fields || headers.reduce((acc, header) => ({ ...acc, [header]: header }), {});

            const resultType = fields['~~resultType'] || 'replace';
            const result = omitMetaValues(getResult({ tableData, fields: fieldsWithDefault }));


            this.setState({
                results: resultType === 'append' ?
                    [...results, result] :
                    [result],
            });
        } catch (error) {
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
