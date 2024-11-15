import "./globals.css";
import { ConfigProvider } from "antd";
import { ReactNode } from 'react'
import DashboardProvider from '../common/context/DashboardContext';
import type { Metadata } from "next";
import ReactQueryProvider from "@/libs/react-query";

export const metadata: Metadata = {
  title: "Ant Design Explorations",
  description: "Ant Design Explorations",
};

type IRootLayout = {
  children: ReactNode
};

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                siderBg: '#ffff',
              }
            },
            token: {
              colorBgContainer: '#ffff',
              borderRadiusLG: 2
            }
          }}>
          <ReactQueryProvider>
            <DashboardProvider>
              {children}
            </DashboardProvider>
          </ReactQueryProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
