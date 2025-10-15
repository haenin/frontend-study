function outer() {
    var outerVal = '외부함수';
    // 캡슐화
    function inner() {
        var innerVal = '내부함수';
        // 내부에서 외부를 사용가능
        console.log(outerVal, innerVal);
    }

    inner();  // scopechain 외부로 나가서 찾아가자
}
outer(); // 외부함수 내부함수
// 내부 함수는 함수 외부에서 접근 불가
// inner(); // ReferenceError: inner is not defined 