// Assignment 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const functionOne = arr => {
  const localArr = arr.map(element => element * 2);
  // console.log("1) Elements doubled:\n" + localArr);

  const newArr = localArr.map(element => {
    if (element > 9) {
      const sum = element
        .toString()
        .split("")
        .map(Number)
        .reduce((x, y) => x + y);
      return sum;
    }
    return element;
  });

  // console.log("2) Adding element digits:\n" + newArr);

  const divisibleArr = newArr.filter(element => element % 3 !== 0);
  // console.log(divisibleArr);

  const sum = divisibleArr.reduce((x, y) => x + y);
  return sum;
};

console.log('Assignment 1 final result: ' + functionOne(arr));

//Assignment 2
const languages = ["Java", "Javascript", "Python", "Typescript"];

const functionTwo = lang => {
  const newObj = {};
  lang.map(i => (newObj[`Index_${lang.indexOf(i)}`] = i));
  return newObj;
};

console.log('Assignment 2 final result: ', functionTwo(languages));

//Assignment 3
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8];

const functionThree = arr => {
  let newArr = arr.map(i => i * i);
  const digitSum = newArr.map(element => {
    if (element > 9) {
      const sum = element
        .toString()
        .split("")
        .map(Number)
        .reduce((x, y) => x + y);
      return sum;
    }
    return element;
  });

  const appendOne = digitSum.map(element =>
    parseInt(element.toString().concat("1"))
  );

  const divisible = appendOne.filter(element => element % 3 !== 0);
  let str = "";
  divisible.map(element => {
    str = str + element.toString();
  });

  return str;
};

console.log('Assignment 3 final result: ',functionThree(arrTwo));

//Assignment 4
const arrThree = [12, 23, 34, 45, 56, 67, 78, 89];

const functionFour = arr => {
  const doubled = arr.map(element => element * 2);
  const digitSum = doubled.map(element => {
    return  element
        .toString()
        .split("")
        .map(Number)
        .reduce((x, y) => x + y);

  });
  return digitSum;
};

console.log('Assignment 4 partial result: ',functionFour(arrThree))

//Assignment 5
const listOne = [1,2,3,4,5,6,7];
const listTwo = [8,5,3,5,6,2,1];

const functionFive = (lstOne,lstTwo) => {
  const newArray = lstOne.map((element,i) => element * lstTwo[i]);
  const evenArr = newArray.filter(element => element % 2 === 0);
  return evenArr.reduce((x,y) => x+y);
}


console.log('Assignment 5 final result: ',functionFive(listOne,listTwo));
