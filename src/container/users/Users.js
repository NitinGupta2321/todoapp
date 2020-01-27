import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Table, Divider, Button, Modal} from 'antd';
import CustomModal from './../../component/custommodal/CustomModal'
import {addUsers, deleteUsers} from './../../actions/users';

const {confirm} = Modal;

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            selectedUserData: {}
        };
    }

    showModal = (user) => {
        const {form} = this.formRef.props;
        form.resetFields();
        this.setState((state) => {
            return {visible: !state.visible, selectedUserData: user};
        });
    };

    showDeleteConfirm = (user) => {
        confirm({
            title: 'Are you sure for deleting this User??',
            content: 'Name: ' + user.name,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                this.handleDelete(user);
            },
            onCancel: () => {
            },
        });
    };

    handleSave = () => {
        const {form} = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            let data = {...this.props.users.usersData, [values.email]: values};
            this.props.addUsers(data, this.showModal);
        });
    };

    handleDelete = (user) => {
        let data = {...this.props.users.usersData};
        delete data[user.email];
        this.props.deleteUsers(data);
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        const {loading, usersData} = this.props.users;
        const tableUsersData = Object.values(usersData);
        const columns = [
            {
                title: 'User Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Email ID',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, row) => (
                    <span>
                <Button type="link" size="small" onClick={() => this.showModal(row)}>
                  Edit
                </Button>
                <Divider type="vertical"/>
                <Button type="link" size="small" onClick={() => this.showDeleteConfirm(row)}>
                  Delete
                </Button>
            </span>
                ),
            },
        ];
        return (
            <div>
                <Button type="back" onClick={() => this.showModal()}>
                    Create User
                </Button>
                <Table columns={columns} dataSource={tableUsersData} rowKey={row => row.email}/>
                <CustomModal type='users' visible={this.state.visible} loading={loading} showModal={this.showModal}
                             handleSave={this.handleSave} selectedUserData={this.state.selectedUserData}
                             wrappedComponentRef={this.saveFormRef}/>
            </div>
        )
    }
}

Users.propTypes = {
    addUsers: PropTypes.func,
    deleteUsers: PropTypes.func,
    users: PropTypes.object,

};

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {addUsers, deleteUsers})(Users);
