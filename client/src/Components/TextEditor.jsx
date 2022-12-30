import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";

function TextEditor({
  setQuestionBodyHTML,
  setQuestionBodyMD,
  initData = null,
}) {
  const editorRef = useRef();

  function onEditorBlur() {
    const mdData = editorRef.current.getInstance().getMarkdown();
    const htmlData = editorRef.current.getInstance().getHTML();
    setQuestionBodyMD(mdData);
    setQuestionBodyHTML(htmlData);
  }

  return (
    <Editor
      initialValue={initData || "내용을 입력해주세요."}
      previewStyle="vertical"
      height="500px"
      initialEditType="markdown"
      language="ko-KR"
      ref={editorRef}
      onBlur={onEditorBlur}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

export default TextEditor;
