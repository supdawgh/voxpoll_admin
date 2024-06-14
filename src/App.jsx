import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import Dashboard from "./components/Dashboard";
import Unverified from "./components/Unverified";
import AllEvents from "./components/AllEvents";
import UnverifiedDetails from "./components/UnverifiedDetails";
import EventDetails from "./components/EventDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/unverified"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Unverified />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/unverified/:id"
          element={
            <ProtectedRoute>
              <AppLayout>
                <UnverifiedDetails />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/allevents"
          element={
            <ProtectedRoute>
              <AppLayout>
                <AllEvents />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/allevents/:id"
          element={
            <ProtectedRoute>
              <AppLayout>
                <EventDetails />
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
