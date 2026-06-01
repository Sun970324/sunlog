import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const DeviceContext = createContext<boolean>(true);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return <DeviceContext.Provider value={isDesktop}>{children}</DeviceContext.Provider>;
};

export const useDevice = () => useContext(DeviceContext);
