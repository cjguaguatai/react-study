import React, { Component } from 'react';
import { Button, ConfigProvider, Space,DatePicker } from 'antd';
import { HomeOutlined, WechatOutlined } from '@ant-design/icons';
export default class App extends Component {
  onChange=()=>{}
  render() {
    return (
      <div>
        App
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: '#00b96b',
              borderRadius: 2,
              
              // 派生变量，影响范围小
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          <Button icon={<WechatOutlined />} type="primary">
            Primary Button
          </Button>
          <HomeOutlined />
          <DatePicker onChange={this.onChange} picker="month" />
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
          </Space>
        </ConfigProvider>
      </div>
    );
  }
}
