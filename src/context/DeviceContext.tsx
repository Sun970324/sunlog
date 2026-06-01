import { createContext, useContext, ReactNode } from 'react';

const DeviceContext = createContext<boolean>(true);

export const DeviceProvider = ({ isDesktop, children }: { isDesktop: boolean; children: ReactNode }) => (
  <DeviceContext.Provider value={isDesktop}>{children}</DeviceContext.Provider>
);

export const useDevice = () => useContext(DeviceContext);
