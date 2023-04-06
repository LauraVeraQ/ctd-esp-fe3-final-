import { createContext, useMemo, useState } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme)
  const [data, setData] = useState(initialState.data)
  const dataContext = useMemo(()=>{
  const getDentists = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
      // console.log('response', response)
      return response.json()
    })
    return(data)
  }
  localStorage.setItem('favoritesDentists', JSON.stringify(data))
  return {getDentists,theme, data, setTheme, setData};
  }, [theme, data])
  return (
    <ContextGlobal.Provider value={dataContext}>
      {children}
    </ContextGlobal.Provider>
  );
};
