import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import useRole from "../Hooks/useRole";
import Loading from "../Pages/Shared/Loading/Loading";

function RequireAdmin() {
  const [user, loading] = useAuthState(auth);
  const [role, roleLoading] = useRole();
  let location = useLocation();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (!user || role !== "admin") {
    signOut(auth);
    localStorage.removeItem("authorizationToken");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }

  return <Outlet />;
}

export default RequireAdmin;