import React from 'react';
import { Link, Route } from "react-router-dom";
import Index from './container/Index'
import Login from './container/Login'

export default () => {
    return (
        <div>
            <div>
                <Link to="/">首页</Link>
                <Link to="/login">登录</Link>
            </div>
            <div>
                <Route path="/" exact component={Index} />
                <Route path="/login" component={Login} />
            </div>
        </div>
    );
}