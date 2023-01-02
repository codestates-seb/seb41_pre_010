import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import axios from "axios";

function TextEditor({
  setQuestionBodyHTML,
  setQuestionBodyMD,
  initData = "내용을 입력해주세요.",
  userId,
}) {
  const editorRef = useRef();
  const url = "/api/v1/questions/image";
  const host = "http://13.125.80.84";
  useEffect(() => {
    editorRef.current.getInstance().setMarkdown(initData);
  }, [initData]);

  const onUploadImage = async (blob, callback) => {
    const img = blob;
    const base64Image = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    });

    axios
      .post(`${host}${url}`, {
        image: base64Image,
        userId,
      })
      .then((data) => {
        callback(data.data.url, "alt");
      });
    return false;
  };

  function onEditorBlur() {
    const mdData = editorRef.current.getInstance().getMarkdown();
    const htmlData = editorRef.current.getInstance().getHTML();
    setQuestionBodyMD(mdData);
    setQuestionBodyHTML(htmlData);
  }

  return (
    <Editor
      previewStyle="vertical"
      height="auto"
      initialEditType="markdown"
      language="ko-KR"
      ref={editorRef}
      onBlur={onEditorBlur}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      hooks={{
        addImageBlobHook: onUploadImage,
      }}
    />
  );
}

export default TextEditor;
