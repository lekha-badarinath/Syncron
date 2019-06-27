const configData = {
    columns: ['count(Year)'],
    index: [
        'Apr',
        'Aug',
        'Dec',
        'Feb',
        'Jan',
        'Jul',
        'Jun',
        'Mar',
        'May',
        'Nov',
        'Oct',
        'Sep'
    ],
    data: [
        [7890],
        [6800],
        [5975],
        [6666],
        [11295],
        [7419],
        [8140],
        [7974],
        [7881],
        [6032],
        [5777],
        [5531]
    ],
    cachefile: '1d1c37b0-d9fb-48fb-b042-b70d9ae5f789.feather',
    size: 12,
    offset: 0,
    limit: 60
};

const results = configData.index.map((monthName, i) => {
    return {
        name: monthName,
        value: configData.data[i][0]
    };
});

console.log(results);
