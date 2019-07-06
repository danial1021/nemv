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
    name: '������' //로그인(관리자로 생성될) -> 자신의 name
  },
  jwt: {
    secretKey: '���� ����� ��ū �߱޿� Ű',
    issuer: 'xxx.com',
    subject: 'user-token',
    algorithm: 'HS256',    
    expiresIn: 60 * 3, // �⺻ 3��
    expiresInRemember: 60 * 60 * 24 * 7 // ����ϱ� ������ �� 7��
    expiresInDiv: 3, // ��ū�ð� ������ ����
  }
}
```

- dbUrl: �����ͺ��̽� �ּ�
- admin: ���� �� ������ ������ ������

��ū ���� �� �ʿ��� ������ �߰��մϴ�.

- jwt.secretKey: secretKey -> jwt.secretKey
- jwt.issuer: ���� ���, ����
- jwt.subject: ��ū �̸�
- jwt.algorithm: ��ȣȭ 10���� ������ ��

참고: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
jsonwebtoken에 대한 내용 및 알고리즘
