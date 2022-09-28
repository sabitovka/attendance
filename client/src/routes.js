import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import AttendanceJournal from "./pages/attendance-journal";
import StatementPage from "./pages/StatementPage";
import Absence20Page from "./pages/Absence20Page";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Omissions from "./pages/omissions/omissions";

export const useRoutes = () => {

  return (
    <Routes>
      <Route path="/journal" exact element={ <AttendanceJournal /> } />
      <Route path="/statement" element={ <StatementPage /> } />
      <Route path="/absence20" exact element={ <Absence20Page /> } />
      <Route path="/login" exact element={ <LoginPage /> } />
      <Route path="/" element={ <HomePage /> } />
      <Route path="/omissions" exact element={ <Omissions /> } />
    </Routes>
  )
}