import { AuthContext ,authReducer} from "../context";
import { types } from "../types/types";
import { useReducer } from "react";
import PropTypes from "prop-types";



const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
return {
    logged: Boolean(user),
    user: user,
};
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = async (name = "") => {

    const user = { id: "ABC", name: name };
    const action = {
      type: types.login,
      payload: {
        ...user,
      },
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };
    localStorage.removeItem("user");
    dispatch(action);
  };

  return <AuthContext.Provider value={{
    ...authState,
    login : login,
    logout : logout,

  }}>
    {children}
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
