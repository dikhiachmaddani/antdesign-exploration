'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface DashboardProps {
    siderCollapsed: boolean;
    setSiderCollapsed: Dispatch<SetStateAction<boolean>>
}

export const DashboardContext = createContext<DashboardProps>({} as DashboardProps);
type IDashboardProvider = {
    children: ReactNode
};
export default function DashboardProvider({ children }: Readonly<IDashboardProvider>) {
    const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false);
    return (
        <DashboardContext.Provider value={{ siderCollapsed, setSiderCollapsed }}>
            {children}
        </DashboardContext.Provider>
    );
}
