import React from "react";
import { Link } from "react-router-dom";
import { MainContent } from "../../components/signIn/SignInStyled";
import {
  LogoAndSiteName,
  SiteName,
  Logo,
} from "../../components/homepage/HomepageStyled";
import {
  Header,
  WelcomeMessage,
  UserName,
  SignOut,
  ContentRightHeader,
  PlayCategories,
  Category,
} from "./UserProfileStyled";
import logo from "../../assets/pictures/logo_hitMyBrain.png";

export default function UserProfile({ username }) {


  return (
    <MainContent>
      <Header>
        <LogoAndSiteName>
          <SiteName>Hit my brain</SiteName>
          <Logo src={logo} />
        </LogoAndSiteName>
        <ContentRightHeader>
          <Link to="/">
            <SignOut>Sign out</SignOut>
          </Link>
          <WelcomeMessage>
            Nice to meet you again <UserName>{username} </UserName>!
          </WelcomeMessage>
        </ContentRightHeader>
      </Header>
      <PlayCategories>
        <Link to="/quizz/level">
          <Category id="movie">Movie</Category>
        </Link>
        <Link to="/quizz/music">
          <Category id="music">Music</Category>
        </Link>
        <Link to="/quizz/art">
          <Category id="art">Art</Category>
        </Link>
        <Link to="/quizz/it">
          <Category id="it">IT</Category>.
        </Link>
        <Link to="/quizz/general-knowledge">
          <Category id="gk">General knowledge</Category>
        </Link>
        <Link to="/quizz/science">
          <Category id="science">Science</Category>
        </Link>
      </PlayCategories>
    </MainContent>
  );
}
