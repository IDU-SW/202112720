import React from 'react';
import {BrowserRouter, Link, Routes, Route, useParams, withRouter, NavLink, useLocation, generatePath, Redirect, useHistory} from "react-router-dom";

export const MainHeader = () => (
    
    <nav id="topMenu" role="navigation" class="">
        <ul  class="">
            <li><Link to="/series" class="menuLink">시리즈</Link></li>
            <li><Link to="/ridibooks" class="menuLink">리디북스</Link></li>
            <li><Link to="/munpia" class="menuLink">문피아</Link></li>
        </ul>
    </nav>

);