import React from 'react';
import Template from './template'
import './Tweets.css'

function Tweets(props){
    const items=props.items;
    const Tweets=items.map(item =>
        {
            return <div className="list" key="item.key">
                  <p> 
                      <Template value={item.text}  />
                  </p> 
            </div>
        })
    return(
            <div>{Tweets}</div>
    )
}
export default Tweets; 