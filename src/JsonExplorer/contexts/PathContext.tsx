import { createContext, useState } from 'react'

interface PathProviderProps {
  children: React.ReactNode;
}

interface PathContextValueType {
  path: string;
  setPath: (path: string) => void;
}

const PathContext = createContext<PathContextValueType>({
  path: '',
  setPath: () => {},
})

const PathContextProvider = ({ children }: PathProviderProps) => {
  const [path, setPath] = useState('')

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  )
}

export { PathContext, PathContextProvider }
