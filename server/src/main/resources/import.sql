//유저테이블
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE,VOTE_COUNT) VALUES(CURRENT_TIMESTAMP,'유저닉네임 stub','유저 email stub','유저 password stub','이미지 url stub','유저 title stub',0)
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE,VOTE_COUNT) VALUES(CURRENT_TIMESTAMP,'휴먼A','humanA@gmail.com',1234,'이미지 url stub','휴먼A입니다',0)
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE,VOTE_COUNT) VALUES(CURRENT_TIMESTAMP,'휴먼B','humanB@gmail.com',1234,'이미지 url stub','휴먼B입니다',0)
INSERT INTO USERS (CREATED_AT,DISPLAY_NAME,EMAIL,PASSWORD,PROFILE_IMAGE,TITLE,VOTE_COUNT) VALUES(CURRENT_TIMESTAMP,'휴먼C','humanC@gmail.com',1234,'이미지 url stub','휴먼C입니다',0)

//질문
INSERT INTO QUESTION VALUES(1,0,'질문 내용','질문 미리보기1',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'질문 제목',0,2,1)
INSERT INTO QUESTION VALUES(2,0,'말파 궁 없는데 캐리가능한가요?','질문 미리보기2',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'가능한가요?',0,1,1)
INSERT INTO QUESTION VALUES(3,0,'노가다중~','질문 미리보기3',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'초기데이터 넣는중',0,3,1)
INSERT INTO QUESTION VALUES(4,0,'그냥 관계매핑할걸','질문 미리보기4',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'괜히 한다 그랬누',0,0,2)
INSERT INTO QUESTION VALUES(5,0,'에잇','질문 미리보기5',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'노가다2',0,6,2)
INSERT INTO QUESTION VALUES(6,0,'추천점','질문 미리보기6',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'아침 뭐먹죠',0,9,3)
INSERT INTO QUESTION VALUES(7,0,'아침이랑 다른거로','질문 미리보기7',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'점심은 뭐먹죠',0,12,3)

//답변
INSERT INTO ANSWER VALUES(1,'답변1',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,4,1,1)
INSERT INTO ANSWER VALUES(2,'답변2',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2,4,1)
INSERT INTO ANSWER VALUES(3,'답변3',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,8,6,1)
INSERT INTO ANSWER VALUES(4,'답변4',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,5,2,2)
INSERT INTO ANSWER VALUES(5,'답변5',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,4,4,2)
INSERT INTO ANSWER VALUES(6,'답변6',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3,3,3)
INSERT INTO ANSWER VALUES(7,'답변7',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,9,5,3)

//코멘트
INSERT INTO COMMENTS VALUES(1,'코멘트1',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,NULL,1,1)
INSERT INTO COMMENTS VALUES(2,'ㅇㄱㄹㅇ ㅂㅂㅂㄱ',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1,NULL,2)
INSERT INTO COMMENTS VALUES(3,'코멘트3',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,NULL,2,2)
INSERT INTO COMMENTS VALUES(4,'코멘트4',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3,NULL,3)
INSERT INTO COMMENTS VALUES(5,'코멘트5',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,NULL,3,4)
INSERT INTO COMMENTS VALUES(6,'코멘트6',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,4,NULL,2)
INSERT INTO COMMENTS VALUES(7,'코멘트7',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,NULL,5,3)
//태그
INSERT INTO TAG VALUES(1,'HTML')
INSERT INTO TAG VALUES(2,'CSS')
INSERT INTO TAG VALUES(3,'Java Script')
INSERT INTO TAG VALUES(4,'Java')
INSERT INTO TAG VALUES(5,'SpringBoot')

-- //추천
-- INSERT INTO VOTE VALUES(1,1,NULL,1,1)
-- INSERT INTO VOTE VALUES(2,1,NULL,1,2)
-- INSERT INTO VOTE VALUES(3,1,1,NULL,2)
-- INSERT INTO VOTE VALUES(4,1,NULL,1,3)
-- INSERT INTO VOTE VALUES(5,1,NULL,2,3)
-- INSERT INTO VOTE VALUES(6,1,3,NULL,3)
-- INSERT INTO VOTE VALUES(7,1,NULL,4,4)

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
INSERT INTO QUESTION_TAG VALUES(10,4,5)
INSERT INTO QUESTION_TAG VALUES(11,4,1)
INSERT INTO QUESTION_TAG VALUES(12,5,2)
INSERT INTO QUESTION_TAG VALUES(13,5,3)
INSERT INTO QUESTION_TAG VALUES(14,5,4)
INSERT INTO QUESTION_TAG VALUES(15,5,5)
INSERT INTO QUESTION_TAG VALUES(16,6,1)
INSERT INTO QUESTION_TAG VALUES(17,6,2)
INSERT INTO QUESTION_TAG VALUES(18,6,3)
INSERT INTO QUESTION_TAG VALUES(19,7,4)
INSERT INTO QUESTION_TAG VALUES(20,7,5)

//답변 북마크
INSERT INTO BOOKMARK_ANSWER VALUES(1,1,CURRENT_TIMESTAMP,1,1)
INSERT INTO BOOKMARK_ANSWER VALUES(2,1,CURRENT_TIMESTAMP,2,1)
INSERT INTO BOOKMARK_ANSWER VALUES(3,1,CURRENT_TIMESTAMP,3,1)
INSERT INTO BOOKMARK_ANSWER VALUES(4,1,CURRENT_TIMESTAMP,4,1)

//질문 북마크
INSERT INTO BOOKMARK_QUESTION VALUES(1,1,CURRENT_TIMESTAMP,1,1)
INSERT INTO BOOKMARK_QUESTION VALUES(2,1,CURRENT_TIMESTAMP,2,1)
INSERT INTO BOOKMARK_QUESTION VALUES(3,1,CURRENT_TIMESTAMP,3,1)
INSERT INTO BOOKMARK_QUESTION VALUES(4,1,CURRENT_TIMESTAMP,4,1)