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

  import React, { createContext, useState, useEffect } from "react";

  export type UserData = {
    id: string;
    Name: string;
    email: string;
    password: string;
    cart: any[];
    wishlist: any[];
  };
  
  export const UserContext = createContext<UserData[]>([]);
  
  export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState<UserData[]>([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    async function fetchUsers() {
      try {
        const response = await fetch('/src/assets/Data/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data: UserData[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    }
  
    return (
      <UserContext.Provider value={users}>
        {children}
      </UserContext.Provider>
    );
  };
  
