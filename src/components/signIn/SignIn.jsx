import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyWarnBeforeSubmit } from "../../assets/notifications/Notification.js";
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
  Span,
} from "../../components/homepage/HomepageStyled";
import logo from "../../assets/pictures/logo_hitMyBrain.png";

export default function SignUp({ username, setUsername }) {
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      notifyWarnBeforeSubmit();
    }
  };
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
      <Form
        id="signUp"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <LabelAndInput>
          <Span>Nice to see you again ! Ready to warm up your brain ?</Span>
          <Label id="firstLabel">Nickname </Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeName}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </LabelAndInput>
      </Form>
      <Link to={`/user-profile/${username}`}>
        <Button id="submit">GO QUIZ !</Button>
      </Link>
      <ToastContainer />
    </MainContent>
  );
}
