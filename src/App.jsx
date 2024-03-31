import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { ProTable } from '@ant-design/pro-components';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [loading, setLoading] = useState(true);
  const actionRef = useRef();

  const fetchSomeData = () => {
    actionRef?.current?.reload();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL+`/${abc}`,  {
        headers:{"Content-Type": "application/json"}
      })
      const json = await response.json()
      const newDatas = {
        data:json,
        success:true,
        total:json.length
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
    <>
    請輸入查詢內容:<Input></Input> <Button>查詢</Button>
    <ProTable
      actionRef={actionRef}
      columns={columns}
      request={fetchData}
      loading={loading}
      rowKey="id"
      toolBarRender={false}
      search={false}
    />
    </>
  );
};

export default App;