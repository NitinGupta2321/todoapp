import React from 'react';
import styled from 'styled-components';
import TabView from './container/tabview/TabView';
import Image from './component/image/Image';
import logo from './filestore/logo192.png';

const AppWrapper = styled.div`
  max-width: calc(768px + 60px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 5px 16px;
  flex-direction: column;
  background-color: white;
`;
const HeaderDiv = styled.div`
  max-width: 100%;
  display: flex;
`;

const HeaderText = styled.b`
  margin: auto 0;
  text-align: center;
`;

const App = (props) => {
    return (
        <AppWrapper>
            <HeaderDiv>
                <Image src={logo} width={60} height={40} mode='fit' />
                <HeaderText>ToDo App</HeaderText>
            </HeaderDiv>
            <TabView/>
        </AppWrapper>
    );
};

export default App
