import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs"; // prism 테마 추가

function TextEditor({ setQuestionBodyHTML, setQuestionBodyString }) {
  const editorRef = useRef();
  const dataa = "string";

  function changeQuestionBody() {
    const htmlData = editorRef.current.getInstance().getHTML();
    const stringData = htmlData.replace(/<[^>]+>/g, " ");
    setQuestionBodyHTML(htmlData);
    setQuestionBodyString(stringData);
  }

  return (
    <Editor
      initialValue={dataa}
      previewStyle="vertical"
      height="500px"
      initialEditType="markdown"
      useCommandShortcut={false}
      language="ko-KR"
      ref={editorRef}
      onChange={changeQuestionBody}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

export default TextEditor;
