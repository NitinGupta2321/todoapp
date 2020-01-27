import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Table, Divider, Button, Modal} from 'antd';
import CustomModal from './../../component/custommodal/CustomModal'
import {addToDos, deleteToDos} from './../../actions/todos';

const {confirm} = Modal;

class ToDos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            selectedToDoData: {}
        };
    }

    showModal = (todo) => {
        const {form} = this.formRef.props;
        form.resetFields();
        this.setState((state) => {
            return {visible: !state.visible, selectedToDoData: todo};
        });
    };

    showDeleteConfirm = (todo) => {
        confirm({
            title: 'Are you sure for deleting this ToDo?',
            content: 'Action Name: ' + todo.action,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                this.handleDelete(todo);
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
            let formatedValues = {
                ...values,
                dateAdded: values['dateAdded'].format('YYYY-MM-DD HH:mm:ss')
            };
            console.log(formatedValues);
            let data = {...this.props.todos.todosData, [formatedValues.action]: formatedValues};
            this.props.addToDos(data, this.showModal);
        });
    };

    handleDelete = (todo) => {
        let data = {...this.props.todos.todosData};
        delete data[todo.action];
        this.props.deleteToDos(data);
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        const {loading, todosData} = this.props.todos;
        const tableToDosData = Object.values(todosData);
        const columns = [
            {
                title: 'Action Name',
                dataIndex: 'action',
                key: 'action',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Date Added',
                dataIndex: 'dateAdded',
                key: 'dateAdded',
            },
            {
                title: 'Actions',
                key: 'actions',
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
                    Create ToDo
                </Button>
                <Table columns={columns} dataSource={tableToDosData} rowKey={row => row.action}/>
                <CustomModal type='todos' visible={this.state.visible} loading={loading} showModal={this.showModal}
                             handleSave={this.handleSave} selectedToDoData={this.state.selectedToDoData}
                             wrappedComponentRef={this.saveFormRef}/>
            </div>
        )
    }
}

ToDos.propTypes = {
    addToDos: PropTypes.func,
    deleteToDos: PropTypes.func,
    todos: PropTypes.object,

};

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addToDos, deleteToDos})(ToDos);
