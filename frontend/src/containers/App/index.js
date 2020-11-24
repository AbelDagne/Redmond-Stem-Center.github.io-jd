import React from "react";

import { Switch, Route, HashRouter } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">      
      <HashRouter>
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />        
        <Route path="/category/:id" component={Category} exact />
      </Switch>
     </HashRouter> 
    </div>
  );
}

export default App;
