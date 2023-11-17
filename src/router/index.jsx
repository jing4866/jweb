import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 引入页面组件
import HomePage from '../pages/home';
import BlogPage from '../pages/blogs';
import NotFoundPage from '../pages/boundary/notFoundPage.jsx'

export default function RouteConfig () {
    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/' element={<Navigate replace to="/home" />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
