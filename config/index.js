module.exports = {
  dbUrl: 'mongodb://localhost:27017/nemv',
  admin: {
    id: 'admin',
    pwd: '1234',
    name: '관리자'
  },
  jwt: {
    secretKey: '아주 어려운 토큰 발급용 키', // 시크릿 키
    issuer: 'xxx.com', // 만든 사람 및 서버 
    subject: 'user-token', //token name
    algorithm: 'HS256', // 암호화 알고리즘
    expiresIn: 60 * 3, // 기본 3분
    expiresInRemember: 60 * 60 * 24 * 7, // 기억하기 눌렀을 때 7일
    expiresInDiv: 3, // 토큰시간 나누는 기준
  },
  recaptchaSecret: '6LeKY6wUAAAAAM7qSgspNrbdCYWDr91FcloLfxc6' // google testkey
}