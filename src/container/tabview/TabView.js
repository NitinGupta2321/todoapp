import React from 'react';
import { Tabs } from 'antd';
import Users from './../users/Users';
import ToDos from './../todos/ToDos';

const { TabPane } = Tabs;

const TabsView = (props) => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="ToDos" key="1">
                <ToDos/>
            </TabPane>
            <TabPane tab="Users" key="2">
                <Users/>
            </TabPane>
        </Tabs>
    );
};

export default TabsView;