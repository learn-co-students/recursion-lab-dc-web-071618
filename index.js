// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    let substring = string.substring(0, string.length - 1);
    return string[string.length - 1] + reverseString(substring);
  } else {
    return string;
  }
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    let substring = string.substring(1, string.length - 1);
    return isPalindrome(substring);
  } else {
    return false;
  }
}

function addUpTo(arr, i) {
  if (i > 0) {
    return addUpTo(arr, i - 1) + arr[i];
  } else {
    return arr[0];
  }
}

function maxOf(arr) {
  if (arr.length > 1) {
    let otherMax = maxOf(arr.slice(1));
    if (arr[0] > otherMax) {
      return arr[0];
    } else {
      return otherMax;
    }
  } else {
    return arr[0];
  }
}

function includesNumber(arr, n) {
  if (arr[0] === n) {
    return true;
  } else if (arr.length > 1) {
    let subarray = arr.slice(1);
    return includesNumber(subarray, n);
  } else {
    return false;
  }
}
