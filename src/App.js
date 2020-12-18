import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";

// when user need this component then it import...
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
