let configData = {
  columns: ["count(Year)"],
  index: [
    "Apr",
    "Aug",
    "Dec",
    "Feb",
    "Jan",
    "Jul",
    "Jun",
    "Mar",
    "May",
    "Nov",
    "Oct",
    "Sep"
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
  cachefile: "1d1c37b0-d9fb-48fb-b042-b70d9ae5f789.feather",
  size: 12,
  offset: 0,
  limit: 60
};

// let index = configData.index;
// let data = configData.data;


// let newData = [];
// data.forEach(element => {
//   element.forEach(x => {
//     newData.push(x);
//   });
// });
// const newData = data.map((element) => element[0]);
// console.log(newData);

// index.forEach(element => {
//   results.push({
//     month: element
//   });
// });

// results.push({
//   month: 'Apr',
//   value: 2300
// });

// console.log(results);

const results = configData.index.map((monthName, i) => {
  return {month: monthName,
          value: configData.data[i][0]};
});

console.log(results);
