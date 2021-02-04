import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

export const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &#signUp {
    background: linear-gradient(360deg, #92a37d 55%, #ff823b);
  }
`;

export const BackIcon = styled(ArrowBack)`
  height: inherit;
  width: auto;
`;

export const Form = styled.form`
  width: 30vw;
  height: 45vh;
  background: #e2764e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 3em;
  box-shadow: 4px 4px 12px #5d5147;
  &#signUp {
    height: 50vh;
  }
`;

export const LabelAndInput = styled.div`
  width: 20vw;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto auto;
`;

export const Label = styled.label`
  font-size: 1.25em;
  margin: 1em 0;
  &#firstLabel {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  width: 18vw;
  &#submit {
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
  }
`;
