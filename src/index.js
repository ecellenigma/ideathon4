import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Tracks from './Components/Tracks'
import Final from './Components/Final';
import Whats from './Components/Whats'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Sponsors from './Components/Sponsors';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Landing/>
    <Tracks/>
    <Final/>
    <Whats/>
    <Sponsors/>
    <Faq/>
    <Footer/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
