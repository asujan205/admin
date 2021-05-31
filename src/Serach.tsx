import *as React from 'react';

import {Row,Col, 
Button,Input,Select ,Tooltip} from 'antd';
import { SearchOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';

const { Option } = Select;




function searchform() {
 
  return (<>
   
  <Input placeholder="Name" style={{ width: '15%' }} />
  <Input placeholder="Email"  style={{ width: '15%' }}/>
    <Select defaultValue="Membership" style={{ width: 150 }} >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      </Select> 

      <Select defaultValue="Status" style={{ width: 150 }} >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      </Select>
       <Select defaultValue="Flag" style={{ width: 140 }} >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      </Select>
  <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
     <Button type="primary" danger>
      Reset
    </Button>

</>

);
}
export default searchform;