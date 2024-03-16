import React, { useState, useEffect } from 'react';
import { ProTable } from '@ant-design/pro-components';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL,  {
        headers:{"Content-Type": "application/json"}
      })
      const json = await response.json()
      const newDatas = {
        data:json,
        success:true,
        total:100
      }
      return Promise.resolve(newDatas);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];

  return (
    <ProTable
      columns={columns}
      request={fetchData}
      loading={loading}
      rowKey="id"
      search={false}
      toolBarRender={false}
    />
  );
};

export default App;