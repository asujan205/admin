import *as React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Col} from 'antd';

import Searchform from "./Serach";
import Table from "./Table";
import 'antd/dist/antd.css';

function App() {

  return (<>
   <Row gutter={[12, 12]}>
 <Searchform />
</Row>


  <Row gutter={[16, 16]}>
<Table />
</Row>


<Row gutter={[16, 16]}>
  
</Row>
</>
  );
}

export default App;
