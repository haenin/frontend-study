/* 객체 리터럴 기반 상속 또는 프로토타입 직접 연결 상속(쉬운 버전, 잘 쓰지는 않는 방법) */
const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

console.log('user',user);
console.log(typeof user);

console.log(user.constructor == Object);
console.log(user.__proto__ == Object.prototype);
console.log(user.constructor == Object.prototype.constructor);
/* __proto__는 권장되지 않고 지금은 Object.getPrototypeOf()를 사용하는 것을 권장하고 있다. */
// 일부 js엔진 또는 웹브라우저 이슈 때문
console.log(Object.getPrototypeOf(user) == Object.prototype);

/* 상속 */
const user2 = {
    activate: '활성화 상태',
    login: function() {
        console.log('로그인 실패되었습니다.');
    }
};

console.log(user2.__proto__); // [Object: null prototype] {}

const student = {
    passion: true
};

// student.__proto__ = user2; // 엄마쪽을 끼워넣어서 상속받음
Object.setPrototypeOf(student, user2); // 요즘에 이렇게 상속받아 씀 요즘 권장 방식

// 접근할 때 본인께 없으면 프로토타입으로 가서 확인
console.log(student.activate); // user2 상속받았는지 확인 // 활성화 상태
student.login(); // user2 상속받았는지 확인 // 로그인 실패되었습니다.


const greedyStudent = {
    class:1
};

greedyStudent.__proto__ = student;
/* 객체의 프로퍼티에 접근 시에는 항상 프로토타입 체인을 통한 접근이 일어남 */
/* greedyStudent -> (프로토타입 접근) -> student -> (프로토타입 접근) 
-> user2 -> (프로토타입 접근) -> Object.prototype */
console.log(greedyStudent.passion); // true 
greedyStudent.login(); // 로그인 실패되었습니다.