/*
    자바스크립트는 프로토타입 기반의 객체 지향(기반) 프로그래밍 언어로 원시 값을 제외한 나머지 값
    (함수, 배열, 정규표현식 등)은 모두 객체(object)이다.(프로토타입을 가지면 객체)
*/

var name ='홍씨';
var age = 10;

// 변수에 대입되서 리터럴 객체
// 하나의 값처럼 변수에 들어가서 리터럴
var student = {
    /* 속성 프로퍼티 */
    name: '유관순',
    age: 16,

    /* 기능 프로퍼티(=메서드) */
    getInfo: function() {
        // this를 붙이지 안으면 전역에 있는 name에 접근
        // this는 메서드를 포함한 객체를 의미
        // 메서드 안에서는 this.을 반드시 쓰자
        // 안쓰면 전역변수인 global객체의 perperty가 나옴
        return `${this.name}(은)는 ${this.age}세 입니다.`; // this 안붙이면 위에 name으로 감지
    }
};

console.log('student: ',student); // student:  { name: '유관순', age: 16, getInfo: [Function: getInfo] }
console.log('이름: ', student.name);
console.log('나이: ', student.age);
console.log('정보: ', student.getInfo); // 정보:  [Function: getInfo]
// 메서드는 소괄호(())를 통해 실행도 가능
console.log('정보: ', student.getInfo()); // 정보:  유관순(은)는 16세 입니다.
