
import { Metadata } from "next/types";
import Home from "./home/page";


export const metadata: Metadata = {
  title: 'Home Schedule',
  description: 'Manage your home schedule efficiently',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Main() {
  return (
    
      <Home />
    
  );
}
