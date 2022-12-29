import { createContext, useContext, useState, useEffect } from "react";
import { fetcher } from "../API/sessionApi";

export const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetcher()
      .then((data) => {
        setSession(data[1]);
        setLoading(false);
      })
      .catch((e) => {
        setSession(null);
        setLoading(false);
      });
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
