"use strict";

function capitalize(str) {
  if (!str) {
    return str;
  }

  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  return newStr;
}
