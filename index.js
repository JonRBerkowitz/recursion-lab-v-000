// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subStr = string.substring(1, string.length);
    printString(subStr)
  } else {
    return true
  }
}
