import { OrangeButton, WhiteButton } from "../Components/Button";
import range from "./range";

const calcPagination = (totalPages, curPage, changeCurPage) => {
  const DOTS = "...";
  const SIBLING = 2;

  const shouldShowLeftDots = curPage - SIBLING > 2;
  const shouldShowRightDots = curPage + SIBLING < totalPages - 1;

  if (totalPages > 1 + SIBLING * 2) {
    const siblingPages = range(curPage - 2, curPage + 2);
    return (
      <>
        {curPage > SIBLING + 1 ? (
          <WhiteButton key={1} onClick={changeCurPage}>
            1
          </WhiteButton>
        ) : (
          ""
        )}
        <span>{shouldShowLeftDots ? DOTS : ""}</span>
        {siblingPages.map((el) => {
          if (el > 0 && el <= totalPages && el !== curPage) {
            return (
              <WhiteButton key={el} onClick={changeCurPage}>
                {el}
              </WhiteButton>
            );
          } else if (el > 0 && el <= totalPages && el === curPage) {
            return <OrangeButton key={el}>{el}</OrangeButton>;
          }
        })}
        <span>{shouldShowRightDots ? DOTS : ""}</span>
        {curPage < totalPages - SIBLING ? (
          <WhiteButton key={totalPages} onClick={changeCurPage}>
            {totalPages}
          </WhiteButton>
        ) : (
          ""
        )}
      </>
    );
  }

  return range(1, totalPages).map((el) => {
    return el === curPage ? (
      <OrangeButton key={el}>{el}</OrangeButton>
    ) : (
      <WhiteButton key={el} onClick={changeCurPage}>
        {el}
      </WhiteButton>
    );
  });
};

export default calcPagination;
