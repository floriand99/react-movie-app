import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Movie from "./views/Movie";
import "./App.css";
// 90daeb5824666e1c03ec2d1015aa985a
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:slug/:id" exact>
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
