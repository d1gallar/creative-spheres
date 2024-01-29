"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CollapseContextProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  openCollapse: () => void;
  closeCollapse: () => void;
}

const CollapseContext = createContext<CollapseContextProps | undefined>(
  undefined,
);

interface CollapseProviderProps {
  children: ReactNode;
}

export const CollapseProvider: React.FC<CollapseProviderProps> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapseState) => !prevCollapseState);
  };

  const openCollapse = () => {
    setIsCollapsed(true);
  };

  const closeCollapse = () => {
    setIsCollapsed(false);
  };

  const contextValue: CollapseContextProps = {
    isCollapsed,
    toggleCollapse,
    openCollapse,
    closeCollapse,
  };

  return (
    <CollapseContext.Provider value={contextValue}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = (): CollapseContextProps => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error("useCollapse must be used within a CollapseProvider");
  }
  return context;
};
