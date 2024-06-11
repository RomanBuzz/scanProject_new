import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";

import Header from "./Header";
import Main from "./Main";
import AuthForm from "./AuthForm";
import RequestForm from "./RequestForm";
import Footer from "./Footer";

function App() {

    let [isAuthorized, setAuthorized] = React.useState(false);

    const auth = () => {
        if (localStorage.getItem('token')) {
            let expireDate = new Date(JSON.parse(localStorage.getItem('token')).expire);
            let currentDate = new Date();
            if (expireDate > currentDate) {
                setAuthorized(true);
            }
        }
    }

    const handleResize = () => {
        if (window.innerWidth > 600 && window.innerWidth <= 1800) {
            document.body.style.transform = `scale(${window.innerWidth / 1440})`;
        } else if (window.innerWidth >= 280 && window.innerWidth <= 600) {
            document.body.style.transform = `scale(${window.innerWidth / 375})`;
        }
    }

    React.useEffect(() => {
        auth();
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header isAuthorized={isAuthorized} setAuthorized={setAuthorized} />
            <main>
                <Routes>
                    <Route path="*" element={
                        <Main isAuthorized={isAuthorized} />
                    } />
                    <Route path="auth" element={
                        <AuthForm setAuthorized={setAuthorized} />
                    } />
                    {isAuthorized ? (
                        <Route path="search" element={
                            <RequestForm />
                        } />
                    )
                        :
                        ("")}
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;