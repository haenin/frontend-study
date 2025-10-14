// 첫 글자가 대문자인 Symbol이라는 함수를 호출하면 Symbol타입이 생성
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2); // 다른 Symbol 타입이다. // false

var sym3 = Symbol('설명');
var sym4 = Symbol('설명');
console.log(sym3 == sym4); // false
console.log(sym3.description); // Symbol은 description을 가지고 있음 객체의 속성같은 것
console.log(sym4.description); // Symbol 타입의 description 속성(property)에 접근
console.log(typeof sym3) ;// object

/**
 * 리터럴 객체({}) (생성자를 쓰지 않고 생성)를
 * 생성해서 추후에 동적으로 프로퍼티(속성)을 추가 및 제거할 수 있다.
 */
// 리터럴 객체
var obj = {}; // 중괄호만 해도 객체 생성
obj['일반속성'] = '일반';
// 대괄호[]는 객체의 속성에 접근 또는 없으면 추가하는 개념
console.log(obj); // String name = "최혜원" 같은 것 
// 객체의 속성이 프로퍼티와 벨류로
obj['일반속성'] = '일반2';
console.log(obj); // 속성이 늘어나지 않고 속성값이 변했다. -> 키가 동일하면 덮어썻넹

/**
 * 같은 값을 가진 Symbol타입은 다른 프로퍼티로 인지한다.
 */
obj[sym3] = '값1'; // setter느낌
obj[sym4] = '값2';
console.log(obj); // { '일반속성': '일반2', [Symbol(설명)]: '값1', [Symbol(설명)]: '값2' }
console.log(obj[sym3]); //getter 느낌

/* 숨김 프로퍼티를 적용하기 위해  */
var hidden = Symbol('숨김 프로퍼티');
obj[hidden] = "비밀값";
obj['name'] = "최혜원";
console.log(obj);
console.log('==========')
// Object.keys()에 던져진(obj)가 가진 프로퍼티 키값을 배열로 반환
// -> Symbol타입은 제외된다.
console.log(Object.keys(obj)); // Symbol 타입은 나오지 않음