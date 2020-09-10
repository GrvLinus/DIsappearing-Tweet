import React from 'react';
import 'antd/dist/antd.css';

import { List, Avatar } from 'antd';



function template(props) {
  const data = [
    {
      title: 'Guest User',
      desc: props.value,
      time: props.time
    }
  ];
  return (
    <div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={item.title}
              description={item.desc}
              time={item.time}
            />
          </List.Item>
        )}
      />
  
    </div>
  );
}

export default template;