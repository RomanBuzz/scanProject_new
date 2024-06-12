import * as React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </HashRouter>
);