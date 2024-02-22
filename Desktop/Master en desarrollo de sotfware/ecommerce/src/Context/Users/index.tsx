/*import React, { createContext, useState, useContext } from "react";
import { Users } from "../../Interfaces/users";

export interface UserContextType {
  users: Users[];
  setUsers: Function;
}

export const userContext = createContext({} as UserContextType);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState<Users[]>([]);
  
  return (
    <userContext.Provider value={{ users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}*/

/*import React, { createContext, useState, useContext } from "react";
import { Users } from "../../Interfaces/users";



export interface UserContextType {
  users: Users;
  setUsers: Function;
}

/*Context
export const userContext = createContext({} as UserContextType);

/*Proveedor
export const UserProvider: React.FC<{ usersData: Users }> = ({ children, usersData }) => {
  const [users, setUsers] = useState<Users>(usersData); // Inicializa el estado con los datos de los usuarios

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};


/*  customHook 
export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUsersContext debe ser utilizado dentro de un UserProvider");
  }
  return context;
}
*/

import React, { createContext, useState, useContext } from "react";
import { Users } from "../../Interfaces/users";

export interface UserContextType {
  users: Users;
  setUsers: Function;
}

export const userContext = createContext({} as UserContextType);

export const UserProvider: React.FC<{ usersData: Users }> = ({ children, usersData }) => {
  const [users, setUsers] = useState<Users>(usersData);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUsersContext debe ser utilizado dentro de un UserProvider");
  }
  return context;
}




  


