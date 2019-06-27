const isNotDivisible = divisibleBy => num => num % divisibleBy !== 0;
const sumOfAllDigits = element =>
  element > 9
    ? element
        .toString()
        .split("")
        .map(Number)
        .reduce((x, y) => x + y)
    : element;

const squareOfNumber = element => element * element;

// Assignment 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const functionOne = arr =>
  arr
    .map(element => element * 2)
    .map(sumOfAllDigits)
    .filter(isNotDivisible(3))
    .reduce((x, y) => x + y);

console.log("Assignment 1 final result: " + functionOne(arr));

//Assignment 2
const languages = ["Java", "Javascript", "Python", "Typescript"];

const functionTwo = lang =>
  lang.reduce((acc, current, i) => {
    acc["Index_" + i] = current;
    return acc;
  }, {});

console.log("Assignment 2 final result: ", functionTwo(languages));

//Assignment 3
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8];

const functionThree = arr =>
  arr
    .map(squareOfNumber)
    .map(sumOfAllDigits)
    .map(element => parseInt(element.toString().concat("1")))
    .filter(isNotDivisible(3))
    .reduce((acc, current) => {
      return acc + current.toString();
    }, "");

console.log("Assignment 3 final result: ", functionThree(arrTwo));

//Assignment 4
const arrThree = [12, 23, 34, 45, 56, 67, 78, 89];

const functionFour = arr => {
  const doubled = arr.map(element => element * 2);
  const digitSum = doubled.map(element => {
    return element
      .toString()
      .split("")
      .map(Number)
      .reduce((x, y) => x + y);
  });
  return digitSum;
};

console.log("Assignment 4 partial result: ", functionFour(arrThree));

//Assignment 5
const listOne = [1, 2, 3, 4, 5, 6, 7];
const listTwo = [8, 5, 3, 5, 6, 2, 1];

const functionFive = (lstOne, lstTwo) => {
  const newArray = lstOne.map((element, i) => element * lstTwo[i]);
  const evenArr = newArray.filter(element => element % 2 === 0);
  return evenArr.reduce((x, y) => x + y);
};

console.log("Assignment 5 final result: ", functionFive(listOne, listTwo));
