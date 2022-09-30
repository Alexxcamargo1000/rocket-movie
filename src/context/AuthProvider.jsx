import { useState } from "react";
import { createContext } from "react";
import {api} from "../services/api"
export const AuthContext = createContext({});

export function AuthProvider( {children} ) {
  const [data, setData] = useState({});

 async function signIn({email, password}) {
  try{
  const response = await api.post("/sessions", {email, password})
  const {user, token} = response.data
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  setData({user, token});
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("não foi possível entrar");
    }
  }


 }

 function signOut() {
  setData({})
 }


  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
       }}
    >
      {children}
    </AuthContext.Provider>
  )
}