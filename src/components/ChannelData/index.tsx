import React, { useEffect, useRef, useState } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, InputWrapper, Input, InputIcon, Messages } from './styles';

const ChannelData: React.FC = () => {
  const [messages] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  
  return (
    <Container>
      <Messages ref={messagesRef}>
        {messages.map( message => (
          <ChannelMessage
            content="Bora codar um app em React." 
            author="Guilherme Rodzzzz" 
            date="08/02/2021"
            key={message}
          />
        ))}
        <ChannelMessage
          content={
            <>
              <Mention>@João Victor</Mention>, bora codar um app em React.
            </>
          }
          author="Guilherme Rodzzzz" 
          date="08/02/2021" 
          isBot 
          hasMention
        />
      </Messages>
      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
