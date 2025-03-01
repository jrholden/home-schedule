import {useContext} from "react";
import SingleItemContext from "@context/SingleItemContext";

const useSingleItemContext = () => {
  const context = useContext(SingleItemContext);

  if (!context) {
    throw Error("useSingleItemContext must be used inside an SingleItemContextProvider");
  }
  return context;
};

export default useSingleItemContext;
