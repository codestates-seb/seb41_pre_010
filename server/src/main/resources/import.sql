//유저테이블
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE) VALUES(CURRENT_TIMESTAMP,'유저닉네임 stub','유저 email stub','유저 password stub','이미지 url stub','유저 title stub')
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE) VALUES(CURRENT_TIMESTAMP,'휴먼A','humanA@gmail.com',1234,'이미지 url stub','휴먼A입니다')
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE) VALUES(CURRENT_TIMESTAMP,'휴먼B','humanB@gmail.com',1234,'이미지 url stub','휴먼B입니다')
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE) VALUES(CURRENT_TIMESTAMP,'휴먼C','humanC@gmail.com',1234,'이미지 url stub','휴먼C입니다')
//질문
INSERT INTO QUESTION VALUES(1,'질문 내용',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'질문 제목',0,1)
INSERT INTO QUESTION VALUES(2,'말파 궁 없는데 캐리가능한가요?',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'가능한가요?',0,1)
INSERT INTO QUESTION VALUES(3,'노가다중~',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'초기데이터 넣는중',0,1)
INSERT INTO QUESTION VALUES(4,'그냥 관계매핑할걸',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'괜히 한다 그랬누',0,2)
INSERT INTO QUESTION VALUES(5,'에잇',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'노가다2',0,2)
INSERT INTO QUESTION VALUES(6,'추천점',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'아침 뭐먹죠',0,3)
INSERT INTO QUESTION VALUES(7,'아침이랑 다른거로',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'점심은 뭐먹죠',0,3)
//답변
INSERT INTO ANSWER VALUES(1,'답변 내용',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1,1)
INSERT INTO ANSWER VALUES(2,'못하면 져야지 ㅋㅋ',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2,2)
INSERT INTO ANSWER VALUES(3,'ㄹㅇㅋㅋ',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2,3)
INSERT INTO ANSWER VALUES(4,'5시전에 안 끝날 듯~',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3,2)
INSERT INTO ANSWER VALUES(5,'공부했어야지ㅋ',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,4,3)
INSERT INTO ANSWER VALUES(6,'잇에',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,5,4)
INSERT INTO ANSWER VALUES(7,'사과',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,6,2)
//코멘트

//태그
INSERT INTO TAG VALUES(1,'HTML')
INSERT INTO TAG VALUES(2,'CSS')
INSERT INTO TAG VALUES(3,'Java Script')
INSERT INTO TAG VALUES(4,'Java')
INSERT INTO TAG VALUES(5,'SpringBoot')
//추천

//질문태그
INSERT INTO QUESTION_TAG VALUES(1,1,1)
INSERT INTO QUESTION_TAG VALUES(2,1,2)
INSERT INTO QUESTION_TAG VALUES(3,1,3)
INSERT INTO QUESTION_TAG VALUES(4,2,4)
INSERT INTO QUESTION_TAG VALUES(5,2,5)
INSERT INTO QUESTION_TAG VALUES(6,3,1)
INSERT INTO QUESTION_TAG VALUES(7,3,2)
INSERT INTO QUESTION_TAG VALUES(8,3,3)
INSERT INTO QUESTION_TAG VALUES(9,3,4)
INSERT INTO QUESTION_TAG VALUES(10,3,5)

//북마크

