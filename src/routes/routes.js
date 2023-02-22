import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Ranking } from "../pages/Ranking";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route element={<Ranking />} path="/"/>
                <Route element={<Home />} path="/home"/>
                <Route element={<SignIn />} path="/sign-in"/>
                <Route element={<SignUp />} path="/sign-up"/>
            </Switch>
        </BrowserRouter>
    )
}