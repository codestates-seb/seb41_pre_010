import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs"; // prism 테마 추가

function TextEditor({ setQuestionBodyHTML, setQuestionBodyMD }) {
  const editorRef = useRef();
  const initData = "abc";

  function onEditorBlur() {
    const mdData = editorRef.current.getInstance().getMarkdown();
    const htmlData = editorRef.current.getInstance().getHTML();
    setQuestionBodyMD(mdData);
    setQuestionBodyHTML(htmlData);
  }

  return (
    <Editor
      initialValue={initData}
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
