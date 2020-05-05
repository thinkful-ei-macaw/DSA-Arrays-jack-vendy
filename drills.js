/* URLify a string */

function urlify(str) {
  let nextSpace = str.indexOf(' ');
  if (nextSpace === -1) {
    return str;
  }

  while (nextSpace !== -1) {
    str = str.slice(0, nextSpace) + '%20' + str.slice(nextSpace + 1);
    // str = str.replace(' ', '%20'); also works
    nextSpace = str.indexOf(' ');
  }

  return str;
}

function urlifyAlt(str) {
  return str.split(' ').join('%20');
}

console.log(urlify('hello there hello'));

/* Filtering an Array */

function filterNums(arr, num) {
  if (!arr.length) {
    return [];
  }

  if (arr[0] < 5) {
    return [arr[0], ...filterNums(arr.slice(1), num)];
  } else return filterNums(arr.slice(1));
}

function filterNumsAlt(arr, num) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterNums([5, 2, 2, 5, 4, 20, 5, 3, 10, 5], 5));

/* Max sum in the array */
function maxSum(array) {
  //keep track of current max
  let currentMax = 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    if (currentMax < total) {
      currentMax = total;
    }
  }
  return currentMax;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

/* Merge Arrays */
function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => {
    return a - b;
  });
}

console.log(
  'This is mergerArray',
  mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]),
);

/* Remove characters */

function removeChars(string, chars) {
  if (!string.length) {
    return '';
  }

  const re = new RegExp(`[${chars}]`, 'i');

  if (re.test(string[0])) {
    return removeChars(string.slice(1), chars);
  } else return string[0] + removeChars(string.slice(1), chars);
}

let stringToRemoveFrom = 'Battle of the Vowels: Hawaii vs. Grozny';
let charsToRemove = 'aeiou';

console.log(removeChars(stringToRemoveFrom, charsToRemove));

/* Products */

function products(arr) {
  const result = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

// O(n^2);

console.log(products([1, 3, 9, 4]));

// 2D Array

function twoDee(arr) {
  let cols = new Set();
  let rows = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        cols.add(j);
      }
      if (arr[j][i] === 0) {
        rows.add(i);
      }
    }
  }

  rows.forEach((row) => {
    arr[row].fill(0);
  });

  cols.forEach((col) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i][col] = 0;
    }
  });

  return arr;
}

let myArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(twoDee(myArr));
