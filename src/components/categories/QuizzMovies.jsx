import React, { useState, useEffect } from "react";
import { GlobalButton } from "../../global-style/GlobalStyle";
import { MainContent } from "../homepage/HomepageStyled";
import {
  ActionButton,
  CountQuestions,
  Proposal,
  ProposalsContainer,
  Header,
  LevelInfo,
  LinkStyled,
  LogoCheck,
  LogoWrong,
  Answer,
  Result,
  Score,
  Point,
  TestContainer,
  Question,
  QuestionAndAnswerContent,
  QuestionAndAnswer,
  QuestionNumber,
} from "./QuizzStyled";

export default function QuizzMovies({ username, level, setLevel }) {
  const dataQuizzId = level.dataLevel[0].id;
  const dataQuizzLength = level.dataLevel.length;
  const totalQuestions = dataQuizzLength + dataQuizzId;

  let [countQuestion, setCountQuestion] = useState(dataQuizzId);
  let [countGoodAnswer, setCountGoodAnswer] = useState(0);
  let [index, setIndex] = useState(1);
  let [course, setCourse] = useState([]);
  const [end, setEnd] = useState(false);
  const [proposal, setProposal] = useState(undefined);

  let dataQuizz = level.dataLevel.filter((quizz) => quizz.id === countQuestion);

  const increment = () => {
    if (countQuestion < totalQuestions - 1) {
      setCountQuestion(countQuestion + 1);
    } else {
      setEnd(true);
    }
  };

  const isValidateResponse = () => {
    dataQuizz.map((quizz) => {
      if (proposal === undefined) {
        return undefined;
      } else if (proposal === quizz.réponse) {
        setCourse([
          ...course,
          {
            question: { index: index, question: quizz.question },
            proposal: proposal,
            solution: quizz.réponse,
            result: "Good",
          },
        ]);
        setIndex(index + 1);
        setCountGoodAnswer(countGoodAnswer + 1);
        increment();
      } else if (proposal !== quizz.réponse) {
        setCourse([
          ...course,
          {
            question: { index: index, question: quizz.question },
            proposal: proposal,
            solution: quizz.réponse,
            result: "Bad",
          },
        ]);
        setIndex(index + 1);
        increment();
      }
      return null;
    });
  };

  useEffect(() => {
    isValidateResponse();
  }, [proposal]);

  return (
    <MainContent>
      {end ? (
        <Result>
          <Score>
            Your score <Point>{countGoodAnswer}</Point> / {dataQuizzLength}
          </Score>
          <QuestionAndAnswerContent>
            {course.map((quizz) => (
              <QuestionAndAnswer key={quizz.id}>
                <QuestionNumber>{quizz.question.index} .</QuestionNumber>
                <div>
                  <Question>{quizz.question.question}</Question>:{" "}
                  {quizz.proposal}
                  {quizz.result === "Good" ? <LogoCheck /> : <LogoWrong />}
                  {quizz.result === "Bad" ? (
                    <Answer id="bad">{quizz.solution}</Answer>
                  ) : (
                    ""
                  )}
                </div>
              </QuestionAndAnswer>
            ))}
          </QuestionAndAnswerContent>
          <div>
            <LinkStyled to={`/user-profile/${username}`}>
              <GlobalButton>Return to my space</GlobalButton>
            </LinkStyled>
          </div>
        </Result>
      ) : (
        <div>
          <Header>
            <LevelInfo
              id={
                level.type === "beginner"
                  ? "beginner"
                  : level.type === "confirmed"
                  ? "confirmed"
                  : "expert"
              }
            >
              {level.type}
            </LevelInfo>
            <CountQuestions>
              {index}/{dataQuizzLength}
            </CountQuestions>
          </Header>
          {dataQuizz.map((quizz) => (
            <TestContainer key={quizz.id}>
              <Question id="takingTest">{quizz.question}</Question>
              <ProposalsContainer>
                {quizz.propositions.map((proposal) => (
                  <Proposal
                    key={proposal}
                    onClick={() => {
                      setProposal(proposal);
                    }}
                  >
                    {proposal}
                  </Proposal>
                ))}
              </ProposalsContainer>
            </TestContainer>
          ))}
          <ActionButton>
            <GlobalButton
              className="takingTest"
              onClick={() => {
                increment();
              }}
            >
              I skip this question
            </GlobalButton>
            <LinkStyled to={`/user-profile/${username}`}>
              <GlobalButton className="takingTest">
                Return to my space
              </GlobalButton>
            </LinkStyled>
          </ActionButton>
        </div>
      )}
    </MainContent>
  );
}
