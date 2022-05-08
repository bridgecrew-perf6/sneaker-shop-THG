import { Switch, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Hello from './components/Hello';
import Home from './features/home/Home';
import MenShoes from './features/menShoes/MenShoes';
import SneakerDetail from './features/sneakerDetail/SneakerDetail';
import { Footer } from './components';

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />

      <Switch>
        <Route path="/about" component={Home}></Route>
        <Route path="/sneaker-detail" component={SneakerDetail}></Route>
        <Route path="/men-shoes" component={MenShoes}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

