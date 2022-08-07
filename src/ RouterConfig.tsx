import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App"
import { Service } from "./Service";
export const RouterConfig: React.VFC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="service" element={<Service />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}