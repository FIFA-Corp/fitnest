import React from "react";

export const defaultAuthContextValue = { user: null };
export const AuthContext = React.createContext(defaultAuthContextValue);
export const AuthContextProvider = AuthContext.Provider;
