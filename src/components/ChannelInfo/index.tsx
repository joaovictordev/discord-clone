import React from 'react';

import { Container, HashIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashIcon />
      <Title>chat-livre</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  )
};

export default ChannelInfo;
