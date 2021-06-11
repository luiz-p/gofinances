import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGrading,
  UserName
} from './styles';

export function Dashborad() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/59424748?v=4'
              }}
            />
            <User>
              <UserGrading>Olá,</UserGrading>
              <UserName>Luiz</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}