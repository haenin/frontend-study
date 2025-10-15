function hello(name) {
    return `${name}님 하이`;
};

(function() {
    console.log('익명 즉시 실행함수! 함수 정의와 동시에 자동 호출');
})();

(function(name) {
    console.log(`${name}씨 반가워~`);
})('홍길동');

// 매개변수에 있는 함수에 인수를 전달할 수 있지만
// 기명함수로 만들어도 외부에서 호출은 x
(function g(name) {
    console.log(`${name}씨 반가워~`);
})('홍길동'); // 호출됨
g('피카츄') // 에러