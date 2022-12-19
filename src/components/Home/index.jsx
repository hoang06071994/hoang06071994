
import {Space, Button, Divider} from 'antd';
import React from 'react';
import { useState } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';

const Home = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <h1>page home</h1>
      <Space>
        <Button type='primary' danger onClick={() => setDisabled(!disabled)}>click me</Button>
        <Button type='primary' disabled={disabled} >click me</Button>
        <Button type='primary' danger ghost>click me</Button>
        <Button type='primary' shape='round'> <PlayCircleOutlined />click</Button>
   
      </Space>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ipsum in, culpa et ullam, quisquam iure, 
          quasi corporis cupiditate assumenda facilis veniam recusandae excepturi inventore nulla fugiat quas illum odio.</p>
        <Divider plain orientation='left' dashed='true'>Text</Divider>
    </>
  )
}

export default Home;