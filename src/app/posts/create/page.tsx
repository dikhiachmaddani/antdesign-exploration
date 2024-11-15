"use client"

import { useRouter } from 'next/navigation';
import DashboardLayout from '../../_components/dashboard-layout';
import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};
export default function Home() {
    const router = useRouter();

    return (
        <DashboardLayout breadcrumb={[{ title: 'Home' }, { title: 'Post' }]}>
            <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
                <Button color='primary' onClick={() => router.push('/')}>{`< Back to Post`}</Button>
            </Flex>
            <Form
                {...formItemLayout}
            >
                <Form.Item
                    layout="vertical"
                    label="Title"
                    name='title'
                    rules={[{ required: true, message: 'Please input!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item layout="vertical" label="Deskripsi">
                    <TextArea rows={5} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </DashboardLayout>
    );
}
