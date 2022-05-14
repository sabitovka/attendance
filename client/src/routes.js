import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import JournalPage from "./pages/JournalPage";
import StatementPage from "./pages/StatementPage";
import Absence20Page from "./pages/Absence20Page";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export const useRoutes = () => {

  return (
    <Routes>
      <Route path="/journal" exact element={ <JournalPage /> } />
      <Route path="/statement" element={ <StatementPage /> } />
      <Route path="/absence20" exact element={ <Absence20Page /> } />
      <Route path="/login" exact element={ <LoginPage /> } />
      <Route path="/" element={ <HomePage /> } />
    </Routes>
  )
}