"use client"

import { Button, Table, Flex } from 'antd';
import { useRouter } from 'next/navigation';
import { usePosts } from './_hooks/use-posts-query';
import { PostResponse } from '@/types/post-response';
import Link from 'next/link';
import DashboardLayout from './_components/dashboard-layout';

export default function Home() {

  const router = useRouter();
  const { data: posts = [] } = usePosts();
  const columns = [
    {
      title: "Title",
      key: "title",
      width: "auto",
      dataIndex: "title",
    },
    {
      title: 'Body',
      key: 'body',
      dataIndex: 'body',
    },
    {
      title: "Action",
      key: "id",
      width: "auto",
      render: (posts: PostResponse) => (<Link type='primary' href={`posts/${posts.id}`}>Detail</Link>)
    },
  ];
  
  return (
    <DashboardLayout breadcrumb={[{ title: 'Home' }]}>
      <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 20 }}>Posts</h1>
        <Button type="primary" onClick={() => router.push('/posts/create')}>Create Post</Button>
      </Flex>
      <Table dataSource={posts} columns={columns} />
    </DashboardLayout>
  );
}
