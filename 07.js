function add (input) {

}

//2개의 숫자를 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
    return x + y;
}

//2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
};

//3. 함수를 호출한다(= 사용한다)
// 함수명() add(입력값)
console.log(add(2,3));