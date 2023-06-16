import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import primaryAxios from "../Api/primaryAxios";
import auth from "../firebase.init";

const useRole = () => {
  const [user] = useAuthState(auth);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchRoleData = async () => {
    const { data } = await primaryAxios.get(`/user-role?email=${user?.email}`);
    if (data) {
      setRole(data?.role);
      setUserData(data);
      setRoleLoading(false);
    } else {
      setRoleLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRoleData();
    } else {
      setRoleLoading(false);
    }
  }, [user]);
  const fetchRole = () => {
    fetchRoleData();
  };
  return [role, roleLoading, userData, fetchRole];
};

export default useRole;
