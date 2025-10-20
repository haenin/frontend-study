/**
 * 1. 콜백함수로 화살표 함수를 써야만 하는 경우가 있다.
 * -> 콜백함수에서 사용하는 this의 의미가 다르기 때문
 * 
 * - 화살표 함수 사용시
 * -> 렉시컬 this(화살표 함수는 자신만의 this를 가지지 않음) (글로벌개념이 없음)
 * 상위 스코프(나를 호출한 고차함수인 foreach)에서 상속 받아 화살표 함수가 정의 된 
 * 시점의 상위 스코프 this를 의미하게 된다.
 * (화살표 함수이자 콜백함수를 사용하는 고차함수를 호출할 때 쓰이는 this)
 * 
 * - 단순 익명 함수 사용 시
 *    자체 this의 의미가 바인딩되어 있다.
 *    콜백 함수로 사용시에는 global(전역 객체) 객체를 의미하게 된다.
 */
let theater = {
    store: '강남점',
    titles: ['세계의 주인', '굿 보이', '부산 포니아', '디바 아누스', '콘스탄틴'],
    showMovieList() {
        this.titles.forEach(
        // this는 원래 theater가 아니지만 애로우 펑션은 자기를 호출한 this와 동일해짐    
            title => console.log(this.store + ": " + title) // 나를 사용하는 고차함수의 this
        );
    }
};

theater.showMovieList();

/* 2. 화살표 함수는 new 연산자와 함께 사용할 수 없다.(생성자 함수가 될 수 없다.) */
const arrowFunc = () => {};
const normalFUnc = function() {

};

// 생성자가 아니라서 에러 발생
// new arrowFunc(); // TypeError: arrowFunc is not a constructor
new normalFunc();

/* 화살표 함수는 arguments를 지원하지 않는다. */
// 화살표 함수는 자기자신이 뭐가 없기 때문에 자기에 대한 게 아님
const test = () => console.log(arguments); // this와 마찬가지로 화살표 함수의 arguments가 아닌
                                        // 상위개념(global 객체)의 arguments

test(1, 2, 3, 4, 5);
const test2 = function() {
    console.log(`normal function일 경우: `, arguments); // 넘어온 모든 인수를 유사 배열로 저장
}
test2(1, 2, 3, 4, 5); // normal function일 경우:  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }