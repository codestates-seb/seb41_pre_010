export const dummyData = [
  {
    questionId: 0, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "Map() 기능이 랜더링 되는 순서에 따라 결과가 달라지는거 같습니다.", //String
    body: `운영 체제: Window

    Node.js 버전(node -v): 예)v14.16.0
    
    현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?
    
    MainProject 리팩토링 과정중입니다.
    
    어떠한 부분에서 이해가 안 되었나요?
    
    랜더링 되는 부분에서 순서에 따라
    에러가 나오고 안나오는거 같다라는 생각이 드는데
    이를 해결항 방법을 잘 모르겠습니다.
    
    제가 생각한 방법으로는 useEffect 로 랜더링 되는 순간을 정의하거나
    하면 될꺼 같은데 방법을 잘 모르겠습니다.`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/25 13:32", //String
    vote: 0, //Number
    answers: 2, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "avbc", //String
      },
      {
        tagId: 2, //Number
        tagName: "dddd", //String
      },
    ],
  },
  {
    questionId: 1, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "[타이머API] fetch -> JSON 후 왜 바로 key 조회가 안되나요 ?", //String
    body: `안녕하세요.
    타이머 API 과제 part3 (1)basicChanging에서그냥 return a 하면 분명 오브젝트로 아래처럼 뜨는데
    AssertionError: expected { Object (data) }
    a.data하면 undefined로 조회가 안돼요...
    아래 처럼 then으로 넘기면`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 1, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 2, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "프리 프로젝트 리포지토리", //String
    body: `안녕하세요 이번에 프리 프로젝트를 하는데요
    팀장님한테 리포지토리 공유를 받았는데 제가 실수로 리액트 파일을 만들어서 push를 해버렸습니다 ㅠㅠ
    그래서 공유받은 리포지토리에 들어가면 새로 만든 리액트 파일들이 나옵니다 그래서 제가 다시 삭제 후 push를 해서
    공유받은 리포지토리는 공백입니다 팀원들한테는 제가 월요일에 이야기 할건데 혹시 이게 문제가 되나요? ㅠㅠ`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 3, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "git status 파일을 전체로 어떻게 하나요? ㅠ", //String
    body: `현재 터미널에서 제출 할 파일 안에서 main dev 브랜치를 만들었고 git status를 하면 src안에 있는 파일 1개만 적용이 됩니다
    전체 파일로 적용 시킬려고 하면 어떻게 해야하나요?`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 5, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "javascript", //String
      },
    ],
  },
  {
    questionId: 4, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title:
      "github pages로 정적 페이지를 만들면 빈 화면이 뜨는 에러가 발생합니다", //String
    body: `안녕하세요 어제부터 계속 여러가지 방법으로 배포를 시도해보고 있습니다만... 계속해서 빈 화면이 나와서 질문드립니다.
    위 화면이 현재 깃허브 페이지 URL로 들어가면 나오는 화면입니다.
    
    처음에는 gh-pages가 문제인가 해서 1번 방법에서 2번 방법으로 바꾸어서 github pages를 생성해보았지만 동일하게 빈화면이 나왔습니다.
    
    webpack과 gh-pages를 install 해서 번들링 후 gh-pages에 업로드
    : 아래와 같이 jsx 관련 에러가 떴습니다. 에러구문에 나온대로 @barbel/plugin-syntax-jsx를 추가해봤는데 해결이 되지 않았습니다.`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/31 13:22", //String
    vote: 4, //Number
    answers: 1, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "java", //String
      },
    ],
  },
  {
    questionId: 5, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "Map() 기능이 랜더링 되는 순서에 따라 결과가 달라지는거 같습니다.", //String
    body: `운영 체제: Window

    Node.js 버전(node -v): 예)v14.16.0
    
    현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?
    
    MainProject 리팩토링 과정중입니다.
    
    어떠한 부분에서 이해가 안 되었나요?
    
    랜더링 되는 부분에서 순서에 따라
    에러가 나오고 안나오는거 같다라는 생각이 드는데
    이를 해결항 방법을 잘 모르겠습니다.
    
    제가 생각한 방법으로는 useEffect 로 랜더링 되는 순간을 정의하거나
    하면 될꺼 같은데 방법을 잘 모르겠습니다.`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/25 13:32", //String
    vote: 0, //Number
    answers: 2, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "avbc", //String
      },
      {
        tagId: 2, //Number
        tagName: "dddd", //String
      },
    ],
  },
  {
    questionId: 6, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "[타이머API] fetch -> JSON 후 왜 바로 key 조회가 안되나요 ?", //String
    body: `안녕하세요.
    타이머 API 과제 part3 (1)basicChanging에서그냥 return a 하면 분명 오브젝트로 아래처럼 뜨는데
    AssertionError: expected { Object (data) }
    a.data하면 undefined로 조회가 안돼요...
    아래 처럼 then으로 넘기면`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 1, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 7, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "프리 프로젝트 리포지토리", //String
    body: `안녕하세요 이번에 프리 프로젝트를 하는데요
    팀장님한테 리포지토리 공유를 받았는데 제가 실수로 리액트 파일을 만들어서 push를 해버렸습니다 ㅠㅠ
    그래서 공유받은 리포지토리에 들어가면 새로 만든 리액트 파일들이 나옵니다 그래서 제가 다시 삭제 후 push를 해서
    공유받은 리포지토리는 공백입니다 팀원들한테는 제가 월요일에 이야기 할건데 혹시 이게 문제가 되나요? ㅠㅠ`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 8, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "git status 파일을 전체로 어떻게 하나요? ㅠ", //String
    body: `현재 터미널에서 제출 할 파일 안에서 main dev 브랜치를 만들었고 git status를 하면 src안에 있는 파일 1개만 적용이 됩니다
    전체 파일로 적용 시킬려고 하면 어떻게 해야하나요?`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 5, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "javascript", //String
      },
    ],
  },
  {
    questionId: 9, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title:
      "github pages로 정적 페이지를 만들면 빈 화면이 뜨는 에러가 발생합니다", //String
    body: `안녕하세요 어제부터 계속 여러가지 방법으로 배포를 시도해보고 있습니다만... 계속해서 빈 화면이 나와서 질문드립니다.
    위 화면이 현재 깃허브 페이지 URL로 들어가면 나오는 화면입니다.
    
    처음에는 gh-pages가 문제인가 해서 1번 방법에서 2번 방법으로 바꾸어서 github pages를 생성해보았지만 동일하게 빈화면이 나왔습니다.
    
    webpack과 gh-pages를 install 해서 번들링 후 gh-pages에 업로드
    : 아래와 같이 jsx 관련 에러가 떴습니다. 에러구문에 나온대로 @barbel/plugin-syntax-jsx를 추가해봤는데 해결이 되지 않았습니다.`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/31 13:22", //String
    vote: 4, //Number
    answers: 1, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "java", //String
      },
    ],
  },
  {
    questionId: 10, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "Map() 기능이 랜더링 되는 순서에 따라 결과가 달라지는거 같습니다.", //String
    body: `운영 체제: Window

    Node.js 버전(node -v): 예)v14.16.0
    
    현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?
    
    MainProject 리팩토링 과정중입니다.
    
    어떠한 부분에서 이해가 안 되었나요?
    
    랜더링 되는 부분에서 순서에 따라
    에러가 나오고 안나오는거 같다라는 생각이 드는데
    이를 해결항 방법을 잘 모르겠습니다.
    
    제가 생각한 방법으로는 useEffect 로 랜더링 되는 순간을 정의하거나
    하면 될꺼 같은데 방법을 잘 모르겠습니다.`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/25 13:32", //String
    vote: 0, //Number
    answers: 2, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "avbc", //String
      },
      {
        tagId: 2, //Number
        tagName: "dddd", //String
      },
    ],
  },
  {
    questionId: 11, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "[타이머API] fetch -> JSON 후 왜 바로 key 조회가 안되나요 ?", //String
    body: `안녕하세요.
    타이머 API 과제 part3 (1)basicChanging에서그냥 return a 하면 분명 오브젝트로 아래처럼 뜨는데
    AssertionError: expected { Object (data) }
    a.data하면 undefined로 조회가 안돼요...
    아래 처럼 then으로 넘기면`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 1, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 12, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "프리 프로젝트 리포지토리", //String
    body: `안녕하세요 이번에 프리 프로젝트를 하는데요
    팀장님한테 리포지토리 공유를 받았는데 제가 실수로 리액트 파일을 만들어서 push를 해버렸습니다 ㅠㅠ
    그래서 공유받은 리포지토리에 들어가면 새로 만든 리액트 파일들이 나옵니다 그래서 제가 다시 삭제 후 push를 해서
    공유받은 리포지토리는 공백입니다 팀원들한테는 제가 월요일에 이야기 할건데 혹시 이게 문제가 되나요? ㅠㅠ`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 13, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "git status 파일을 전체로 어떻게 하나요? ㅠ", //String
    body: `현재 터미널에서 제출 할 파일 안에서 main dev 브랜치를 만들었고 git status를 하면 src안에 있는 파일 1개만 적용이 됩니다
    전체 파일로 적용 시킬려고 하면 어떻게 해야하나요?`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 5, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "javascript", //String
      },
    ],
  },
  {
    questionId: 14, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title:
      "github pages로 정적 페이지를 만들면 빈 화면이 뜨는 에러가 발생합니다", //String
    body: `안녕하세요 어제부터 계속 여러가지 방법으로 배포를 시도해보고 있습니다만... 계속해서 빈 화면이 나와서 질문드립니다.
    위 화면이 현재 깃허브 페이지 URL로 들어가면 나오는 화면입니다.
    
    처음에는 gh-pages가 문제인가 해서 1번 방법에서 2번 방법으로 바꾸어서 github pages를 생성해보았지만 동일하게 빈화면이 나왔습니다.
    
    webpack과 gh-pages를 install 해서 번들링 후 gh-pages에 업로드
    : 아래와 같이 jsx 관련 에러가 떴습니다. 에러구문에 나온대로 @barbel/plugin-syntax-jsx를 추가해봤는데 해결이 되지 않았습니다.`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/31 13:22", //String
    vote: 4, //Number
    answers: 1, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "java", //String
      },
    ],
  },
  {
    questionId: 15, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "Map() 기능이 랜더링 되는 순서에 따라 결과가 달라지는거 같습니다.", //String
    body: `운영 체제: Window

    Node.js 버전(node -v): 예)v14.16.0
    
    현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?
    
    MainProject 리팩토링 과정중입니다.
    
    어떠한 부분에서 이해가 안 되었나요?
    
    랜더링 되는 부분에서 순서에 따라
    에러가 나오고 안나오는거 같다라는 생각이 드는데
    이를 해결항 방법을 잘 모르겠습니다.
    
    제가 생각한 방법으로는 useEffect 로 랜더링 되는 순간을 정의하거나
    하면 될꺼 같은데 방법을 잘 모르겠습니다.`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/25 13:32", //String
    vote: 0, //Number
    answers: 2, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "avbc", //String
      },
      {
        tagId: 2, //Number
        tagName: "dddd", //String
      },
    ],
  },
  {
    questionId: 16, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "[타이머API] fetch -> JSON 후 왜 바로 key 조회가 안되나요 ?", //String
    body: `안녕하세요.
    타이머 API 과제 part3 (1)basicChanging에서그냥 return a 하면 분명 오브젝트로 아래처럼 뜨는데
    AssertionError: expected { Object (data) }
    a.data하면 undefined로 조회가 안돼요...
    아래 처럼 then으로 넘기면`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 1, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 17, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "프리 프로젝트 리포지토리", //String
    body: `안녕하세요 이번에 프리 프로젝트를 하는데요
    팀장님한테 리포지토리 공유를 받았는데 제가 실수로 리액트 파일을 만들어서 push를 해버렸습니다 ㅠㅠ
    그래서 공유받은 리포지토리에 들어가면 새로 만든 리액트 파일들이 나옵니다 그래서 제가 다시 삭제 후 push를 해서
    공유받은 리포지토리는 공백입니다 팀원들한테는 제가 월요일에 이야기 할건데 혹시 이게 문제가 되나요? ㅠㅠ`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 18, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "git status 파일을 전체로 어떻게 하나요? ㅠ", //String
    body: `현재 터미널에서 제출 할 파일 안에서 main dev 브랜치를 만들었고 git status를 하면 src안에 있는 파일 1개만 적용이 됩니다
    전체 파일로 적용 시킬려고 하면 어떻게 해야하나요?`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 5, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "javascript", //String
      },
    ],
  },
  {
    questionId: 19, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title:
      "github pages로 정적 페이지를 만들면 빈 화면이 뜨는 에러가 발생합니다", //String
    body: `안녕하세요 어제부터 계속 여러가지 방법으로 배포를 시도해보고 있습니다만... 계속해서 빈 화면이 나와서 질문드립니다.
    위 화면이 현재 깃허브 페이지 URL로 들어가면 나오는 화면입니다.
    
    처음에는 gh-pages가 문제인가 해서 1번 방법에서 2번 방법으로 바꾸어서 github pages를 생성해보았지만 동일하게 빈화면이 나왔습니다.
    
    webpack과 gh-pages를 install 해서 번들링 후 gh-pages에 업로드
    : 아래와 같이 jsx 관련 에러가 떴습니다. 에러구문에 나온대로 @barbel/plugin-syntax-jsx를 추가해봤는데 해결이 되지 않았습니다.`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/31 13:22", //String
    vote: 4, //Number
    answers: 1, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "java", //String
      },
    ],
  },
  {
    questionId: 20, //Number
    user: {
      userId: 0, //Number
      displayName: "Kimcoding", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "Map() 기능이 랜더링 되는 순서에 따라 결과가 달라지는거 같습니다.", //String
    body: `운영 체제: Window

    Node.js 버전(node -v): 예)v14.16.0
    
    현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?
    
    MainProject 리팩토링 과정중입니다.
    
    어떠한 부분에서 이해가 안 되었나요?
    
    랜더링 되는 부분에서 순서에 따라
    에러가 나오고 안나오는거 같다라는 생각이 드는데
    이를 해결항 방법을 잘 모르겠습니다.
    
    제가 생각한 방법으로는 useEffect 로 랜더링 되는 순간을 정의하거나
    하면 될꺼 같은데 방법을 잘 모르겠습니다.`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/25 13:32", //String
    vote: 0, //Number
    answers: 2, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
      {
        tagId: 1, //Number
        tagName: "avbc", //String
      },
      {
        tagId: 2, //Number
        tagName: "dddd", //String
      },
    ],
  },
  {
    questionId: 21, //Number
    user: {
      userId: 0, //Number
      displayName: "LeeHacker", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "[타이머API] fetch -> JSON 후 왜 바로 key 조회가 안되나요 ?", //String
    body: `안녕하세요.
    타이머 API 과제 part3 (1)basicChanging에서그냥 return a 하면 분명 오브젝트로 아래처럼 뜨는데
    AssertionError: expected { Object (data) }
    a.data하면 undefined로 조회가 안돼요...
    아래 처럼 then으로 넘기면`, //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 1, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 22, //Number
    user: {
      userId: 0, //Number
      displayName: "ABCDE", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "프리 프로젝트 리포지토리", //String
    body: `안녕하세요 이번에 프리 프로젝트를 하는데요
    팀장님한테 리포지토리 공유를 받았는데 제가 실수로 리액트 파일을 만들어서 push를 해버렸습니다 ㅠㅠ
    그래서 공유받은 리포지토리에 들어가면 새로 만든 리액트 파일들이 나옵니다 그래서 제가 다시 삭제 후 push를 해서
    공유받은 리포지토리는 공백입니다 팀원들한테는 제가 월요일에 이야기 할건데 혹시 이게 문제가 되나요? ㅠㅠ`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 0, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "test", //String
      },
    ],
  },
  {
    questionId: 23, //Number
    user: {
      userId: 0, //Number
      displayName: "HIHI", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title: "git status 파일을 전체로 어떻게 하나요? ㅠ", //String
    body: `현재 터미널에서 제출 할 파일 안에서 main dev 브랜치를 만들었고 git status를 하면 src안에 있는 파일 1개만 적용이 됩니다
    전체 파일로 적용 시킬려고 하면 어떻게 해야하나요?`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: null, //String
    vote: 0, //Number
    answers: 5, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "javascript", //String
      },
    ],
  },
  {
    questionId: 24, //Number
    user: {
      userId: 0, //Number
      displayName: "Bye", //String
      profileImage:
        "https://www.phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg", //String
    },
    title:
      "github pages로 정적 페이지를 만들면 빈 화면이 뜨는 에러가 발생합니다", //String
    body: `안녕하세요 어제부터 계속 여러가지 방법으로 배포를 시도해보고 있습니다만... 계속해서 빈 화면이 나와서 질문드립니다.
    위 화면이 현재 깃허브 페이지 URL로 들어가면 나오는 화면입니다.
    
    처음에는 gh-pages가 문제인가 해서 1번 방법에서 2번 방법으로 바꾸어서 github pages를 생성해보았지만 동일하게 빈화면이 나왔습니다.
    
    webpack과 gh-pages를 install 해서 번들링 후 gh-pages에 업로드
    : 아래와 같이 jsx 관련 에러가 떴습니다. 에러구문에 나온대로 @barbel/plugin-syntax-jsx를 추가해봤는데 해결이 되지 않았습니다.`, //String    createdAt: "Year/Month/Day/Hour/Minute", //String
    createdAt: "2022/12/23 13:22", //String
    modifiedAt: "2022/12/31 13:22", //String
    vote: 4, //Number
    answers: 1, //Number
    tags: [
      {
        tagId: 0, //Number
        tagName: "java", //String
      },
    ],
  },
];
