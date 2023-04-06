import { createContext, useMemo, useState } from "react";

export const initialState = {theme: "light"}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme)
  // const [data, setData] = useState(initialState.data)
  const dataContext = useMemo(()=>{
    const getDentists = async()=>{
      const dataFetched = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        // console.log('response', response)
        return response.json()
      })
      return(dataFetched)
    }
    // localStorage.setItem('favoritesDentists', JSON.stringify(data))
    return {getDentists,theme,setTheme};
  }, [theme])
  return (
    <ContextGlobal.Provider value={dataContext}>
      {children}
    </ContextGlobal.Provider>
  );
};
