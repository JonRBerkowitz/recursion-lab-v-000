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

function reverseString(string) {
  
  if (string.length > 1) {
    return string[string.length - 1] + reverseString(string.substring(0,string.length - 1))
    
  } else {
    return ""
  }
}