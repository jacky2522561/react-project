import React, { Component, Fragment } from "react";
import Header from "./common/header/index";
import { BrowserRouter,Route,Routes } from "react-router-dom";
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
          <BrowserRouter>
            <Routes>
              <Route path='/' Component={Home}></Route>
              <Route path='/detail' Component={Detail}></Route>
            </Routes>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}
export default App;
