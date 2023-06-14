import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import primaryAxios from "../Api/primaryAxios";
import auth from "../firebase.init";

const useUser = () => {
  const [user] = useAuthState(auth);
  const {
    data: fuser,
    isLoading,
    refetch,
  } = useQuery(["user", user?.email], () =>
    primaryAxios.get(`/user-role?email=${user?.email}`)
  );
  const userLoading = isLoading;
  const userFetch = refetch;
  return [fuser, userLoading, userFetch, user];
};

export default useUser;
