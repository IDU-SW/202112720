
import './App.css';
import React, {useState, useEffect} from 'react';
import { getFirestore } from "firebase/firestore"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebaseConfig";

import {MainHeader} from './mainHeader';
import {WebNovelTable} from './webNovelTable';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function App() {

  let [platform, setPlatform] = useState();

  function myFunction(e) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("Table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function changePlatform(platform) {
    setPlatform(platform);
  }

  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <MainHeader/>
                
        <input type="text" id="searchInput" onChange={myFunction} placeholder="제목, 장르, 평점으로 검색하세요."></input>
        
        <Routes>
        <Route path="/" exact={true} element={<WebNovelTable database={db} changePlatform={changePlatform} platformName="series" platform={platform}/>}/>
          <Route path="/series" exact={true} element={<WebNovelTable database={db} changePlatform={changePlatform} platformName="series" platform={platform}/>}/>
          <Route path="/ridibooks" exact={true} element={<WebNovelTable database={db} changePlatform={changePlatform} platformName="ridibooks" platform={platform}/>}/>
          <Route path="/munpia" exact={true} element={<WebNovelTable database={db} changePlatform={changePlatform} platformName="munpia" platform={platform}/>}/>
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
