import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;