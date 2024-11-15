import { Breadcrumb, Layout, theme } from 'antd';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import { ReactNode } from 'react';

const { Content } = Layout;

type IBreadcrumb = {
  title: string;
}
type IDashboardLayout = {
  children: ReactNode,
  breadcrumb: IBreadcrumb[]
};

export default function DashboardLayout({ children, breadcrumb }: IDashboardLayout) {
  const {
    token: {
      colorBgContainer,
      borderRadiusLG
    },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar colorBgContainer={colorBgContainer} />
      <Layout>
        <Navbar colorBgContainer={colorBgContainer} />

        {/* content */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={breadcrumb}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
        {/* end content */}

      </Layout>
    </Layout>
  )
}