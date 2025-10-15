/* null 병합 연산자 */
/* 
    좌항의 피연산자 null 이거나 undefined라면 우항의 결과가 남고(함수면 실행),
    그렇지 않으면 좌항이 남는다.(함수면 실행)
*/
var test = null ?? '기본 값'; // NPE 방지 코드
console.log('test: ', test); // test:  기본 값
// console.log에 두 개의 인수를 주면 중간에 띄어쓰기를 포함해 이어붙여 줌

var value1 = '' || '기본 값2'; // 의미 o
var value2 = '' ?? '기본 값2'; // 의미 x (좌항이 Null이나 undefined가 아니니까)
console.log('value1',value1); // value1 기본 값2
console.log('value2',value2); // value2 

