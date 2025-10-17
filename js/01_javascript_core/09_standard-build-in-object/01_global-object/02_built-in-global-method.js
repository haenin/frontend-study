// 단순 비교 연산자(==, !=)를 쓰지 못해서 함수를 써야만 되는 경우
/* 유한한 값인가? */
console.log('globalThis.isFinite(10): ',globalThis.isFinite(10)); // true
console.log('globalThis.isFinite(Infinity):',globalThis.isFinite(Infinity)); // false

/* NaN인가? */
// NaN == NaN 유일하게 불가
console.log(global.isNaN(NaN)); // true
console.log(global.isNaN(10)); // false

/*
    js에서 uri 경로 상에 한글이 포함된 값을 처리해야 할 경우라면
    인코딩 또는 디코딩을 해주어야 한다.
    이때 전역 객체에서 제공하는 메소드를 사용할 수 있다.

    URIComponent 방식(밑에 애들 빼고 인코딩시킴)
    알파벳: A-Z, a-z
    숫자: 0-9
    특수기호: - _ . ! ~ * ' ()
*/
const uriComp = 'name=홍길동&job=student';
const encComp = global.encodeURIComponent(uriComp); // 프론트에서 인코딩해서 백엔드로 보낸다.
console.log(encComp); // name%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26job%3Dstudent

// 프론트 쪽에서 URL로 넘어온 값이 한글이 깨지면 적용해 볼 것(백엔드에서)
const decodeComp = global.decodeURIComponent(encComp);
console.log(decodeComp); // name=홍길동&job=student