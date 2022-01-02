# boiler-plate
nodejs, expressjs, mongodb

### nodejs 설치, npm init으로 create
npm init

### nodejs 프레임워크 express 설치
npm install express --save

### index.js 파일 수정

### 몽고DB 생성

### 몽구스 설치
npm install mongoose --save
몽구스를 사용하여 mongodb에 connect

### 몽고DB 스키마 생성
User.js

### bodyParser 를 사용하여 requestBody 를 받는다
npm install body-parser --save

### nodemon 을 이용하여 변경된 소스를 서버에 바로 반영
npm install nodemon --save-dev
package.json - scripts 추가 "start-nodemon": "nodemon index.js"

### password 정보 config 로 이동

### 비밀번호 암호화 bcrypt 사용
npm install bcrypt --save