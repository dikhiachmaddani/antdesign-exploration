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
import { PostRequest } from '@/types/post-request';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Home() {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = (values: PostRequest) => {
        console.log('Form values:', values);
    };
    return (
        <DashboardLayout breadcrumb={[{ title: 'Home' }, { title: 'Post' }]}>
            <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
                <Button color='primary' onClick={() => router.push('/')}>{`< Back to Post`}</Button>
            </Flex>
            <Form
                form={form}
                onFinish={onFinish}
                layout='vertical'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="Title"
                    name='title'
                    rules={[{ required: true, message: 'Please input title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Body" name='body' rules={[{ required: true, message: 'Please input body!' }]}>
                    <TextArea rows={5} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </DashboardLayout>
    );
}
