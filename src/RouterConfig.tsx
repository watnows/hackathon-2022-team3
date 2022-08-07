import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App"
import { EmptyBottle } from "./EmptyBottle";
import { Users } from "./Users ";
import { Reccomend } from "./Reccomend";
import { Liquorslider } from "./Liquorslider";
import { Liquoredit } from "./Liquoredit";

export const RouterConfig: React.VFC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="liquor" element={<App />} />
                    <Route path="empty_bottle" element={<EmptyBottle />} />
                    <Route path="users" element={<Users />} />
                    <Route path="reccomend" element={<Reccomend />} />
                    <Route path="liquoredit" element={<Liquoredit />} />                
                    <Route path="liquorslider" element={<Liquorslider/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}