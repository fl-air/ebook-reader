function getModalTitle(filterType, filterState) {
    return Object.entries(filterState).reduce((acc, val) => acc.concat(`${val[0]}:${val[1]} `), '');
}

export {getModalTitle};