import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BookLists from './components/BookLists/BookLists';
import Activities from './components/Activities/Activities';
import BookDetails from './components/BookDetails/BookDetails';
import AboutUs from './components/About/About';
import ReadBook from './components/Reader/Reader';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/fonts/MyanmarSansPro-Regular.ttf';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/stories" element={<BookLists />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/bookDetails" element={<BookDetails />} />
          <Route path="/read" element={<ReadBook />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
