import styled from "styled-components";
import { Link } from "react-router-dom";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { Cross } from "@styled-icons/entypo/Cross";

export const ActionButton = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountQuestions = styled.span`
  font-size: 1.5em;
  color: white;
  text-shadow: 2px 2px 2px black;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
export const LevelContainer = styled.div`
  display: flex;
`;

export const Level = styled.button`
  width: 10vw;
  height: 6.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  text-shadow: 2px 2px 4px black;
  box-shadow: 4px 2px 5px black;
  border-radius: 15px;
  margin: 1.5em;
  &#beginner {
    background: #28d283;
  }
  &#confirmed {
    background: #d29428;
  }
  &#expert {
    background: #d22828;
  }
  &:hover {
    box-shadow: 0px 0px 24px white;
  }
`;

export const LevelInfo = styled.div`
  width: auto;
  height: 6.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  text-shadow: 2px 2px 4px black;
  box-shadow: 4px 2px 5px black;
  border-radius: 15px;
  margin: 5vh 0;
  padding: 0 2vw ;
  &#beginner {
    background: #28d283;
  }
  &#confirmed {
    background: #d29428;
  }
  &#expert {
    background: #d22828;
  }
`;

export const LevelTittle = styled.h1`
  font-size: 2em;
  color: white;
  text-shadow: 4px 4px 2px black;
  display: flex;
  justify-content: center;
  margin: 5vh;
`;

export const Quizz = styled.div`
  width: 80vw;
  height: 70vh;
`;

export const TestContainer = styled.div`
  width: 70vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 8px black;
  background: linear-gradient(#fb643b 35%, #2e9e6a);
  border: 1px solid white;
`;

export const Proposal = styled.div`
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 1.25em;
  text-shadow: 1px 1px 0px black;
  margin: 0.5em 1em;
  border: 2px solid white;
  padding: 1em 2.5em;
  background: transparent;
  &:hover {
    box-shadow: 0 0 8px 4px white;
  }
`;

export const ProposalsContainer = styled.div`
  height: auto;
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const LogoCheck = styled(Check)`
  width: 2vw;
  height: auto;
  color: green;
`;

export const LogoWrong = styled(Cross)`
  width: 2vw;
  height: auto;
  color: red;
`;

export const Answer = styled.span`
  font-style: italic;
  color: white;
  text-shadow: 4px 4px 2px green;
`;

export const Result = styled.div`
  width: 80vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.h1`
  font-size: 2em;
  color: white;
  text-shadow: 4px 4px 2px black;
  margin: 5vh;
  display: flex;
`;

export const Point = styled.h2`
  color: #da4040;
  margin: 0 1vw;
`;

export const Question = styled.p`
  font-style: italic;
  color: white;
  text-shadow: 4px 4px 2px black;
  &#takingTest {
    height: 10vh;
    font-size: 1.25em;
    font-style: initial;
    text-shadow: 2px 2px 3px black;
    margin-top: 2.5em;
    margin-left: 1.5em;
  }
`;

export const QuestionAndAnswerContent = styled.div`
  width: auto;
  height: min-content;
`;

export const QuestionAndAnswer = styled.div`
  display: flex;
  margin: 1.5vh;
`;

export const QuestionNumber = styled.span`
  font-size: 1.25em;
  color: white;
  text-shadow: 4px 4px 2px black;
  margin: 0 2vw;
`;
