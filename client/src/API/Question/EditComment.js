import axios from "axios";
const url = "http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/"
export const editCommentRequest = (
  commentId,
  questionId,
  answerId,
  userId,
  body
) => {
  const request = {
    questionId: questionId,
    answerId: answerId,
    userId: userId,
    body: body,
  };

  axios.put(`api/v1/comments/${commentId}`,request).then((res)=> {
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
};
