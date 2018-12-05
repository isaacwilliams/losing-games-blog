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
    return {
        headers,
        tableData: bodyRows.map((bodyRow) => zipObject(headers, bodyRow)),
    };
};

export default parseTable;
