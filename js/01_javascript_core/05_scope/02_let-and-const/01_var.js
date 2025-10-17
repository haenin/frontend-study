// 함수 레벨 스코프
/*
    C, 자바 등 대부분의 프로그래밍 언어는 모든 코드 블럭(if, for, while, try/catch 등)이
    지역 스코프를 만드는 블록 레벨 스코프(block level scope)를 가진다.
    하지만 var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정하는
    함수 레벨 스코프(Function level scope)를 가진다.
 */
var i = 0;
for(var i = 0; i < 10; i++){

}

// var i +=1 ; -> 이런느낌에 가까워짐
// for문 안의 var i는 for문 범위가 스코프로 인정되지 않기 때문에 지역변수가 아니게 됨
console.log(i); // 10

// var 키워드의 특징
/* 1. 같은 범위(전역 또는 같은 함수 레벨 스코프)에서 변수 중복 선언 가능 */
var msg ='안녕하세요';
console.log('msg',msg); // msg 안녕하세요

var msg ='안녕히 가세요';
console.log('msg',msg); // msg 안녕히 가세요

var msg; // 변수가 초기화 되지 않고 중복 선언된 경우는 무시됨(불규칙)
console.log('msg',msg); // msg 안녕히 가세요

/* 2. 함수 레벨 스코프만 인정됨(위에서 확인) */

/* 3. 변수 호이스팅 */
// 에러가 발생하지 않음
console.log(test); // undefined 

test = '반갑습니다.'; // 대입이 안된 상태로 호이스팅 됨
var test;