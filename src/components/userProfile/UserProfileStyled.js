import styled from "styled-components";

export const Header = styled.div`
  width: inherit;
  height: 20vh;
  background: linear-gradient(
    rgba(129, 216, 162, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  display: flex;
  align-items: center;
`;

export const WelcomeMessage = styled.h1`
  display: flex;
  align-items: center;
  width: auto;
  height: 5vh;
  font-size: 2em;
  color: white;
  text-shadow: 4px 4px 2px black;
  margin-right: auto;
  padding-bottom: 2vh;
`;

export const UserName = styled.h1`
  font-size: 1.5em;
  color: #da4040;
  text-shadow: 4px 4px 2px black;
  margin: 0 0.3em;
`;

export const SignOut = styled.button`
  width: 10vw;
  height: 6.5vh;
  background: #cf582c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  text-shadow: 4px 4px 5px black;
  box-shadow: 4px 4px 5px black;
  border-radius: 15px;
  margin: 1.5em;
`;

export const ContentRightHeader = styled.div`
  width: 60vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PlayCategories = styled.div`
  width: 40vw;
  height: 55vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

export const Category = styled.div`
  width: 10vw;
  height: 10vw;
  border: 1px solid black;
  color: white;
  font-size: 1.25em;
  text-shadow: 4px 4px 2px black;
  margin: 0.5em;
  padding: 0.5em;
  &#movie {
    background: linear-gradient(#4f94a8 55%, rgba(255, 255, 255, 0.6));
  }
  &#music {
    background: linear-gradient(#4eca50 55%, rgba(255, 255, 255, 0.5));
  }
  &#art {
    background: linear-gradient(#e75421 55%, rgba(255, 255, 255, 0.5));
  }
  &#it {
    background: linear-gradient(#9a4ac4 55%, rgba(255, 255, 255, 0.5));
  }
  &#gk {
    background: linear-gradient(#c44a85 55%, rgba(255, 255, 255, 0.5));
  }
  &#science {
    background: linear-gradient(#68695a 55%, rgba(255, 255, 255, 0.5));
  }
  &:hover {
    box-shadow: 0px 0px 24px white;
  }
`;
