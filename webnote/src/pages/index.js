import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import MyNote from "./MyNote";
import Layout from "../components/Layout";
const Pages = () => {
  // react 16 的写法
  //   return (
  //     <Router>
  //         <Route exact path='/' component={Home}/>
  //         <Route  path='/mynotes' component={MyNote}/>
  //         <Route  path='/favorites' component={Favorites}/>
  //     </Router>
  //   )

  // react 19 的写法
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mynotes" element={<MyNote />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
