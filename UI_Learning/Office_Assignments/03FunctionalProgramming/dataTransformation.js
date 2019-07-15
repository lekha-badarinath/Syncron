const dataFetched = [
  { columnName: null, columnId: "p0:0", columnDisplayName: null },
  {
    columnName: "count(Comparison Name)",
    columnId: "p0:1",
    columnDisplayName: "count(Comparison Name)"
  },
  {
    columnName: "count(Comparison Name)",
    columnId: "p0:2",
    columnDisplayName: "count(Comparison Name)"
  },
  {
    columnName: "count(Comparison Name)",
    columnId: "p0:3",
    columnDisplayName: "count(Comparison Name)"
  }
];

let obj = Object.entries(
  dataFetched.reduce((acc, el) => {
    acc[el.columnName] = acc[el.columnName] ? acc[el.columnName] + 1 : 1;
    return acc;
  }, {})
).map(e => ({ columnName: e[0], count: e[1] }));

console.log(obj);

const toObj = function(arr) {
  let newObj = [];
  let count = 1;
  for (i = 0; i < arr.length; i++) {
    obj = {};
    if (arr[i] !== arr[i + 1]) {
      obj.name = arr[i];
      obj.size = count;
      newObj.push(obj);
      count = 1;
    } else {
      count += 1;
    }
  }
  return newObj;
};
// console.log(toObj(['a','b','b','b']));
