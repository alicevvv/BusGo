// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import './index.css';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import BusRoute from './page/BusRoute';
// import Announce from './page/Announce'
import { StoreProvider } from "./store/index.js";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/busRoute" component={BusRoute}/>
          </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
