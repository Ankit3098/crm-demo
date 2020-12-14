import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/users/:id" component={User} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
