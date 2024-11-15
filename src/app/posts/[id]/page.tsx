"use client"

import { Button, Flex } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import DashboardLayout from '../../_components/dashboard-layout';
import { usePostById } from '@/app/_hooks/use-posts-query';

export default function Home() {
    const router = useRouter();
    const params = useParams();
    const { data } = usePostById(params.id as string);

    return (
        <DashboardLayout breadcrumb={[{ title: 'Home' }, { title: 'Post' }]}>
            {data ? (
                <>
                    <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
                        <Button color='primary' onClick={() => router.push('/')}>{`< Back to Post`}</Button>
                    </Flex>
                    <Flex justify='start' style={{ marginBottom: 20, flexDirection: 'column' }}>
                        <p>title:</p>
                        <p>{data.title}</p>
                        <p>body:</p>
                        <p>{data.body}</p>
                    </Flex>
                </>
            ) : null}
        </DashboardLayout>
    );
}
