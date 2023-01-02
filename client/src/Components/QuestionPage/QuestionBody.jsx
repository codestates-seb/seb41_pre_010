import { Viewer } from "@toast-ui/react-editor";

export default function QuestionBody({ questionData }) {
  return (
    <div className="Main_Text_Content">
      {questionData && (
        <Viewer initialValue={questionData && questionData.body} />
      )}
    </div>
  );
}
