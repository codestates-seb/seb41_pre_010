
export default function QuestionTag({filterData,TagButton}) {

  return(
    <>
    {filterData &&
      filterData.map((el) => {
        return el.tags.map((tags, index) => {
          return (
            <div key={index} className="Tags_Element">
              <TagButton fontSize={"12px"}>{tags.tagName}</TagButton>
            </div>
          );
        });
      })}
    </>
  )
}