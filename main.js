const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
const memoArea = document.getElementById('memo');

const MEMO_KEY = "memo";

function saveDocument(event){//textarea 안에 있는 내용을 로컬 스토리지에 저장하는 기능
    localStorage.setItem(MEMO_KEY, JSON.stringify(memoArea.value));
}
function loadDocument(event){//로컬 스토리지에 저장된 내용을 textarea에 불러오는 기능
    memoArea.value = "";
    memoArea.value = JSON.parse(localStorage.getItem(MEMO_KEY));
}

//이벤트 핸들러...
saveButton.addEventListener('click', saveDocument);
loadButton.addEventListener('click', loadDocument);

//추가하고 싶은 기능
//1. 내용을 로컬스토리지 말고 파일로 저장
//2. 웹서버에 내용을 저장하기
//3. 로그인해서 사용자마다 정보를 각각 저장
//4. 에디터 기능 추가
//5. 반응형 웹디자인