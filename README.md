# :herb: 도시농부

도시에서 농촌 생활을 꿈꾸는 사람들을 위해 농작물 관련 정보를 제공합니다



## 활용 기술 :art:

| 서버                             | 프론트엔드                                  |
| -------------------------------- | ------------------------------------------- |
| express(4.16.1)                  | vue(3.2.6) + vuex(4.0.0), vue-router(4.0.3) |
| mysql(2.18.1)                    | typescript(4.1.5)                           |
| axios(0.24.0), request(2.88.2)   | sass(1.32.7)                                |
| bcryptjs(2.4.3) , xml-js(1.6.11) | toast-ui/editor(2.5.4)                      |



## 로컬에서 실행해보기

```bash
cd backend/
npm install
npm start
```

http://localhost:3000/

## 활용 데이터 :computer:

농촌진흥청 제공

1. 농작업일정
2. 병충해발생정보



## 기획 의도 :bulb:

도시에 살지만 시골에 대한 왠지 모를 그리움을 느끼는 사람이 많습니다.

주말농장을 통해 그리움을 달래려다가

생각처럼 자라주지 않는 작물들의 벽을 만나는 사람들을 위해

도시농부가 탄생했습니다.

품종별 작물 정보와 연간 일정을 제공하여

보다 쉽게 농작업을 할 수 있도록 합니다.

매월 병충해 발생정보를 업데이트하여 대응할 수 있도록 돕습니다.

농장에 100% 집중하기 힘든 사람들이 주말농장을 선택하는 만큼

주말농장의 상황을 기록하기 위한 농장일기 기능도 제공합니다.



## 데이터베이스 :on:

1. users

   ```sql
   create table users (
   	userId int not null primary key auto_increment,
       name varchar(45) not null,
       email varchar(255) not null,
       password varchar(255) not null
   );
   ```

2. crops

   ```sql
   create table crops (
   	cropId int not null primary key auto_increment,
     kidofcomdtySeCode int not null,
     catNm varchar(45) not null,
     codeNm varchar(255) not null,
     cntntsNo int not null,
     image varchar(255) default '@/assets/flower.png'
   );
   ```

3. likeCrops

   ```sql
   create table likeCrops (
   	likeCropId int not null primary key auto_increment,
     userId int not null,
     cropId int not null,
     FOREIGN KEY(userId) REFERENCES users(userId),
     FOREIGN KEY(cropId) REFERENCES crops(cropId)
   );
   ```

4. diseases

   ```sql
   create table diseases (
   	diseasesId int not null primary key auto_increment,
     year int not null,
     month int not null,
     category varchar(45),
     midCategory varchar(45),
     name varchar(255)
   );
   ```

5. journals

   ```sql
   create table journals (
   	journalId int not null primary key auto_increment,
     title varchar(255) not null,
     author int,
     created_at TIMESTAMP DEFAULT NOW(),
     water boolean default false,
   	fertilizer boolean default false,
     content text,
     FOREIGN KEY(author) REFERENCES users(userId)
   );
   ```



- [ ] 좋아하는 작물 선택
- [ ] 작물 이미지 업로드
- [ ] 좋아하는 작물의 병해충 발생
- [ ] 일기 U
- [ ] 일기 D
- [ ] 글쓰기(그대로, 사진)