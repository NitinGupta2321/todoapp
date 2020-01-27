import React, {Component} from 'react';
import {Modal, Button, Form, Input} from 'antd';

const CustomModal = Form.create({name: 'user_form_in_modal'})(
    class extends Component {
        handleCancel = () => {
            if (!this.props.loading) {
                this.props.showModal();
            }
        };

        render() {
            const {getFieldDecorator} = this.props.form;
            const {type, loading, visible, selectedUserData, selectedToDoData, handleSave} = this.props;

            const MountNode = type === 'users' ? (<Modal
                title={selectedUserData ? "Update User" : "Add User"}
                visible={visible}
                onOk={handleSave}
                confirmLoading={loading}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSave}>
                        Save
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="User Name">
                        {getFieldDecorator('name', {
                            initialValue: selectedUserData && selectedUserData.name,
                            rules: [{required: true, message: 'Please input the name of the User'},
                                {max: 20, message: 'Maximum characters limit is 20.'},
                                {type: 'string', message: 'Name should contain alphabets only.'}]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            initialValue: selectedUserData && selectedUserData.email,
                            rules: [{required: true, message: 'Please input the email of the User'},
                                {max: 20, message: 'Maximum characters limit is 20.'},
                                {type: 'email', message: 'Email should be like: abc@abc.com'}]
                        })(<Input/>)}
                    </Form.Item>
                </Form>
            </Modal>) : (<Modal
                title={selectedToDoData ? "Update ToDo" : "Add ToDo"}
                visible={visible}
                onOk={handleSave}
                confirmLoading={loading}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSave}>
                        Save
                    </Button>,
                ]}
            >
                <Form layout="vertical">
                    <Form.Item label="ToDo Name">
                        {getFieldDecorator('name', {
                            initialValue: selectedToDoData && selectedToDoData.name,
                            rules: [{required: true, message: 'Please input the name of the ToDo'},
                                {max: 20, message: 'Maximum characters limit is 20.'},
                                {type: 'string', message: 'Name should contain alphabets only.'}]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            initialValue: selectedToDoData && selectedToDoData.email,
                            rules: [{required: true, message: 'Please input the email of the ToDo'},
                                {max: 20, message: 'Maximum characters limit is 20.'},
                                {type: 'email', message: 'Email should be like: abc@abc.com'}]
                        })(<Input/>)}
                    </Form.Item>
                </Form>
            </Modal>);
            return (
                MountNode
            );
        }
    }
);

export default CustomModal;