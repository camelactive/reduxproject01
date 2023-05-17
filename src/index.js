import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateItem from './components/CreateItem/CreateItem';
import ListItems from './components/ListItems/ListItems';
import MainLayaut from './layauts/MainLayaut';

import {Provider} from "react-redux";
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
    <BrowserRouter>
        <Routes>
            <Route element = {<MainLayaut/>} >
                <Route path='/' element = { <App />} index/>
                <Route path='/create_item' element = { <CreateItem />}/>
                <Route path='/list_items' element = { <ListItems />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  
);

