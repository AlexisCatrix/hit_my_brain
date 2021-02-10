import React from "react";
import { MainContent } from "../homepage/HomepageStyled";
import { LinkStyled, Level, LevelContainer, LevelTittle } from "./QuizzStyled";
import dataQuizzMovie from "../../assets/data/movies/dataQuizzMovie.json";

export default function LevelCategory({ setLevel }) {
  const beginnerLevel = dataQuizzMovie.quizz.fr.débutant.map(
    (beginnerLevel) => beginnerLevel
  );
  const confirmedLevel = dataQuizzMovie.quizz.fr.confirmé.map(
    (confirmedLevel) => confirmedLevel
  );
  const expertLevel = dataQuizzMovie.quizz.fr.expert.map(
    (expertLevel) => expertLevel
  );

  return (
    <MainContent>
      <div>
        <LevelTittle>Choose your level</LevelTittle>
        <LevelContainer>
          <LinkStyled to="/quizz/movie/beginner">
            <Level
              id="beginner"
              onClick={() => {
                setLevel({
                  type: "beginner",
                  dataLevel: Object.values(beginnerLevel),
                });
              }}
            >
              Beginner
            </Level>
          </LinkStyled>
          <LinkStyled to="/quizz/movie/confirmed">
            <Level
              id="confirmed"
              onClick={() => {
                setLevel({
                  type: "confirmed",
                  dataLevel: Object.values(confirmedLevel),
                });
              }}
            >
              Confirmed
            </Level>
          </LinkStyled>
          <LinkStyled to="/quizz/movie/expert">
            <Level
              id="expert"
              onClick={() => {
                setLevel({
                  type: "expert",
                  dataLevel: Object.values(expertLevel),
                });
              }}
            >
              Expert
            </Level>
          </LinkStyled>
        </LevelContainer>
      </div>
    </MainContent>
  );
}
