# nemv
node express mongo vue vuetify 
## config ���� ���� ���

**config/index.js**  
```javascript
module.exports = {
  dbUrl: 'mongodb://localhost:27017/nemv',
  admin: {
    id: 'admin', // 로그인(관리자로 생성될) -> 자신의 id
    pwd: '1234', // 로그인(관리자로 생성될) -> 자신의 pwd
    name: '관리자' //로그인(관리자로 생성될) -> 자신의 name
  },
  jwt: {
    secretKey: '아주 어려운 토큰 발급용 키',
    issuer: 'xxx.com',
    subject: 'user-token',
    algorithm: 'HS256',    
    expiresIn: 60 * 3, // 기본 3분 
    expiresInRemember: 60 * 60 * 24 * 7 // 기억하기 눌렀을 때 7일
    expiresInDiv: 3, // 토큰시간 나누는 기준
  }
}
```

- dbUrl: 디비 주소
- admin: 생성되는 관리자

토큰 만들 때 필요한 정보 추가

참고: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
jsonwebtoken에 대한 내용 및 알고리즘
