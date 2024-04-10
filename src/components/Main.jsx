import React, {useContext, useState} from 'react';
import {navItems} from "../utils/constants.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Error from "./Error.jsx";
import {Route, Routes} from "react-router-dom";

const Main = () => {


    return (
        <Routes>
            {['/',navItems[0].route].map(p=>
                <Route key={p} path={p} element={<Home/>}></Route>
            )}
            {[navItems[1].route, `${navItems[1].route}/:heroId`].map(p =>
                <Route key={p} path={p} element={<AboutMe/>}></Route>
            )}
            <Route path={navItems[2].route} element={<StarWars/>}></Route>
            <Route path={navItems[3].route} element={<Contact/>}></Route>
            <Route path={navItems[4].route} element={<Error />} />
        </Routes>
    )
};

export default Main;