import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  MainContent,
  FirstTitle,
  SiteName,
  LogoAndSiteName,
  Logo,
  Cartridge,
  Title,
  Paragraph,
  Button,
} from "../../components/homepage/HomepageStyled";
import logo from "../../assets/pictures/logo_hitMyBrain.png";

export default function Homepage() {
  return (
    <MainContent>
      <Header>
        <Link to="/SignIn">
          <Button id="signIn">Sign in</Button>
        </Link>
      </Header>
      <FirstTitle>Welcome to </FirstTitle>
      <LogoAndSiteName>
        <SiteName>Hit my brain</SiteName>
        <Logo src={logo} />
      </LogoAndSiteName>
      <Cartridge>
        <Title>What is “Hit my brain" ?</Title>
        <Paragraph>
          This is a quiz game, many categories are available (Cinema, Music, Art
          ...), you can even check your score with your friends. Pretty cool no
          ;) ? So sign up and have fun!
        </Paragraph>
      </Cartridge>
      <Link to="/SignUp">
        <Button id="submit">Sign up</Button>
      </Link>
    </MainContent>
  );
}
