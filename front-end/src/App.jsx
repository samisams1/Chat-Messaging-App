import React from 'react'
import { StreamChat } from 'stream-chat';
import {Chat} from 'stream-chat-react';
import { ChannelContainer, ChannelListContainer } from './components';
import './App.css'
const apiKey = 'qg';
const client = StreamChat.getInstance(apiKey);
export default function App() {
 
  return (
    <div className='app__wrapper'>
       <Chat client={client} theam="team light">
       <ChannelListContainer/>
         <ChannelContainer/>
  
       </Chat>
    </div>
  )
}
