import React from "react";
import { TagsInput } from "react-tag-input-component";
import "./Styles/style.css";

export const TagBar = ({ selected, setSelected }) => {
  function beforeAddValidate(text) {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    return !korean.test(text);
  }

  return (
    <div className="Tag_Components">
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="tags"
        placeHolder="태그를 입력하세요"
        beforeAddValidate={beforeAddValidate}
      />
    </div>
  );
};
