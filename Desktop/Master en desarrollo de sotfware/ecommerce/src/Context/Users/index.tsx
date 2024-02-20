/*import { createContext } from "react";

export const UserNameContext = createContext(null);
const userData = {
    name: "Pepe",
    email: "pepe@example.com"
  }

export const UserProvider = ({children}) => {
    return (
      <UserNameContext.Provider value={userData.name}>
        {children}
      </UserNameContext.Provider>
    )
  }*/

  /*import React, { createContext, useState, useEffect } from "react";
import { Users } from "../../Interfaces/users";


  export const UserContext = createContext<Users[]>([]);
  
  export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState<Users[]>([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    async function fetchUsers() {
      try {
        const response = await fetch('/src/assets/Data/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data: Users[] = await response.json();
        setUsers(data);
      } catch (error: ) {
        console.error('Error fetching user data:', error.message);
      }
    }
  
    return (
      <UserContext.Provider value={users}>
        {children}
      </UserContext.Provider>
    );
  };*/
  
