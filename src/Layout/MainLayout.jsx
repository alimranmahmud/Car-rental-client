import React from 'react';
import Header from '../Componets/Header/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;