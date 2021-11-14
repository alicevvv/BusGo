// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import './index.css';
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";
import Home from './page/Home'
// import Announce from './page/Announce'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
