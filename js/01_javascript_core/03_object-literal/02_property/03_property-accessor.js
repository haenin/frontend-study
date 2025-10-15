var dog = {
    name: '멍멍이',
    eat: function (food) {
        //메서드의 this는 메서드를 호출한 객체(나의 객체), 매개변수와 일치하는 변수는 지역변수
        console.log(`${this.name}가 ${food}를 먹습니다.`);
    }
};

/* 1. 마침표 표기법(dot notation) */
console.log(dog.name);
dog.eat('풀');

/* 2. 대괄호 표기법(square braket notation) */
var obj = {
    // _, $는 내부적으로 인지해서 접근연산자 가능
    under_key: 'under_key',
    // -는 인지 x 대괄호 표기
    'dash-key': 'dash-key',
    0: 1
};
console.log(obj.under_key);
/* 마침표 표기법은 한계가 있다.
console.log(obj.'dash-key'); // 오류
console.log(obj.0); // 오류
*/
/*
    대괄호 표기법은 다양한 형태의 포르퍼티들을 모두 접근할 수 있다.
*/

// 대괄호 안에는 '' 해줘야함 안해주면 오류
console.log(obj['dash-key']);
console.log(obj['0']);
// 근데 숫자만 가능 숫자는 예외적으로 오류없음 ㅎㅎ 
console.log(obj[0]); // 숫자 프로퍼티 키 값일 경우에는 숫자로 바로 접근 가능