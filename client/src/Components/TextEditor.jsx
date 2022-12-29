import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";

function TextEditor() {
  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="500px"
      initialEditType="markdown"
      useCommandShortcut={false}
      language="ko-KR"
    />
  );
}

export default TextEditor;
