# boiler-plate

### nodejs 설치, npm init으로 create
#npm init

### nodejs 프레임워크 express 설치
#npm install express --save

### index.js 파일 수정
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
