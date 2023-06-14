import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import useMessage from "../../Hooks/useMessage";
import useUser from "../../Hooks/useUser";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [fuser, , userFetch] = useUser();
  const [message] = useMessage();
  const gUser = user?.user;
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const createUser = async () => {
    const welcome = message?.data.find((msg) => msg?.email === gUser?.email);
    if (!fuser?.data) {
      const { data } = await primaryAxios.put(`/user`, {
        name: gUser.displayName,
        email: gUser.email,
        image: gUser.photoURL,
        messages: 1,
      });
      if (data.token) {
        localStorage.setItem("authorizationToken", data.token);
      }
      if (!welcome) {
        await primaryAxios.post(`/message`, {
          title: "Welcome to Webb School: Igniting Educational Innovation!",
          details:
            "Welcome to Webb School, where education meets innovation! Join us and explore limitless learning possibilities. Let's embark on this educational journey together!",
          email: gUser.email,
        });
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (user) {
        setIsLoading(true);
        await createUser();
        await userFetch();
        setIsLoading(false);
        navigate(from, { replace: true });
      }
    })();
  });
  if (loading || isLoading) {
    return <div className="mx-auto" id="preloaders"></div>;
  }
  return (
    <div className="flex flex-col space-y-4">
      {error && <p className="error my-5">{error.message}</p>}
      <button
        onClick={() => signInWithGoogle()}
        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-[#A25BF7] rounded-md group hover:bg-gradient-to-r from-[#4828A9] to-[#A25BF7] hover:text-white hover:font-bold focus:outline-none text-black"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          className="w-6 h-6"
          alt="image"
        />{" "}
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Social;
