console.log(10 + '20'); //1020
console.log(`10 + 20: ${10 + 20}`); //10 + 20: 30

console.log(1 + '');
console.log(NaN + '');
console.log(Infinity +'');
console.log(true +'');
console.log(null +'');
console.log(undefined +'');

// 인터프리터 언어라 위에까지는 출력되고 이순간 에러 발생
// TypeError
// console.log(Symbol() +'');

console.log({} +'');
console.log([1,2] +'');
console.log(function() {} +'');