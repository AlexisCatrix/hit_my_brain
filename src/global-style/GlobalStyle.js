import styled from "styled-components";

export const GlobalStyle = styled.div`
  font-family: "Peralta", cursive;
  background: linear-gradient(360deg, #da4040 55%, #ff823b);
`;

export const GlobalButton = styled.button`
  width: 15vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #cf582c;
  font-size: 1.25em;
  text-shadow: 2px 2px 4px black;
  box-shadow: 4px 2px 5px black;
  margin-right: 1.5em;

  padding: 0.25em;
  &.takingTest {
    margin-top: 4em;
  }
`;
