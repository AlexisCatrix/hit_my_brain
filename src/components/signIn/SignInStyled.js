import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

export const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled(ArrowBack)`
  height: inherit;
  width: auto;
`;

export const Form = styled.form`
  width: 30vw;
  height: 50vh;
  background: #e2764e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 3em;
  box-shadow: 4px 4px 12px #5d5147;
`;

export const LabelAndInput = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto auto;
`;

export const Label = styled.label`
  font-size: 1.25em;
  margin: 1.5em 0;
`;

export const Input = styled.input`
width: 18vw;
`;