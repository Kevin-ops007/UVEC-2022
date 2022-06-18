import { createContext, useState, useContext } from "react";

// create a context
const PageContext = createContext(null);

// provide context
export const PageContextProvider = (props) => {
  const [page, setPage] = useState("grocery");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};

// consume context
export const usePage = () => {
  return useContext(PageContext);
};
