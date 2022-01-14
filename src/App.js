import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';  // note that this has been recently updated

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import Error404Page from './pages/Error404Page'

import { Header, BrandConnecticut, BrandCoders, Container, ImgContainer, HeadshotImage } from './Styles'


const App = () => {
    return (
        <div>
            <Header>
                <BrandConnecticut>Connecticut</BrandConnecticut>
                <BrandCoders>Coders</BrandCoders>
            </Header>

            <BrowserRouter>
                <Routes>  
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/profile/:index" element={<ProfilePage/>} />
                    <Route exact path="/contact" element={<ContactPage/>} />
                    <Route path="/404" element={<Error404Page/>} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes> 
            </BrowserRouter>
        </div>
        

    );
}

export default App;

/*



*/