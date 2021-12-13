import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/home';
import Test from '../page/test';

const RouteConfigure = (props) => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/test" element={<Test/>} exact/>
          </Routes>
    </>
};

export default RouteConfigure;