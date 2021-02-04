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

export default function SignIn({username, setUsername}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "" || email === "") {
      notifyWarnBeforeSubmit();
    }
  };

  return (
    <MainContent id="signUp">
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
          <Span>We are almost there !</Span>
          <Label id="firstLabel">Nickname </Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleChangeName(e)}
          />
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
        </LabelAndInput>
        <Link to={`/user-profile/${username}`}>
          <Input id="submit" type="submit" value="GO QUIZ !"></Input>
        </Link>
      </Form>
      <ToastContainer />
    </MainContent>
  );
}
