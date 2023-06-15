import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import primaryAxios from "../Api/primaryAxios";
import auth from "../firebase.init";

const useRole = () => {
  const [user] = useAuthState(auth);
  const [roleLoading, setRoleLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState("");

  const fetchRoleData = async () => {
    if (user) {
      try {
        const { data } = await primaryAxios.get(
          `/user-role?email=${user?.email}`
        );
        setRole(data?.role);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    setRoleLoading(false);
  };

  useEffect(() => {
    fetchRoleData();
  }, [user]);
  const fetchRole = () => {
    fetchRoleData();
  };
  return [role, roleLoading, userData, fetchRole];
};

export default useRole;
