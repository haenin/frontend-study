
// ASI(Auto Semicolon Insertion)에 의해 세미콜론을 기본적으로 작성해주지만 수동적으로 작성하자!
// 안되는 경우가 존재할 수 있음(에러찾기 힘듬)
var flag = true
var flag = true;
console.log(flag);
flag = false;
console.log(flag);

console.log(typeof flag);