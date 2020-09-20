import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NavComponent } from "./pages/nav/nav-component";
import { ContactComponent } from "./pages/contact/contact-component";
import { EducationComponent } from "./pages/education/education-component";
import { HomeComponent } from "./pages/home/home-component";
import { ProjectsComponent } from "./pages/projects/projects-component";
import { PublicationComponent } from "./pages/publication/publication-component";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="my-body-container">
        <NavComponent/>
        <Switch>
          <Route exact path="/"><HomeComponent/></Route>
          <Route path="/projects"><ProjectsComponent/></Route>
          <Route path="/education"><EducationComponent/></Route>
          <Route path="/publications"><PublicationComponent/></Route>
          <Route path="/contact"><ContactComponent/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
