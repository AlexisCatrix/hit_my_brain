import Homepage from "./components/homepage/Homepage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Reset />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Homepage />
      </Switch>
    </div>
  );
}

export default App;
