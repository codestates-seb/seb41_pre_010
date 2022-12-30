export const questionDummyData = {
  questionId: 1,
  user: {
    userId: 1,
    displayName: "휴먼D",
    profileImage: "이미지 url stub",
  },
  title: "질문 제목",
  body: "질문 내용",
  vote: 0,
  createdAt: "2022/12/30/01:33",
  modifiedAt: "2022/12/30/01:33",
  voteUpCheck: false,
  voteDownCheck: true, //Boolean
  bookMarkCheck: false, //Boolean
  tags: [{tagName:"React"},{tagName:"Node.js"}],
  answers: [
    {
      answerId: 1,
      user: {
        userId: 1,
        displayName: "휴먼D",
        profileImage: "이미지 url stub",
      },
      body: "답변 1",
      createdAt: "2022/12/30/01:33",
      modifiedAt: "2022/12/30/01:33",
      vote: 0,
      voteUpCheck: true,
      voteDownCheck: false, //Boolean
      bookMarkCheck: true,
      comments: [
        {
          commentsId: 1,
          user: {
            userId: 1,
            displayName: "휴먼D",
            profileImage: "이미지 url stub",
          },
          body: "코멘트1",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
        {
          commentsId: 2,
          user: {
            userId: 2,
            displayName: "휴먼A",
            profileImage: "이미지 url stub",
          },
          body: "코멘트2",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
      ],
    },
    {
      answerId: 2,
      user: {
        userId: 2,
        displayName: "휴먼A",
        profileImage: "이미지 url stub",
      },
      body: "답변 2",
      createdAt: "2022/12/30/01:33",
      modifiedAt: "2022/12/30/01:33",
      vote: 0,
      voteUpCheck: true,
      voteDownCheck: false, //Boolean
      bookMarkCheck: true,
      comments: [
        {
          commentsId: 3,
          user: {
            userId: 3,
            displayName: "휴먼B",
            profileImage: "이미지 url stub",
          },
          body: "코멘트3",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
        {
          commentsId: 4,
          user: {
            userId: 4,
            displayName: "휴먼C",
            profileImage: "이미지 url stub",
          },
          body: "코멘트4",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
      ],
    },
    {
      answerId: 3,
      user: {
        userId: 3,
        displayName: "휴먼B",
        profileImage: "이미지 url stub",
      },
      body: "답변 3",
      createdAt: "2022/12/30/01:33",
      modifiedAt: "2022/12/30/01:33",
      vote: 0,
      voteUpCheck: true,
      voteDownCheck: false, //Boolean
      bookMarkCheck: true,
      comments: [
        {
          commentsId: 5,
          user: {
            userId: 5,
            displayName: "휴먼E",
            profileImage: "이미지 url stub",
          },
          body: "코멘트5",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
        {
          commentsId: 6,
          user: {
            userId: 1,
            displayName: "휴먼D",
            profileImage: "이미지 url stub",
          },
          body: "코멘트6",
          createdAt: "2022/12/30/01:33",
          modifiedAt: "2022/12/30/01:33",
        },
      ],
    },
  ],
};
