import {useContext} from "react";
import DateContext from "@context/DateContext";

const useDateContext = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw Error("useDateContext must be used inside an DateContextProvider");
  }
  return context;
};

export default useDateContext;