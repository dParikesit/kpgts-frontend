import { useState } from "react";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../components/Controller/AuthContext";
import NavigationRow from "../components/TopBar/NavigationRow";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [role, setRole] = useState(
    typeof window !== "undefined" ? localStorage.getItem("role") : ""
  );
  const addRole = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };
  const removeRole = () => {
    localStorage.removeItem("role");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ role, addRole, removeRole }}>
      <NavigationRow />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
