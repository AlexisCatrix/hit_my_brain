import { useState } from "react";
import Homepage from "./components/homepage/Homepage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import UserProfile from "./components/userProfile/UserProfile";
import QuizzMovie from "./components/categories/QuizzMovies";
import QuizzMusic from "./components/categories/QuizzMusic";
import QuizzArt from "./components/categories/QuizzArt";
import QuizzGeneralKnowledge from "./components/categories/QuizzGeneralKnowledge";
import QuizzIT from "./components/categories/QuizzIT";
import QuizzScience from "./components/categories/QuizzScience";


import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Reset />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/SignIn">
          <SignIn username={username} setUsername={setUsername} />
        </Route>
        <Route path="/SignUp">
          <SignUp username={username} setUsername={setUsername} />
        </Route>
        <Route path="/user-profile/:username">
          <UserProfile username={username} />
        </Route>
        <Route path="/quizz/movie" component={QuizzMovie} />
        <Route path="/quizz/music" component={QuizzMusic} />
        <Route path="/quizz/art" component={QuizzArt} />
        <Route path="/quizz/it" component={QuizzIT} />
        <Route path="/quizz/general-knowledge" component={QuizzGeneralKnowledge} />
        <Route path="/quizz/science" component={QuizzScience} />
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
