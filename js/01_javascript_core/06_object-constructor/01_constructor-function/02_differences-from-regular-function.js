/* 객체를 생성 할 용도의 함수(this.을 활용하고
    이름의 첫 글자를 대문자로 함)
    더라도 new 연산자가 없으면 일반함수와 동일함
*/
function Student (name, age) {
    this.name = name; // 일반 함수로 사용될 때의 this는 global 객체이며 없는 속성이면 접근 시 추가됨
    this.age = age; // 
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다`;
    }
    console.log("일반 함수일 때 this:", this);    

    // return this.getInfo;
};

/* new 연산자를 안 붙이고 일반 함수로 썻을 때는 반환형이 없는 함수일 뿐이다. */
const student = Student('강감찬', 35);
console.log(student); // undefined -> return이 없기 때문

/* 
    생성자 함수가 일반 함수와 명확히 차이나도록(객체만 생성하도록) 
    new 연산자 없이 호출되어도 객체 생성 가능하게
    작성 가능 -> 빌트 인 함수
*/
function Dog(name, age) {
    // new.target은 new 연산자를 써서 호출하면 true, 안쓰면 false
    // new 연산자를 안쓰고 함수를 호출하면 true가 되도록
    if(!new.target) {
        return new Dog(name, age); // 이런게 Boolean, String 얘네때도 new를 안붙였는데 이렇게 빌트인 되어잇음
    }

    this.name = name;
    this.age = age;
}

const dog1 = Dog("뽀삐", 2);
console.log(dog1); // Dog { name: '뽀삐', age: 2 }

const dog2 = new Dog("두부", 3);
console.log(dog2); // Dog { name: '두부', age: 3 }

/* 제공되는 빌트인 함수들: Object, String, Number, Boolean, Date, Regex, ... */