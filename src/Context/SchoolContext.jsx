import { createContext, useContext, useState, useEffect } from "react";

const SchoolContext = createContext(null);

export const useSchoolContext = () => useContext(SchoolContext);

const SchoolContextProvider = ({ children }) => {
  const [expandSideBar, setExpandSideBar] = useState(true);

  const [authenticatedUser, setAuthenticatedUser] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("userInfo");
        return storedUser && storedUser !== "undefined"
          ? JSON.parse(storedUser)
          : {};
      } catch (error) {
        console.error("Failed to parse userInfo from localStorage:", error);
        return {};
      }
    }
    return {};
  });

  const [role, setRole] = useState(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("userRole");
      return storedRole && storedRole !== "undefined" ? storedRole : "";
    }
    return "";
  });

  // Sync changes back to localStorage
  useEffect(() => {
    if (authenticatedUser && typeof authenticatedUser === "object") {
      localStorage.setItem("userInfo", JSON.stringify(authenticatedUser));
    }
  }, [authenticatedUser]);

  useEffect(() => {
    if (typeof role === "string") {
      localStorage.setItem("userRole", role);
    }
  }, [role]);

  const contextValue = {
    expandSideBar,
    setExpandSideBar,
    authenticatedUser,
    setAuthenticatedUser,
    role,
    setRole,
  };

  return (
    <SchoolContext.Provider value={contextValue}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;




// import { createContext, useContext, useState } from "react";

// const SchoolContext = createContext(null);
// // to consume my data directly from the context
// export const useSchoolContext = () => useContext(SchoolContext);

// const SchoolContextProvider = ({ children }) => {
//   const [expandSideBar, setExpandSideBar] = useState(true);
//   // Get authenticated user from local storage or set to an empty object
//   // This is to ensure that the user data persists even after a page refresh
//   const [authenticatedUser, setAuthenticatedUser] = useState(
//     JSON.parse(localStorage.getItem("userInfo")) || {}
//   );
//   // Get the user role from local storage or set to an empty string
//   const [role, setRole] = useState(localStorage.getItem("userRole") || "");
//   const contextValue = {
//     expandSideBar,
//     setExpandSideBar,
//     authenticatedUser,
//     setAuthenticatedUser,
//     role,
//     setRole,
//   };
//   return (
//     <SchoolContext.Provider value={contextValue}>
//       {children}
//     </SchoolContext.Provider>
//   );
// };

// export default SchoolContextProvider;
