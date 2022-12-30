import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs"; // prism 테마 추가

function TextEditor({ setQuestionBodyHTML }) {
  const editorRef = useRef();
  const dataa = "string";

  function onEditorBlur() {
    const htmlData = editorRef.current.getInstance().getHTML();
    setQuestionBodyHTML(htmlData);
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
      onBlur={onEditorBlur}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

export default TextEditor;
