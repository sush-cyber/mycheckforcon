function isOddOrEven(number) {
  if (number % 2 === 0) {
    console.log('even');
    return 'even';
  } else {
    console.log('odd');
    return 'odd';
  }
}
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('World'));