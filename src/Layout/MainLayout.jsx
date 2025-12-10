import React from 'react';
import Header from '../Componets/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;