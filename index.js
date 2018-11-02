function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring);
  }
}

function reverseString(string) {
  console.log("string", string);
  if (string === "") {
    return "";
  } else {
    console.log("string[0]", string[0]);
    let reversed = reverseString(string.substring(1)) + string[0];
    console.log("reversed", reversed);
    return reversed;
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] === string[string.length - 1]) {
      isPalindrome(string.substring(1, string.length - 1));
      return true;
    } else {
      return false;
    }
  }
}

// function addUpTo(array, index) {
//   let sum = 0;
//   for (let i = 0; i <= index; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

function addUpTo(array, index) {
  if (index > 0) {
    return array[index] + addUpTo(array, --index);
  } else {
    return array[index];
  }
}

function maxOf(array) {
  if (array.length > 1) {
    return Math.max(array.shift(), maxOf(array));
  } else {
    return array[0];
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}
