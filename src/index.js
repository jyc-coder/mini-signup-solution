// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 한다.
// 대상: ID 입력 Input
// 시점: 페이지가 로드 되었을 때
// 이벤트 : Focus()
const $id = document.getElementById('id')
window.addEventListener('load', () => $id.focus())

// 2. 유효성 검사 로직
// 대상 : ID, 비밀번호, 비밀번호 확인 input
// 이벤트 : (1) input focus out (2) 가입하기 버튼을 눌렀을 때
// 핸들러 : (1) 해당 input의 유효성 검사 (2) 모든 필드의 유효성 검사

const $pw = document.getElementById('pw')
const $pwCheck = document.getElementById('pw-check')

var ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
var PW_REGEX = new RegExp('^[a-zA-z0-9]{8,16}$')

const validateId = (value) => {
    // (공통) 모든 필드의 값은 빠짐 없이 입력해야 합니다.
    // 5~20자, 영문 소문자 ,숫자 ,특수기호(_),(-)만 사용가능
    const isValidId = ID_REGEX.test(value)
    console.log(isValidId)
}

const validatePw = (value) => {
    // 8~16자, 영문 대/소문자, 숫자 사용가능
    const isValidPw = PW_REGEX.test(value)
    console.log(isValidPw)
}

const validatePwCheck = (value) => {
    // 비밀번호와 같은 값이어야함
    const isValidPwCheck = $pw.value === value
    console.log(isValidPwCheck)
}

$id.addEventListener('focusout', () => validateId($id.value))
$pw.addEventListener('focusout', () => validatePw($pw.value))
$pwCheck.addEventListener('focusout', () => validatePwCheck($pwCheck.value))

const $submit = document.getElementById('submit')

$submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    validateId($id.value)
    validatePw($pw.value)
    validatePwCheck($pwCheck.value)
})
