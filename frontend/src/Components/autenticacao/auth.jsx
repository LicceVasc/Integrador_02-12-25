import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState(null);

  useEffect(() => {
    const autenticado = localStorage.getItem("usuarioAutenticado") === "true";
    const role = localStorage.getItem("tipoUsuario");
    setUsuarioLogado(autenticado);
    setTipoUsuario(role);
  }, []);

  const login = (role) => {
    localStorage.setItem("usuarioAutenticado", "true");
    localStorage.setItem("tipoUsuario", role);
    setUsuarioLogado(true);
    setTipoUsuario(role);
  };

  const logout = () => {
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("tipoUsuario");
    setUsuarioLogado(false);
    setTipoUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioLogado, tipoUsuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};