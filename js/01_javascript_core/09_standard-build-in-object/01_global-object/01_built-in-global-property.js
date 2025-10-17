/*
    전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해
    어떤 객체보다도 먼저 생성되는, 그리고 어떤 객체에도 속하지 않는 최상위 객체를 뜻한다.
    Node.js 환경에서는 global, 웹 브라우저 환경에서는 window가 이에 해당한다.
*/

// 글로벌 객체
// Node.js에서는 this대신 globalThis를 해야 진짜 global 객체를 확인 가능
console.log('globalThis',globalThis);

// 좀 더 구체적으로 프로퍼티들 확인 가능 -> global에서 제공해주는 프로퍼티들(빌트인 오브젝트)
console.log('Object.getOwnPropertyDescriptors(globalThis)',Object.getOwnPropertyDescriptors(globalThis));

/* Infinity */
console.log('globalThis.Infinity: ',globalThis.Infinity);
console.log('10/0: ',10/0);
/* NaN */
console.log('globalThis.NaN:',globalThis.NaN);
console.log("Number('abc'): ",Number('abc'));