import { Dropdown, Layout, MenuProps, Space } from "antd";
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;

interface INavbar {
    colorBgContainer: string
}

const items: MenuProps['items'] = [
    {
        key: '1',
        danger: true,
        icon: <LogoutOutlined />,
        label: 'Logout',
    },
];

export default function Navbar({ colorBgContainer }: INavbar) {
    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '24px', 
                background: colorBgContainer
            }}>
            <div></div>
            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hello, Ant User
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </Header>
    )
}