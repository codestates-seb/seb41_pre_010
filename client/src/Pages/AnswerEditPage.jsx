import { BlueButton } from "../Components/Button";
import "./Styles/EditPage.css";
import TextEditor from "../Components/TextEditor";
import { useEffect, useState } from "react";
import { useSession } from "../CustomHook/SessionProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AnswerEditPage = () => {
  const [answerBodyMD, setAnswerBodyMD] = useState("내용을 입력해주세요.");
  const [questionId, setQuestionId] = useState(0);
  const { session } = useSession();
  const { answerId } = useParams();
  const navigate = useNavigate();

  const answerEditGetUrl = `/api/v1/answers/${answerId}/edit`;
  const answerEditPutUrl = `/api/v1/questions/${answerId}`;

  useEffect(() => {
    async function loadAnswerContents() {
      axios
        .get(answerEditGetUrl)
        .then((res) => {
          const { body, questionId } = res.data;
          setAnswerBodyMD(body);
          setQuestionId(questionId);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadAnswerContents();
  }, [answerEditGetUrl]);

  function submitEditQuestion() {
    const body = {
      userId: session.userId,
      body: answerBodyMD,
    };

    axios
      .put(answerEditPutUrl, body)
      .then((res) => {
        console.log(res);
        navigate(`/questions/${questionId}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="EditPage_Container">
      <div className="Edit_Container">
        <div className="EditPage_Ask_Question_Container">
          <h1 className="EditPage_Ask_Title">Edit your question</h1>
        </div>
        <div className="Body_Container">
          <label className="Title">Body</label>
          <TextEditor
            setQuestionBodyHTML={() => {}}
            setQuestionBodyMD={setAnswerBodyMD}
            initData={answerBodyMD}
          />
        </div>
        <div className="Buttons_Container">
          <BlueButton height="36px" onClick={submitEditQuestion}>
            Edit your question
          </BlueButton>
        </div>
      </div>
    </div>
  );
};

export default AnswerEditPage;
