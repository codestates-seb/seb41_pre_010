import axios from "axios";

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
