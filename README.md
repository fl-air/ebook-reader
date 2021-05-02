<h1 align="center">Welcome to membership-airbnb 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> boostcamp membership 4th mission - airbnb
### 🏠 [Homepage](http://45.119.146.248:3000/)

## Structure
### Frontend
```
./
├── public/                   # 정적 문서 
└── src/                      # 소스 파일
    ├── apollo/               # 아폴로 설정 파
    ├── asset/                # 어셋 파일 
    ├── components/           # 컴포넌트
    |   ├── context/          # 컨텍스트 컴포넌트     
    |   └── filter/           # 필터 컴포넌트     
    ├── graphql/              # gql 관련 파일
    ├── routes/               # 라우트 컴포넌
    ├── stylesheet/           # 스타일 시트
    ├── test/                 # 테스트 파일
    ├── utils/                # 커스텀 유틸리티 파일
    ├── App.js                # 최상위 컴포넌트
    ├── index.js              # 엔트리 포인트
    └── serviceWorker.js      # 뭔지 모르겠음 
```

### Backend
```
./
├── config/                   # 각종 환경설정 파일들
├── cors/                     # CORS 관련 설정 파일
├── databases/                # 데이터베이스 관련 파일
|   ├── DDL/                  # DDL    
|   ├── migrations/           # 마이그레이션 파일들 (sequelize-cli)
|   ├── models/               # 모델 파일들 (sequelize-cli)
|   ├── seeders/              # 시더 파일들 (sequelize-cli)    
|   ├── SQL/                  # SQL
|   └── index.js              # DB API 엔트리 포인트
├── graphql/                  # graphQL 관련 폴더
|   ├── resolvers.js          # resolver
|   └── schema.graphql        # schema
├── middlewares/              # 커스텀 미들웨어
├── public/                   # 정적 문서
|   └── index.html/           # 로그인 및 인증 테스트용 정적 html
├── .env                      # 설정 파일
├── .sequelizerc              # sequelize-cli용 환경설정 파일
└── index.js                  # API 서버 엔트리 포인트 
```

## Feature List
[feature list - HackMD](https://hackmd.io/bSY4wOW-S6ejEMXs3I_nZg?both)

## Design
![ERD](./airbnb_20191015_38_32.png)

## Skill & Dependency
### Backend
- Node
- Express
- graphQL
- graphQL-yoga
- mysql2
- sequelize
- sequelize-cli
- cors
- dotenv
- nodemon
- passport
- jsonwebtoken

### Frontend
- react
- apollo
- bootstrap
- material ui
- fontawesome

## Install

```sh
npm run start
```

## Usage

project/back
```sh
yarn start
```

project/front
```sh
yarn start
```

## Author

👤 **Einere**

* Github: [@Einere](https://github.com/Einere)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Einere/membership-airbnb/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
