import React, { Component, Fragment } from "react";
import Header from "./common/header/index";
import { HashRouter,Route,Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/index";
import Home from './pages/home';
import Detail from "./pages/detail";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <HashRouter>
            <Routes>
              <Route path='/' Component={Home}></Route>
              <Route path='/detail' Component={Detail}></Route>
            </Routes>
          </HashRouter>
        </Fragment>
      </Provider>
    )
  }
}
export default App;
