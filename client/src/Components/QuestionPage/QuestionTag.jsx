export default function QuestionTag({ questionData, TagButton }) {
  return (
    <>
      {questionData &&
        questionData.tags.map((el) => {
          <div key={el} className="Tags_Element">
            <TagButton fontSize={"12px"}>{el.tagName}</TagButton>
          </div>;
        })}
    </>
  );
}
