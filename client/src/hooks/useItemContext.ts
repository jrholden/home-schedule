import {useContext} from "react";
import ItemContext from "@context/ItemContext";

const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw Error("useItemContext must be used inside an ItemContextProvider");
  }
  return context;
};

export default useItemContext;
