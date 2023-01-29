import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";

function App() {
  return (
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">students</Link>
          </li>
          <li>
            {/* <Link to="/dashboard">Dashboard</Link> */}
          </li>
        </ul>
        <Switch>
          <Route path="/students">
            <CreateStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
