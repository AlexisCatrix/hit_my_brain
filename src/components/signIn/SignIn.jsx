import React from "react";
import { Link } from "react-router-dom";
import {
  MainContent,
  BackIcon,
  Form,
  Label,
  Input,
  LabelAndInput,
} from "../../components/signIn/SignInStyled";
import {
  Header,
  Button,
  SiteName,
  LogoAndSiteName,
  Logo,
} from "../../components/homepage/HomepageStyled";
import logo from "../../assets/pictures/logo_hitMyBrain.png";

export default function SignIn() {
  return (
    <MainContent>
      <Header>
        <Link to="/">
          <Button id="signIn">
            <BackIcon></BackIcon>
          </Button>
        </Link>
      </Header>
      <LogoAndSiteName>
        <SiteName>Hit my brain</SiteName>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoAndSiteName>
      <Form>
        <LabelAndInput>
          <Label>Nickname / e-mail</Label>
          <Input type="text" name="username" />
          <Label>Password</Label>
          <Input type="text" name="password" />
        </LabelAndInput>
      </Form>
      <Link to="/:username">
        <Button id="submit">GO QUIZ !</Button>
      </Link>
    </MainContent>
  );
}
