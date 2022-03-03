import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './main/Routes'
// import './App.css';

export default () =>
    <BrowserRouter>
        <div className="app">
            <Routes/>
        </div>
    </BrowserRouter>
