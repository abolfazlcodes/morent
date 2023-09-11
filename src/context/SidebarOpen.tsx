import { ReactNode, createContext, useState, useContext } from "react";
import { SidebarOpenContextType } from "../interfaces/contexts.interface";

interface SidebarOpenProviderProps {
  children: ReactNode;
}

const SidebarOpenContext = createContext<SidebarOpenContextType | null>(null);

function SideBarOpenProvider({ children }: SidebarOpenProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarOpenContext.Provider>
  );
}

function useSidebarOpen() {
  const context = useContext(SidebarOpenContext);

  if (context === undefined)
    throw new Error(
      "SidebarOpenContext was used outside of SidebarOpenProvider"
    );

  return context;
}

export { SideBarOpenProvider, useSidebarOpen };
