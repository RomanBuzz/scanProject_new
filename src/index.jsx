import * as React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>
);