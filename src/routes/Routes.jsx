import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Ar from "../pages/Ar";
import SingleAr from "../pages/SingleAr";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/loginuser" component={Login}/>
      <Route path="/signupuser" component={Signup}/>
      <Route path="/ar" component={Ar}/>
      <Route path="/singlear" component={SingleAr}/>
    </Switch> 
  );
};

export default AppRoutes;
