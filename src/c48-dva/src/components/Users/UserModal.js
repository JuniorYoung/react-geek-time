import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {
    constructor(props) {
        super(props);
        this.modalType = {
            add: 'Add User',
            edit: 'Edit User'
        }
        this.state = {
            visible: false,
        };
    }

    showModalHandler = (e) => {
        if (e) e.preventDefault();
        this.setState({
            visible: true,
        });
    }

    hideModalHandler = () => {
        this.setState({
            visible: false,
        });
        this.props.form.resetFields();
    };

    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModalHandler();
            }
        });
    };

    render() {
        const { children, modalType } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { name, email, website } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <span>
                <span onClick={this.showModalHandler}>{children}</span>
                <Modal
                    title={this.modalType[modalType]}
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModalHandler}
                >
                    <Form onSubmit={this.okHandler}>
                        <FormItem
                            {...formItemLayout}
                            label="Name"
                        >
                            {
                                getFieldDecorator('name', {
                                    initialValue: name,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Email"
                        >
                            {
                                getFieldDecorator('email', {
                                    initialValue: email,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Website"
                        >
                            {
                                getFieldDecorator('website', {
                                    initialValue: website,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
}

export default Form.create()(UserEditModal);