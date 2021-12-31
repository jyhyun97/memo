const http = require('http');//http 모듈
const fs = require('fs');//파일 입출력 모듈
//모듈이 더 필요한가??

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var stream = fs.createReadStream("./index.html");
    stream.pipe(res);
    if (req.method == 'POST')//이게 새로고침 post인지 fetch의 post인 지 구분하고 싶은데
    {
        req.on('data', (data) => {
            console.log(data.toString('utf8'));
        });
    }
})

server.listen(port, hostname, () => {
    console.log('Server running\n');
})

//1. 서버에 내가 준비한 html을 띄우기[ㅇㅋ]
//2. html에서 submit 버튼을 누르면 서버에서 그걸 받아서 출력해보기[ㅇㅋ]
//2.5 데이터 인코딩 하기[ㅇㅋ]
//2.6 데이터 보낼 때 마다 새로고침되는 문제 해결하기[ㅇㅋ]
//2.7 새로고침할 때마다 POST 되는 문제 해결하기[ ]
//3. 내용을 파일로 저장하기[ ]