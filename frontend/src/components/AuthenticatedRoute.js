import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

export default function AuthenticatedRoute({ element }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? element : (
    <Navigate to={`/login?redirect=${pathname}${search}`} />
  );
}