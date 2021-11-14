import 'antd/dist/antd.css';
import './App.css';
import './index.css';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from './page/Home'
import Login from './page/Login'
import BusRoute from './page/BusRoute'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={BusRoute}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
