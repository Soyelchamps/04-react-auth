import { createContext } from "react";

const AuthConstext = createContext();
function AuthProvider(props) {
  return (
    <AuthConstext.Provider value={props}>
      {props.children}
    </AuthConstext.Provider>
  );
}
