import { Switch, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Hello from "./components/Hello";
import Home from "./features/home/Home";
import Test from "./components/Test";
import { Footer } from "./components";

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />

      <Switch>
        <Route path="/about" component={Home}></Route>
        <Route path="/users" component={Test}></Route>
        <Route path="/" component={Hello}></Route>
      </Switch>

      <Footer />
    </div>
  );
}
