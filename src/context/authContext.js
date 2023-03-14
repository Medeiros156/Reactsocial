import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const users = [
    { id: 1, name: "John Doe", email: "q@q", password: "qq", profilePic: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", password: "password", profilePic: "https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_760BartSimpsonTHESIMPSONSPIN.png?v=1636665695" }
  ];

  const login = (email, password) => {
    console.log(email, password);
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      console.log(currentUser);
      throw new Error('Invalid email or password');
    }
  };
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
