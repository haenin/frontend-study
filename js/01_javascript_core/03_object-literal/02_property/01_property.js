var obj = {
    normal : 'normal value',
    // 특수기호 (_, $)를 쓸 수는 있으며 하지만 사용은 지양
    '@ s p a c e @' : 'space value',
    // 빈 문자열도 가능은 하지만 지양
    '': '',
    // 숫자형 프로퍼티는 내부적으로 문자열로 변환됨 ('0')
    0: 1,
    // 예약어(존재하는 키워드) 사용 지양하자 오류 x
    var : 'var',
    // 프로퍼티명이 중복되면 나중에 작성된 것만 인정
    normal: 'new value'
};
// 기존에 없는 프로퍼티에 접근하면 추가가 된다 오류 x
obj['test'] = 'test value';
console.log(obj); // 새로 추가됨
console.log(obj['@ s p a c e @']);