import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import AuthContext from "./context/Auth";
import "antd/dist/antd.css";
import { message } from "antd";
import "./main.scss";
import "./App.css";

// Common Layout

import Admin from "./pages/Admin";

import Adminchat from "./pages/Adminchat";

import Admincustomer from "./pages/Admincustomer";
import Admincustomerview from "./pages/Admincustomerview";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";

import Notfound from "./pages/Notfound";
import Blog from "./pages/Blog";
import BlogSidebar from "./pages/BlogSidebar";
import BlogSingle from "./pages/BlogSingle";

import Contacttwo from "./pages/Contacttwo";

import Price from "./pages/Price";

import Checkout from "./pages/Checkout";
import GradeSelection from "./pages/GradeSelection";

import Popupchat from "./pages/Popupchat";

import Userprofile from "./pages/Userprofile";

import MainEnglish from "./pages/MainEnglish";
import MainMaths from "./pages/MainMaths";
import MainUrdu from "./pages/MainUrdu";
import Games from "./pages/Games";
import Poems from "./pages/Poems";
import MyKids from "./pages/MyKids";

import Defaultsettings from "./pages/Defaultsettings";
import Defaultsearch from "./pages/Defaultsearch";

import Defaultanalytics from "./pages/Defaultanalytics";

import Accountinfo from "./pages/Accountinfo";
import Contactinfo from "./pages/Contactinfo";
import Social from "./pages/Social";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Chat from "./pages/Chat";

import Hometwo from "./pages/Hometwo";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AddKid from "./pages/AddKid";
import MathsContent from "./pages/MathsContent";
import EnglishContent from "./pages/Englishcontent";
import UrduContent from "./pages/UrduContent";

import ModelA from "./pages/ModelA";
import ModelMaths from "./pages/ModelMaths";
import VideoPlayer from "./pages/VideoPlayer";
import SketchBoard from "./pages/SketchBoard";
// import CommingSoon from "./pages/comingsoon";

import Cookies from "js-cookie";
import ResetPassword from "./pages/ResetPassword";
import { PlayPoems } from "./pages/PlayPoems";
import Subscription from "./pages/Subscription";
import AdminChild from "./pages/Adminchilds";
import ChildReport from "./pages/Childreport";
import AdminLogin from "./pages/Adminlogin";
import EnglishGame from "./pages/EnglishGame";

export default function App() {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});

  const [currentChild, setCurrentChild] = useState();

  const [childCount, setChildCount] = useState();
  let history = useHistory();
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        currentChild,
        setCurrentChild,
        childCount,
        setChildCount,
        admin,
        setAdmin,
      }}>
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Hometwo}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/notfound`}
            component={Notfound}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/modelmath`}
            component={ModelMaths}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/modelA`}
            component={ModelA}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            component={Admin}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-chat`}
            component={Adminchat}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customer`}
            component={Admincustomer}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-child`}
            component={AdminChild}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customerview`}
            component={Admincustomerview}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-login`}
            component={AdminLogin}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={!user._id ? Login : Hometwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/register`}
            component={!user._id ? Register : Hometwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/forgot`}
            component={Forgot}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/reset-password`}
            component={ResetPassword}
          />

          {user._id !== undefined || Cookies.get("token") !== undefined ? (
            <>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/gradeselect`}
                component={GradeSelection}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/blog`}
                component={Blog}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/blog-sidebar`}
                component={BlogSidebar}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/blog-single`}
                component={BlogSingle}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/contact-2`}
                component={Contacttwo}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/price`}
                component={Price}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/checkout`}
                component={Checkout}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/addkid`}
                component={AddKid}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/maths`}
                component={MainMaths}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/english`}
                component={MainEnglish}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/urdu`}
                component={MainUrdu}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/games`}
                component={Games}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/enggame`}
                component={EnglishGame}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/poems`}
                component={Poems}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/play-poem`}
                component={PlayPoems}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/mykids`}
                component={MyKids}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/child-report`}
                component={ChildReport}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/mathscourse`}
                component={MathsContent}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/engcourse`}
                component={EnglishContent}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/urducourse`}
                component={UrduContent}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/default-settings`}
                component={Defaultsettings}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/default-search`}
                component={Defaultsearch}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/default-analytics`}
                component={Defaultanalytics}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/subscription`}
                component={Subscription}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/popup-chat`}
                component={Popupchat}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/account-information`}
                component={Accountinfo}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/contact-information`}
                component={Contactinfo}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/social`}
                component={Social}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/payment`}
                component={Payment}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/password`}
                component={Password}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/message`}
                component={Chat}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/user-profile`}
                component={Userprofile}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/home-2`}
                component={Hometwo}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/video-player`}
                component={VideoPlayer}
              />

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/sketch-board`}
                component={SketchBoard}
              />
            </>
          ) : (
            <>
              <Login />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
