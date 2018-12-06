import { zipObject } from 'lodash';

const getText = (node) => node.textContent;
const nodeListToArray = (nodeList) => [].slice.call(nodeList);

const childNodesToArray = (parentContainer) => {
    const ths = nodeListToArray(parentContainer.childNodes);
    return ths.map(getText);
};

const parseTable = (tableDom) => {
    const headers = childNodesToArray(tableDom.querySelector('thead tr'));
    const bodyRows = nodeListToArray(tableDom.querySelectorAll('tbody tr')).map(childNodesToArray);

    const rowsByKey = bodyRows.map((bodyRow) => zipObject(headers, bodyRow));

    const tableData = headers.reduce((data, key, i) => ({
        ...data,
        [key]: rowsByKey.map(row => row[key]),
    }), {});

    return {
        headers,
        tableData,
    };
};

export default parseTable;
