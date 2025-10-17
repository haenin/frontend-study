const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN, // 글로벌 객체가 가진 프로퍼티
    Infinity, // 글로벌 객체가 가진 프로퍼티
    [],
    {},
    function() {} // 객체이자 값 (일급객체)
];

/* 자바의 배열보다는 ArrayList같은 컬렉션에 가깝다. */
console.log('arr',arr);

/*
    writable: true면 값을 수정할 수 있다.
    enumerable: true면 값을 순회할 수 있다.
    configurable: true면 값을 삭제할 수 있다.

    이 세가지가 모두 true가 아닌 객체를 '유사배열'이라고 부른다.
*/
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));// 객체가 가진 모든 프로퍼티를 볼 수 있음
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/