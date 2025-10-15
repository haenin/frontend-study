/*
    ES11(2020)에 도입된 연산자로 연산자의 좌항이 null 또는 undefined인 경우
    error 대신 undefiend를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
    .(dot natation)은 객체의 프로퍼티에 접근하는 접근 연산자
*/
var obj = null;
// obj = {
//     'value': 'abc'
// };
// 동적타입 변수에 null 이나 값을 넣지 않았을 경우
// // var val = obj.value; -> 에러 발생
// obj = {
//     'value': 'abc'
// };
// var val = obj['value'];
var val3 = obj?.value2; // ?. -> NPE 방지 코드
console.log(val3); // undefined

/* 좌항이 Null이거나 undefiend가 아니라면 ?. 쓸 필요없이 .으로만 사용해도 된다. */
var str2 = '';
var len = str?.length;
console.log(len); // 0
