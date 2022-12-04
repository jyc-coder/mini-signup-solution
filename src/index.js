// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 한다.
// 대상: ID 입력 Input
// 시점: 페이지가 로드 되었을 때
// 이벤트 : Focus()
const $id = document.getElementById('id')
window.addEventListener('load', () => $id.focus())
