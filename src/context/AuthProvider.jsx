import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

import {api} from "../services/api"
export const AuthContext = createContext({});

export function AuthProvider( {children} ) {
  const [data, setData] = useState({});

 async function signIn({email, password}) {
  try{
  const response = await api.post("/sessions", {email, password})
  const {user, token} = response.data
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;


  localStorage.setItem("@rocketMovie_user", JSON.stringify(user))
  localStorage.setItem("@rocketMovie_token", token)

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
  localStorage.removeItem("@rocketMovie_user")
  localStorage.removeItem("@rocketMovie_token")
  setData({})
 }
 

 async function updateUser({user, avatarFile}){
  
  try {
    if(avatarFile) {
      const formUpdateAvatar = new FormData();
      formUpdateAvatar.append("avatar", avatarFile)
      const response = await api.patch("users/avatar", formUpdateAvatar)
      user.avatar = response.data.avatar
    }
    
    await api.put("users", user)
    localStorage.setItem("@rocketMovie_user", JSON.stringify(user))
    setData({user, token: data.token})
    alert("usuário foi atualizado!")
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("não foi possível Atualizar ");
    }
  }



 }


  useEffect(()=> {
    const user = localStorage.getItem("@rocketMovie_user")
    const token = localStorage.getItem("@rocketMovie_token")

    if(user && token){
      
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setData({user: JSON.parse(user), token})
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateUser,
        user: data.user,
       }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}