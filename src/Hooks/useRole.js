import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useRole = () => {
  const [user] = useAuthState(auth);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://rocky-escarpment-87440.herokuapp.com/user-role?email=${user?.email}`
      );
      if (data?.role) {
        setRole(data?.role);
        setRoleLoading(false);
      }
      setUserName(data?.name);
    })();
  }, [user]);
  return [role, roleLoading, userName];
};

export default useRole;