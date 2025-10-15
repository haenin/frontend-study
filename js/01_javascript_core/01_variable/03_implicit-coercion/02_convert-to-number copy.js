console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'JavaScript');     // NaN
console.log(10 > '5');

console.log('양수로 바꿔서 number로 변환');
console.log(+''); // falsy하다
console.log(+'1');
console.log(+'JavaScript'); // truthy하다
console.log(+true);
console.log(+false);
console.log(+null); // 0
console.log(+undefined); // NaN
// console.log(+Symbol());
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+function(){}); // NaN 
// 이게 괴랄해서 나온게 typescript
// 우리가 지금한건 바닐라스크립트(순수스크립트)

