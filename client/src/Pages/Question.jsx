import React from "react";
import styled from "styled-components";
import "./Styles/Question.css";

const StyledSpan = styled.span`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;

export default function Question() {
  return (
    <>
      <header className="Header" />
      <main>
        <div className="Question_Container">
          <div className="Question_Content_Container">
            <div className="Title_Container">
              <div className="Title_Contents">
                <h1>
                  Web Scraper : Using Find All (Beautiful Soap, Python) and show
                  result in Streamlit
                </h1>
              </div>
              <div className="Ask_Question_Button_Container">
                <button className="Ask_Question_Button">Ask Question</button>
                <div className="Wright_Data_Info">
                  <StyledSpan fontsize={"14px"}>
                    작성: 2022/12/22/14:21
                  </StyledSpan>
                  <br></br>
                  <StyledSpan fontsize={"14px"}>
                    수정: 2022/12/23/14:52
                  </StyledSpan>
                  <div className="Modify_Icon">✍🏻</div>
                </div>
              </div>
            </div>
            <div className="Main_Text_Container">
              <aside className="Main_Text_Aside">아이콘자리</aside>
              <div className="Main_Text_Content">
                <span>
                  React Router v5.1.0 with hooks React Router v4 With v4 of
                  React Router, there are three approaches that you can take to
                  programmatic routing within components. Use the withRouter
                  higher-order component. Use composition and render a Use the
                  context. React Router is mostly a wrapper around the history
                  library. history handles interaction with the browser's
                  window.history for you with its browser and hash histories. It
                  also provides a memory history which is useful for
                  environments that don't have a global history. This is
                  particularly useful in mobile app development (react-native)
                  and unit testing with Node. A history instance has two methods
                  for navigating: push and replace. If you think of the history
                  as an array of visited locations, push will add a new location
                  to the array and replace will replace the current location in
                  the array with the new one. Typically you will want to use the
                  push method when you are navigating. In earlier versions of
                  React Router, you had to create your own history instance, but
                  in v4 the and components will create a browser, hash, and
                  memory instances for you. React Router makes the properties
                  and methods of the history instance associated with your
                  router available through the context, under the router object.
                </span>
              </div>
            </div>
                <div className="Tag_Section">ddddd</div>
          </div>
        </div>
      </main>
      <footer className="Footer" />
    </>
  );
}
