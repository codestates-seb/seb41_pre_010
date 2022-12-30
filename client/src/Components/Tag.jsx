import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./Styles/style.css";

export const TagBar = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="Tag_Components">
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="태그를 입력하세요"
      />
    </div>
  );
};