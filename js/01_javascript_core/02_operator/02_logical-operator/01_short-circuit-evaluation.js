// 단축 평가 구문
// 논리 연산의 결과를 결정지을 항만 남는다.
// 1. OR의 경우
/*
    00 0
    01 1
    10 1
    11 1
*/
console.log('apple' || 'banana'); // 앞에가 true 먼저 결정 //apple
console.log('' || 'banana');
console.log('apple' || 'false');

// 2. AND의 경우
console.log('apple' && 'banana'); // 뒤에가 true를 결정 // banana
console.log('' && 'banana'); // 빈칸출력
console.log('apple' && 'false'); // false

// 3. 단축 평가 구문
var num = 2;
// true 여야 뒤에가 결정지음
num % 2 == 0 && console.log('짝수입니다.'); // && 좌측이 true여야 우측이 실행
// false일때만 뒤에가 실행
num % 2 == 0 || console.log('홀수입니다.'); // || 좌측이 false여야 우측이 실행

if(num % 2 == 0){
    console.log("짝수입니다");
}else {
    console.log("홀수입니다.")
}

