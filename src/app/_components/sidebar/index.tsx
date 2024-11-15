import { Button, Layout, Menu, MenuProps } from "antd";
import { DesktopOutlined, FileOutlined, HomeFilled, HomeTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, MoneyCollectFilled, PieChartOutlined, TeamOutlined, TransactionOutlined, UserOutlined } from '@ant-design/icons';
import { useContext } from "react";
import Link from "next/link";
import { DashboardContext } from "@/common/context/DashboardContext";

const { Sider } = Layout;

interface ISidebar {
    colorBgContainer: string
}

const sidebarItem: MenuProps['items'] = [
    {
        key: '/',
        icon: <HomeFilled />,
        label: 'Home',
    },
    {
        key: 'transaction',
        icon: <MoneyCollectFilled />,
        label: 'Transaction',
        children: [
            {
                key: 'topup',
                label: <Link href={`/topup`}>{`topup`}</Link>
            }
        ]
    },
];

export default function Sidebar({ colorBgContainer }: ISidebar) {
    const { siderCollapsed, setSiderCollapsed } = useContext(DashboardContext);

    return (
        <Sider trigger={null} collapsible collapsed={siderCollapsed}>
            <Layout style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: colorBgContainer
            }}>
                <h2 style={{
                    fontSize: 15,
                    paddingLeft: 30,
                    fontWeight: 600,
                    display: siderCollapsed ? 'none' : 'block'
                }}>
                    Explore Ant
                </h2>

                <Button
                    type="text"
                    icon={siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setSiderCollapsed(!siderCollapsed)}
                    style={{
                        fontSize: '16px',
                        width: siderCollapsed ? '100%' : 64,
                        height: 64,
                    }}
                />
            </Layout>

            <div className="demo-logo-vertical" />
            <Menu
                style={{
                    background: colorBgContainer
                }}
                mode="inline"
                defaultSelectedKeys={['topup']}
                defaultOpenKeys={['transaction']}
                items={sidebarItem}
            />
        </Sider>
    )
}