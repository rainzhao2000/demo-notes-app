import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={
        <UnauthenticatedRoute element={<Login />} />
      } />
      <Route path="/signup" element={
        <UnauthenticatedRoute element={<Signup />} />
      } />
      <Route path="/settings" element={
        <AuthenticatedRoute element={<Settings />} />
      } />
      <Route path="/notes/new" element={
        <AuthenticatedRoute element={<NewNote />} />
      } />
      <Route path="/notes/:id" element={
        <AuthenticatedRoute element={<Notes />} />
      } />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}