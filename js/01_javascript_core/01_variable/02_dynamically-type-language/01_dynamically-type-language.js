var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = "JavaScript";
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {}; // JSON Object
console.log(typeof test); // object

test = []; // JSON Array
console.log(typeof test); // object

test = function() {}; // 함수가 리터럴 -> 함수 지향 프로그래밍 언어
console.log(typeof test); // function -> 얘도 object이다.