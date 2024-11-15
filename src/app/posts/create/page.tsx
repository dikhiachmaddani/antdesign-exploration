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

export default function Home() {
    const router = useRouter();

    return (
        <DashboardLayout breadcrumb={[{ title: 'Home' }, { title: 'Post' }]}>
            <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
                <Button color='primary' onClick={() => router.push('/')}>{`< Back to Post`}</Button>
            </Flex>
            <Form
                layout='vertical'
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="Title"
                    name='title'
                    rules={[{ required: true, message: 'Please input!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Deskripsi">
                    <TextArea rows={5} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </DashboardLayout>
    );
}
