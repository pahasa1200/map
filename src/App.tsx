import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import LoginPage from "./pages/LoginPage";
import {getIsAuth} from "./redux/selectors/auth";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
    const isAuth = useSelector(getIsAuth)

    return (
        <div className={'App'}>
            {isAuth ? <HomePage /> : <LoginPage />}
        </div>
    );
}

export default App;
