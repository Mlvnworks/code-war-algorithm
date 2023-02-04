// Get Query Value From Url
const getQuery = key => {
    if (!location.href.includes(key)) {
        return null;
    }
    const queryStr = location.href.split('?').filter((val, ind) => ind !== 0);
    const queryValue = queryStr[0]
        .split('&')
        .filter(que => que.includes(key))[0]
        .split('=')[1];
    return queryValue;
};
