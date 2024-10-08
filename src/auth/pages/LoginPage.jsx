import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleLogin = () => {
    const lastPAth = localStorage.getItem("lastPath") || "/";

    login("Admin");


    navigate(lastPAth, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button onClick={HandleLogin} className="btn btn-primary">Login</button>
    </div>
  );
};
