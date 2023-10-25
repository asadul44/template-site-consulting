import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Home from "./Layout/Home";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import OurBlog from "./Layout/OurBlog";

const MyRoute = () => {
  return (
    <div>
      <MyHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={OurBlog} />
      </Switch>
      <MyFooter />
    </div>
  );
};

export default MyRoute;
