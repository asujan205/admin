import { Form, Table, Tag, Space,Button,Popconfirm,Typography,Popover,Input,Select} from 'antd';
import *as React from 'react';
import {useState,useEffect} from 'react';
import 'antd/dist/antd.css';

 export interface User{
  name:string,
  email:string,
  membership:string,
  post:string,
  comments:string,
  flags:Boolean,
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    
  },   
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
 
  
  {
    title: 'Membership',
    key: 'mebership',
    dataIndex: 'membership',
    
  },{
    title: 'Post',
    key: 'Post',
    dataIndex: 'post',
    
  },
  {
    title: 'Comment',
    key: 'comment',
    dataIndex: 'comments',
    
  },
  {
    title: 'Action',
    key: 'action',
    render: ( record: { key: React.Key }) =>
          (<div>
            <Popconfirm title="Sure to delete?" >
            <Button type="primary" danger>Delete</Button>
            </Popconfirm>
            <Popover content={content} title="Edit">
    <Button type="primary">Edit</Button>
  </Popover>,
            <Button danger>Block</Button>
</div>
          )
          
  },
];
const content = (
  <div>
  <Form.Item label="First Name">
        <Space>
          <Form.Item
            name="First Name"
            noStyle
            rules={[{ required: true, message: 'First Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          </Space>

          </Form.Item>
          <Form.Item label="Middle Name">
        <Space>
          <Form.Item
            name="Middle Name"
            noStyle
           
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          </Space>

          </Form.Item>
          <Form.Item label="Last Name">
        <Space>
          <Form.Item
            name="Last Name"
            noStyle
            rules={[{ required: true, message: 'Last Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          </Space>

          </Form.Item>
          <Form.Item label="Email">
        <Space>
          <Form.Item
            name="email"
            noStyle
            rules={[{ required: true, message: 'Email Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          </Space>

          </Form.Item> <Form.Item label="DisplayNmae">
        <Space>
          <Form.Item
            name="displayname"
            noStyle
            rules={[{ required: true, message: ' Name is required' }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
          </Space>

          </Form.Item>
            <Form.Item label="Membership">
        <Input.Group compact>
          <Form.Item
            name={"Membership"}
            noStyle
            rules={[{ required: true, message: 'Membership is required' }]}
          >
            <Select placeholder="Select membership">
             
            </Select>
          </Form.Item>
          </Input.Group>
          </Form.Item>
           <Form.Item label="Status">
        <Input.Group compact>
          <Form.Item
            name={"Status"}
            noStyle
            rules={[{ required: true, message: 'Status is required' }]}
          >
            <Select placeholder="Select status">
             
            </Select>
          </Form.Item>
          </Input.Group>
          </Form.Item>
          
  </div>
);
//const row:User[];
const data:User[] = [
   {
    
    name: 'John Brown',
    email:"asujan205@gmail.com" ,
   membership:"gold",
   post:"engineer",
   comments:"hello world",
   flags:true
  },
  
];
const url="";
function table(){
return(
<Table columns={columns} dataSource={data}  />
);
}
export default table;