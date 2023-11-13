'use client';

import { createContext, useContext, useState } from 'react';

// Criando o user context
const UserContext = createContext();

// Fazendo a função que envolverá todo o aplicativo usando o Context Provider
export default function AppStore({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Victor Tosi',
  });



  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Faça useUserContext Hook para usar facilmente nosso contexto em todo o aplicativo
export function useUserContext() {
  return useContext(UserContext);
}
